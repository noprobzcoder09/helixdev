<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Helpers\ConstantHelper;

use Faker;

use App\Http\Helpers\UserHelper;
use App\Http\Helpers\AppHelper;
use Sofa\Eloquence\Eloquence;
use DB;
use Illuminate\Support\Facades\Session;

class Employee extends Model
{
    use Eloquence;

    protected $table = 'employees';
    protected $appends = ['full_name', 'name'];
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'mobile',
        'dob',
        'address',
        'postal_code',
        'kin_name',
        'kin_mobile',
        'kin_relationship',
        'med_conditions',
        'allergies',
        'created_by',
        'user_id',
        'state_id',
        'employee_role_id',
        'company_id',
    ];

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function subContractor()
    {

        $subcontractor = DB::table('employee_subcontractors')
            ->where('employee_id', $this->id)
            ->first();

        if($subcontractor) {
            $subcontractor = SubContractor::find($subcontractor->subcontractor_id);
            return $subcontractor;
        }

        return false;
    }
    public function state()
    {
        return $this->belongsTo('App\State', 'state_id', 'id');
    }

    public function createdBy()
    {
        return $this->belongsTo('App\Employee', 'created_by', 'id');
    }

    public function documents()
    {
        return $this->hasMany('App\EmployeeDoc');
    }

    public function projects()
    {
      //  return $this->hasMany('App\EmployeeProject');

        $employeeProjects = DB::table('employee_projects')
            ->where('employee_id', $this->id)
            ->get();
        $projects = [];
        foreach($employeeProjects as $p)
        {
            $project = \App\Project::find($p->project_id);

            if($project) {
                $projects[] = $project;
            }
        }

        return $projects;
    }


    public function completed_inductions()
    {
        return $this->hasMany('App\EmployeeCompletedInduction');
    }

    public function lastInductionDate() {
        return '09-10-21';
    }

    public function isMyCompany($company) {
        if($this->company_id == $company->id) {
            return true;
        }
        return false;
    }

    public function getCompany() {
        $company = $this->company()->first();
        $company->id_hash = AppHelper::encrypt($company->id);
        $company->logo = $company->logo();
        return $company;
    }

    public function getDocsPath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."employee/docs/{$this->id}/";
    }

    public function getUserAvatar()
    {
        $user_avatar = DB::table('user_images')->where('user_id', $this->user_id)->first();
        if($user_avatar) {
            $image_url =  config('fileapi.path_user_avatar') . $this->user_id . '/' . $user_avatar->filename;

        } else {
            $image_url = '/images/user.png';
        }
        return $image_url;
    }

    public function getCompletedInductions()
    {
        $completedInductions = DB::table('induction_certifications')
            ->where('employee_id', $this->id)
            ->whereRaw('id IN (select MAX(id) FROM induction_certifications GROUP BY induction_id)')
            ->get();

        $completedInductions->each(function($induction) {
            $ind = Induction::find($induction->induction_id);
            $induction->title = $ind->title;
            $induction->completed_at = $induction->created_at;
        });

        return $completedInductions;
    }

    public function getCountCompletedInductions()
    {
        $count = DB::table('induction_certifications')
            ->where('employee_id', $this->id)
            ->whereRaw('id IN (select MAX(id) FROM induction_certifications GROUP BY induction_id)')
            ->count();

        return $count;
    }

    public function getLastInductionDate()
    {
        $lastInduction = DB::table('induction_certifications')
            ->where('employee_id', $this->id)
            ->whereRaw('id IN (select MAX(id) FROM induction_certifications GROUP BY induction_id)')
            ->first();

        $date = '';
        if($lastInduction) {
            $date = $lastInduction->created_at;
        }

        return $date;
    }

    public function getCompletedSafetyVideos() {
        $videos = [];
        return $videos;
    }

    public function isAdmin()
    {
        if($this->employee_role_id == config('roles.employee.admin')) {
            return true;
        }

        return false;
    }

    public function groups()
    {
        $employeeGroups = DB::table('employee_groups')
            ->where('employee_id', $this->id)
            ->get();
        $groups = [];
        foreach($employeeGroups as $e)
        {
            $group = \App\Group::find($e->group_id);

            if($group) {
                $groups[] = $group;
            }
        }

        return $groups;
    }

    public static function updateEmployee($id, $arrUpdateEmployee)
    {

        $employee = self::find($id);

        if(!$employee) return false;

        if(isset($arrUpdateEmployee['isAdmin']))
        {
            if($arrUpdateEmployee['isAdmin'] == 'true') {
                $arrUpdateEmployee['employee_role_id'] = config('roles.employee.admin');
            } else {
                $arrUpdateEmployee['employee_role_id'] = config('roles.employee.viewer');
            }
        } else {
            $arrUpdateEmployee['employee_role_id'] = config('roles.employee.viewer');
        }

        $employee->fill($arrUpdateEmployee);

        if($employee->update()) 
        {

            DB::table('employee_groups')
                ->where('employee_id', $employee->id)
                ->delete();

            DB::table('employee_projects')
                ->where('employee_id', $employee->id)
                ->delete();

            DB::table('employee_subcontractors')
                ->where('employee_id', $employee->id)
                ->delete();

            /* employee groups */
            if(isset($arrUpdateEmployee['selected_groups']))
            {
                $groups = json_decode($arrUpdateEmployee['selected_groups']);
                foreach($groups as $g) {
                    DB::table('employee_groups')->insert([
                        ['employee_id' => $employee->id, 'group_id' => $g]
                    ]);
                }
            }

            if(isset($arrUpdateEmployee['selected_projects']))
            {
                \App\EmployeeProject::insertProjects(
                    $employee,
                    json_decode($arrUpdateEmployee['selected_projects'])
                );
            }

            if(isset($arrUpdateEmployee['subcontractor_id']))
            {

                DB::table('employee_subcontractors')
                    ->insert([
                        ['employee_id' => $employee->id, 'subcontractor_id' => $arrUpdateEmployee['subcontractor_id']]
                    ]);
            }

            return $employee->user();
        }

        return false;
    }

    public static function employeeRequiredDocs()
    {
        return config('requirements.employee_docs');
    }

    public static function getEmployee($id)
    {

        $employee = self::find($id);

        if(!$employee) return false;

        $employee->avatar = $employee->getUserAvatar();
        $employee->name = $employee->first_name . ' ' . $employee->last_name;
        $employee->state = $employee->state;
        $employee->docs = $employee->documents;

        if($employee->employee_role_id == config('roles.employee.admin')) {
            $employee->isAdmin = true;
        }

        if($employee->subContractor()) {
            $employee->subContractor = $employee->subContractor();
        }

       // $employee->logs = $employee->user->logs;
        /* get groups */
        $employee->groups = $employee->groups();

        /* get projects */
        $employee->projects = $employee->projects();

        return $employee;
    }

    public static function addEmployee($arrNewEmployee)
    {
        if(!isset($arrNewEmployee['company_id'])) {
            return false;
        }

        $company = Company::find($arrNewEmployee['company_id']);
        $user = new User();

        $user->email = $arrNewEmployee['email'];
        $password = AppHelper::generatePassword()['password'];
        
        if(isset($arrNewEmployee['password']))
        {
            $password = $arrNewEmployee['password'];
            unset($arrNewEmployee['password']);
        }

        $user->password = bcrypt($password);
        Session::put("temp_password", $password);
        
        if($user->save())
        {
            $user->updateTempPassword($password);
            Session::forget("temp_password");
            UserHelper::addAuthClient($user->id);
            $arrNewEmployee['user_id'] = $user->id;

            $employee = new self();

            if(isset($arrNewEmployee['isAdmin'])) {
                $arrNewEmployee['employee_role_id'] = config('roles.employee.admin');
            } else {
                $arrNewEmployee['employee_role_id'] = config('roles.employee.viewer');
            }
            unset($arrNewEmployee['isAdmin']);
            $employee->fill($arrNewEmployee);

            if($employee->save())
            {
                /* employee groups */
                if(isset($arrNewEmployee['selected_groups']))
                {
                    $groups = json_decode($arrNewEmployee['selected_groups']);
                    foreach($groups as $g) {
                        DB::table('employee_groups')->insert([
                           ['employee_id' => $employee->id, 'group_id' => $g]
                        ]);
                    }
                }

                /* employee subcontractor */
                if(isset($arrNewEmployee['subcontractor_id']))
                {
                    DB::table('employee_subcontractors')
                        ->insert([
                            'employee_id' => $employee->id,
                            'subcontractor_id' => $arrNewEmployee['subcontractor_id']
                        ]);
                }

                if(isset($arrNewEmployee['selected_projects']))
                {
                    \App\EmployeeProject::insertProjects(
                        $employee,
                        json_decode($arrNewEmployee['selected_projects'])
                    );
                }

                return $user;
            }
        }

        return false;
    }


    public function getFullnameAttribute($value) {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function getnameAttribute($value) {
        return $this->first_name . ' ' . $this->last_name;
    }
}
