<?php

namespace App\Services;

use App\Models\GreenhatAlert;

class GreenhatAlertServices
{
	public function saveGreenhatAlert($data)
	{
		return GreenhatAlert::create($data);
	}

	public function getGreenhatAlert($id)
	{
		return GreenhatAlert::find($id);
	}

	public function getGreenhatAlertByItems($sender, $receiver, $employee, $department)
	{
		return GreenhatAlert::where('sender', $sender)
				->where('receiver', $receiver)
				->where('employee', $employee)
				->where('department', $department)
				->first();
	}

	public function checkFeedback($employee, $user_id, $department)
	{
		return GreenhatAlert::where('employee', $employee)
				->where('receiver', $user_id)
				->where('department', $department)
				->first();
	}

	public function updateOrCreate($data){
		return GreenhatAlert::updateOrCreate(
									['sender' => $data['sender'], 'receiver' => $data['receiver'], 'employee' => $data['employee'], 'department' => $data['department']],
									['sender' => $data['sender'], 'receiver' => $data['receiver'], 'employee' => $data['employee'], 'department' => $data['department']]
								);
	}
}
