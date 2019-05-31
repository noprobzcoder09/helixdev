<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Employee;
use App\Models\Greenhat;

use App\Services\AlertServices;
use App\Services\GreenhatServices;
use App\Services\NotificationServices;
use App\Services\GreenhatAlertServices;
use App\Services\GreenhatFeedbackServices;

class GreenhatController extends Controller
{
	public function __construct(Request $request, 
		AlertServices $alert,
		GreenhatServices $greenhat,
		NotificationServices $notification,
		GreenhatAlertServices $greenhatalert,
		GreenhatFeedbackServices $greenhat_feedback
	){
        $this->request = $request;
        $this->alert = $alert;
        $this->greenhat = $greenhat;
        $this->notification = $notification;
        $this->greenhatalert = $greenhatalert;
        $this->greenhat_feedback = $greenhat_feedback;
    }

	public function getDropdowns() {
		// get all supervisors
		$dropdowns = Employee::all('user_id', 'first_name', 'last_name');

		//temporary get dropdown from config

		return response($dropdowns);
	}

	public function getGreenhatData($user_id, $company_id)
	{
		return $this->greenhat->getProgramByUidCid($user_id, $company_id);
	}

	public function saveProgram() {
		$data = $this->request->json()->all();
		// check if employee exists
		$employee = Employee::find($data['id']);

		if(!$employee) {
			return response()->json(['error' => 'employee not found']);
		}

		// check if greenhat program exists
		$g_program = $this->greenhat->getProgramByUidCid($data['id'], $data['company_id']);


		$supervisor = !empty($data['supervisor']) ? intval($data['supervisor']) : 0;
		$const_mgmt_id = !empty($data['const'])  ? intval($data['const']) : 0;
		$hr_followup_id = !empty($data['hr'])  ? intval($data['hr']) : 0;
		$plant_dept_id = !empty($data['plant'])  ? intval($data['plant']) : 0;
		$ohs_evaluator_id = !empty($data['ohs'])  ? intval($data['ohs']) : 0;
		$environmental = !empty($data['environtmental'])  ? intval($data['environtmental']) : 0;

		$program = [
			'user_id' 			=> $data['id'],
			'company_id' 		=> $data['company_id'],
			'created_by'		=> $data['created_by'],
			'supervisor_id'		=> $supervisor,
			'status'			=> 1,
			'const_mgmt_id'		=> $const_mgmt_id,
			'hr_followup_id'	=> $hr_followup_id,
			'plant_dept_id'		=> $plant_dept_id,
			'ohs_evaluator_id'	=> $ohs_evaluator_id,
			'env_evaluator_id'	=> $environmental
		];

		if(!$g_program) {
			$save = $this->greenhat->createProgram($program);
		} else{
			$save = $this->greenhat->updateProgram($g_program->id, $program);
		}

		if($save) {
			return response(['success' => true]);
		}
	}

	public function sendKickOff()
	{
		$data = $this->request->json()->all();
		$user_id = $data['user_id'];
		$company_id = $data['company_id'];

		$employee = Employee::find($user_id);

		$program = $this->greenhat->getProgramByUidCid($user_id, $company_id);

		if(!$program) {
			return response([
				'success' => false,
				'error' => 'No program exist, please save/create program.'
			]);
		}

		$supervisor = $program->supervisor_id;
		$const_mgmt_id = $program->const_mgmt_id;
		$hr_followup_id = $program->hr_followup_id;
		$plant_dept_id = $program->plant_dept_id;
		$ohs_evaluator_id = $program->ohs_evaluator_id;
		$environmental = $program->env_evaluator_id;

		$id_to_notify = [
			'direct_sup' 			=> $supervisor, 
			'const_mgmt_followup' 	=> $const_mgmt_id,
			'hr_followup' 			=> $hr_followup_id,
			'plant_dept_followup' 	=> $plant_dept_id,
			'ohs_followup' 			=> $ohs_evaluator_id,
			'environmental_followup'=> $environmental
		];
		$links = config('requirements.greenhat_alert_links');

		foreach ($id_to_notify as $key => $id) {
			if($id != 0) {
				$subject = 'Greenhat Program Notification';
				$message = 'This is a Greenhat Program Notification for employee ' . $employee->fullname;
				$link = str_replace('workforce/', 'workforce/'. $user_id . '/', $links[$key]);

				//check if notification already exist for specific department and user
				$notif = $this->greenhatalert->getGreenhatAlertByItems($program->created_by, $id, $user_id, $key);

				if(!$notif) {

					$this->alert->saveAlert($id, $program->created_by, $subject, $message, $link);
					//save to notification
					$this->notification->addNotification($program->created_by, $id, $subject, $message, $link);

					//save notif to greenhat_alerts table
					$g_notif = [
						'sender' => $program->created_by,
						'receiver' => $id,
						'employee' => $user_id,
						'department' => $key
					];

					$this->greenhatalert->saveGreenhatAlert($g_notif);
				}
			}
		}

		// send to reviewee
		$employee_msg = 'Greenhat Enrollment notification from the Admin.';
		$emp_link = str_replace('workforce/', 'workforce/' . $user_id . '/', config('requirements.greenhat_alert_links.employee_link'));
		
		//check if reviewee already got a notification from admin.
		$employee_notif = $this->greenhatalert->getGreenhatAlertByItems($program->created_by, $user_id, $user_id, 'employee_followup');

		if(!$employee_notif) {
			$this->alert->saveAlert($user_id, $program->created_by, $subject, $employee_msg, $emp_link);

			//save to notification
			$this->notification->addNotification($program->created_by, $user_id, $subject, $employee_msg, $emp_link);

			//save notif to greenhat_alerts table
			$g_notif = [
				'sender' => $program->created_by,
				'receiver' => $user_id,
				'employee' => $user_id,
				'department' => 'employee_followup'
			];

			$this->greenhatalert->saveGreenhatAlert($g_notif);
		}
		return response(['success' => true]);
	}


	public function checkNotification($id, $employee_id, $department)
	{
		$departments = [
			'direct-supervisor' => 'supervisor_id',
			'hr-followup' => 'hr_followup_id',
			'construction-management' => 'const_mgmt_id',
			'plant-deparment' => 'plant_dept_id',
			'ohs-followup' => 'ohs_evaluator_id',
			'environmental-followup' => 'env_evaluator_id'
		];

		// check if exist in greenhat_program DB
		$check = $this->greenhat->checkEvaluator($employee_id, $id, $departments[$department]);

		if($check) {
			return response(['success' => true, 'data' => ['program_id' => $check->id]]);
		} else {
			return response(['success' => false]);
		}
	}

	public function checkFeedback($employee, $user_id, $department)
	{
		$departments = [
			'direct-supervisor' => 'direct_sup',
			'hr-followup' => 'hr_followup',
			'construction-management' => 'const_mgmt_followup',
			'plant-department' => 'plant_dept_followup',
			'ohs-followup' => 'ohs_followup',
			'environmental-followup' => 'environmental_followup',
			'greenhat-kickoff' => 'employee_followup'
		];

		$check = $this->greenhatalert->checkFeedback($employee, $user_id, $departments[$department]);
		
		if($check) {
			$feedback = $this->greenhat_feedback->getFeedback($employee, $user_id, $department);

			$employee = Employee::find($employee);

			if($feedback) {
				$feedback->dynamic_feedback = unserialize($feedback->dynamic_feedback);
			}

			return response(['success' => true, 'feedback' => $feedback, 'fullname' => $employee->fullname]);
		} else {
			return response(['success' => false]);
		}
	}

	public function saveFeedback()
	{
		$feedbacks = $this->request->json()->all();

		$dynamic_feedback = serialize($feedbacks['dynamic']);
		$general_comment = array_key_exists('comment', $feedbacks) ? $feedbacks['comment'] : '';
		$department = $feedbacks['review_info']['dept'];
		$reviewer = $feedbacks['review_info']['reviewer_id'];
		$reviewee = $feedbacks['review_info']['employee_id'];
		$feedback_id = $feedbacks['id'];

		$data = [
			'department' 		=> $department,
			'reviewer' 			=> $reviewer,
			'reviewee'			=> $reviewee,
			'dynamic_feedback'	=> $dynamic_feedback,
			'general_comment'	=> $general_comment
		];

		if(!$feedback_id) {
			//add feedback
			$feedback = $this->greenhat_feedback->addFeedback($data);

			if($feedback->id) {
				return response(['success' => true]);
			} else {
				return response(['success' => false], 500);
			}
		} else {
			//update feedback
			$update = $this->greenhat_feedback->updateFeedback($data, $feedback_id);

			if($update) {
				return response(['success' => true]);
			} else {
				return response(['success' => false], 500);
			}
		}
	}

	public function getCorrectiveActions() {
		$programs = $this->greenhat_feedback->getAll();

		foreach ($programs as $key => $program) {
			$program->dynamic_feedback = unserialize($program->dynamic_feedback);

			$program->employee_info = Employee::where('id', $program->reviewee)->first(['first_name', 'last_name']);
		}

		return response($programs);
	}

	public function getRegistered()
	{
		$registered = $this->greenhat->getAll();

		$reports = [
			'supervisor' => 0,
			'const_mgmt' => 0,
			'plant_dept' => 0,
			'env_evaluator' => 0,
			'hr_followup' => 0,
			'ohs_evaluator' => 0,
		];
		foreach($registered as $program) {

			$program->employee_info = Employee::where('id', $program->user_id)->first(['first_name', 'last_name']);

			if($program->supervisor_id != 0) {
				$reports['supervisor']++;
			};

			if($program->const_mgmt_id != 0) {
				$reports['const_mgmt']++;
			};

			if($program->plant_dept_id != 0) {
				$reports['plant_dept']++;
			};

			if($program->env_evaluator_id != 0) {
				$reports['env_evaluator']++;
			};

			if($program->hr_followup_id != 0) {
				$reports['hr_followup']++;
			};

			if($program->ohs_evaluator_id != 0) {
				$reports['ohs_evaluator']++;
			};
		}

		$return = [
			'registered' => $registered,
			'reports' => $reports
		];

		return response($return);
	}
}
