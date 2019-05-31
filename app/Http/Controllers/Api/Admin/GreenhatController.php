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

use App\Http\Helpers\ConstantHelper;

use DB;

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

        $this->middleware('auth:api');
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


		//dd($data);exit;
		// check if employee exists
		$employee = Employee::find($data['id']);

		if(!$employee) {
			return response()->json(['error' => 'employee not found']);
		}

/*dd($employee);exit;		

echo $employee->id.'='.$data['company_id'];exit;*/
		// check if greenhat program exists
		//$g_program = $this->greenhat->getProgramByUidCid($data['id'], $data['company_id']);
		$g_program = $this->greenhat->getProgramByUidCid($employee->user_id, $data['company_id']);


		$supervisor = !empty($data['supervisor']) ? intval($data['supervisor']) : 0;
		$const_mgmt_id = !empty($data['const'])  ? intval($data['const']) : 0;
		$hr_followup_id = !empty($data['hr'])  ? intval($data['hr']) : 0;
		$plant_dept_id = !empty($data['plant'])  ? intval($data['plant']) : 0;
		$ohs_evaluator_id = !empty($data['ohs'])  ? intval($data['ohs']) : 0;
		$environmental = !empty($data['environtmental'])  ? intval($data['environtmental']) : 0;

		$program = [
			'user_id' 			=> $employee->user_id,
			'company_id' 		=> $data['company_id'],
			'created_by'		=> $this->request->user()->id,
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

		DB::beginTransaction();

        try {

			$data = $this->request->json()->all();
			
			$employee_id = $data['user_id'];
			$company_id = $data['company_id'];

			$employee = Employee::find($employee_id);

			$user_id = $employee->user_id;

			$program = $this->greenhat->getProgramByUidCid($user_id, $company_id);

			if(!$program) {
				return response([
					'success' => false,
					'error' => 'No program exist, please save/create program.'
				]);
			}

			$id_to_notify = [
				'worker' 				=> $program->user_id,
				'direct_sup' 			=> $program->supervisor_id, 
				'const_mgmt_followup' 	=> $program->const_mgmt_id,
				'hr_followup' 			=> $program->hr_followup_id,
				'plant_dept_followup' 	=> $program->plant_dept_id,
				'ohs_followup' 			=> $program->ohs_evaluator_id,
				'environmental_followup'=> $program->env_evaluator_id
			];

			//dd($id_to_notify);exit;
			$links = config('requirements.greenhat_alert_links');

			$subject = 'Greenhat Program Notification';

			foreach ($id_to_notify as $key => $id) {
				if($id != 0) {

					
					$message = 'This is a Greenhat Program Notification for employee ' . $employee->fullname;				

					//save greenhat alert if key is not worker
					if( !empty($key) && $key != 'worker' ){
						$grenhat_notification_args = [
							'sender' => $program->created_by,
							'receiver' => $id,
							'employee' => $user_id,
							'department' => $key
						];

						$this->greenhatalert->updateOrCreate($grenhat_notification_args);
					}
					
					$link = str_replace('greenhat/', 'greenhat/'. encrypt($program->id) . '/', $links[$key]);

					$notification_args = [
			    		'user_id' 	=> $this->request->user()->id,
			    		'to_id'		=> $id,
			    		'subject'	=> $subject,
			    		'message'	=> $message,
			            'link'      => $link,
			            'extra_params' => 'greenhat_program_id_'.$program->id,
			    	];

					$notification = $this->notification->updateOrCreate($notification_args);

					
				}
			}

			DB::commit();
			return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA, 200);

		} catch (\Exception $e) {
            DB::rollback();
            dd($e);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 500);

		
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
		DB::beginTransaction();

        try {

        	//dd($this->get_reviewee_rule(decrypt($this->request->greenhat_program_id), $this->request->user_id));

			$data = [
				'user_id' 				=> $this->request->user_id,
				'greenhat_program_id' 	=> decrypt($this->request->greenhat_program_id),
				'feedback'				=> $this->request->feedback,
				'feedback_by'			=> $this->get_reviewee_rule(decrypt($this->request->greenhat_program_id), $this->request->user_id)
			];

			//dd($this->request->all());
			
			$greenhat_feedback = $this->greenhat_feedback->updateOrCreate($data);

			if( $greenhat_feedback ){
				DB::commit();
				return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);				
			}

		} catch (\Exception $e) {
            DB::rollback();
            dd($e);
        }

       	return Response()->json(ConstantHelper::$SERVER_ERROR, 500);

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


	protected function get_reviewee_rule($program_id, $user_id){

		$greenhat = $this->greenhat->find( $program_id );

		if( !is_null( $greenhat ) ){
			//1 - worker | 2 - Direct Supervisor | 3 - HR | 4 - Conts Manager | 5 - Plant Dept | 6 - OHS | 7 - Enviro
			if( $greenhat->user_id == $user_id )return 1;
			if( $greenhat->supervisor_id == $user_id )return 2;
			if( $greenhat->hr_followup_id == $user_id )return 3;
			if( $greenhat->const_mgmt_id == $user_id )return 4;
			if( $greenhat->plant_dept_id == $user_id )return 5;
			if( $greenhat->ohs_evaluator_id == $user_id )return 6;
			if( $greenhat->env_evaluator_id == $user_id )return 7;			

		}

		return null;		
	} 


	public function checkUserFeedback(){
		try{
			$data = [
				'user_id' => $this->request->user_id,
				'greenhat_program_id' => decrypt($this->request->greenhat_program_id)
			];

			$greenhat_feedback = $this->greenhat_feedback->checkUserFeedback($data);
			
			return ( $greenhat_feedback > 0 ) ? Response()->json(ConstantHelper::$IS_EXIST) : Response()->json(ConstantHelper::$IS_NOT_EXIST);
			

		} catch (\Exception $e) {
            DB::rollback();
            dd($e);
        }

       	return Response()->json(ConstantHelper::$SERVER_ERROR, 500);
	}


	public function getProgramReviews(){
		try{

			$employee = Employee::find($this->request->route('emp_id'));

			//dd($employee);

			$user_feedback = $this->greenhat_feedback->getUserFeedback($employee->user_id);



			$program_feedback = $this->greenhat_feedback->getProgramFeedback($user_feedback->greenhat_program_id);

			return Response()->json([
				'result' => true,
				'user_feedback' => $user_feedback,
				'program_feedback' => $program_feedback
			]);

			DB::commit();

		} catch (\Exception $e) {
            DB::rollback();
            dd($e);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR, 500);
		
	}
}
