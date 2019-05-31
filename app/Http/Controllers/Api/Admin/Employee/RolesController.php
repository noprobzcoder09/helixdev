<?php

namespace App\Http\Controllers\Api\Admin\Employee;

use Validator;
use Exception;
use Helix\Response\ResponseTrait;
use Helix\Services\Employee\Role;
use App\Http\Controllers\Controller;
use Helix\Services\Employee\Employee;
use App\Http\Controllers\Api\Admin\Traits\CompanyTrait;

class RolesController extends Controller
{
    use ResponseTrait,
        CompanyTrait;

    /**
     * Target Employee
     *
     * @var Helix\Services\Employee\Employee
     */
    protected $employee;

    /**
     * Roles controller
     *
     */
    public function __construct()
    {
        // Verify employee exists
        $employeeId = request()->route('eId');
        $employee = Employee::find($employeeId);

        // The following lines will check whether the parent role exists or is validated
        // If not found, the process terminates with fail error
        $this->middleware(function ($request, $next) use($employee) {

            if ( ! $employee) {
                return $this->failResponse('Resource not found.');
            }

            return $next($request);
        });

        $this->employee = $employee;
    }

    /**
     * List all roles
     *
     * @return json
     */
    public function index()
    {
        return $this->successResponse('roles', $this->employee->roles);
    }

    /**
     * Attach a role to certain employee
     *
     * @return json
     */
    public function attach()
    {
        $role = request('role');

        try {
            $this->employee->roles()->sync($role);

            // if (count($role) > 0) {
            //     $this->employee->skills()
            //         ->whereNotIn('employee_skill_item.skill_id', $role)
            //         ->detach();
            // }

        } catch (Exception $e) {}
        
        $this->employee->updateStatus();

        return $this->successResponse('roles', []);
    }

    /**
     * Detach a role from certain employee
     *
     * @return json
     */
    public function detach()
    {
        $roleId = request()->route('roleId');

        if (empty($roleId)) {
            return $this->failResponse('Role not found.');
        }

        try {
            $this->employee->roles()->detach($roleId);
            $this->employee->skills()
                ->wherePivot('skill_id', $roleId)
                ->detach();

        } catch (Exception $e) {}

        $this->employee->updateStatus();
        
        return $this->successResponse('roles', []);
    }

    /**
     * Pre-creation validator
     *
     * @param array $inputs
     * @return \Illuminate\Validation\Validator
     */
    protected function validateStore($input = [])
    {
        $rules = [
            'role' => 'required'
        ];

        return Validator::make($input, $rules);
    }
}
