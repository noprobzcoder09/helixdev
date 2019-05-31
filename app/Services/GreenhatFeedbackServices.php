<?php

namespace App\Services;

use App\Models\GreenhatFeedback;

class GreenhatFeedbackServices
{
	public function getFeedback($employee, $user_id, $department)
	{
		return GreenhatFeedback::where('reviewer', $user_id)
				->where('reviewee', $employee)
				->where('department', $department)
				->first();
	}

	public function addFeedback($data)
	{
		return GreenhatFeedback::create($data);
	}

	public function updateFeedback($data, $id)
	{
		return GreenhatFeedback::where('id', $id)->update($data);
	}

	public function getAll()
	{
		return GreenhatFeedback::all();
	}

	public function updateOrCreate($request){

		//dd($request);
		return GreenhatFeedback::updateOrCreate(
									['user_id' => $request['user_id'], 'greenhat_program_id' => $request['greenhat_program_id'], 'feedback_by' => $request['feedback_by']],
									['user_id' => $request['user_id'], 'greenhat_program_id' => $request['greenhat_program_id'], 'feedback_by' => $request['feedback_by'], 'feedback' => $request['feedback']]
								);
	}


	public function checkUserFeedback($data){
		return GreenhatFeedback::whereUserId($data['user_id'])->whereGreenhatProgramId($data['greenhat_program_id'])->count();
	}


	public function getUserFeedback($user_id){

		//dd()
		return GreenhatFeedback::whereUserId($user_id)->where('feedback_by',1)->first();
	}


	public function getProgramFeedback($program_id){
		return GreenhatFeedback::whereGreenhatProgramId($program_id)->where('feedback_by', '!=', 1)->get();
	}


}
