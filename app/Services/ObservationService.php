<?php

namespace App\Services;

use App\Observation;
use App\ObservationAssignment;
use App\User;

class ObservationService
{

    public static function getClientAssignments(...$params)
    {
    	//dd($this->request->user('api')->id);
        
        if(count($params) <= 0) return [];

        $user = User::find($params[0]);

        $pagination = ObservationAssignment::where('employee_id', $user->employee->id)
            ->paginate(config('paginations.observation_assignments'));

        return $pagination;
    }
    
}
