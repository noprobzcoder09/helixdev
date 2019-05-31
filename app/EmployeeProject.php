<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Project;
use DB;

class EmployeeProject extends Model
{
    protected $table = 'employee_projects';

    public static function insertProjects($employee, $projects)
    {
        
        foreach($projects as $project) {
            $company_project = Project::where('id', (int)$project)->where('company_id', (int) $employee->company->id)->first();

            if(!$company_project) continue;
            $date_time = new \DateTime();
            DB::table('employee_projects')->insert([
                'employee_id' => $employee->id,
                'project_id'  => $company_project->id,
                'created_at'  => $date_time,
                'updated_at'  => $date_time
            ]);
        }
        return true;
    }
}
