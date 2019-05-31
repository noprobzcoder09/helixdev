<?php

namespace App\Services;

use App\Models\Greenhat;

class GreenhatServices
{
    public function getProgramByUidCid($user_id, $company_id)
    {
        return Greenhat::where('user_id', $user_id)
                ->where('company_id', $company_id)
                ->first();
    }

    public function createProgram($program)
    {
        return Greenhat::create($program);
    }

    public function updateProgram($id, $program)
    {
        return Greenhat::where('id', $id)
                ->update($program);
    }

    public function checkEvaluator($employee_id, $id, $department)
    {
        return Greenhat::where('user_id', $employee_id)
                    ->where($department, $id)
                    ->first();
    }

    public function getAll()
    {
        return Greenhat::all();
    }

    public function find($id){
        return Greenhat::find($id);
    }
}
