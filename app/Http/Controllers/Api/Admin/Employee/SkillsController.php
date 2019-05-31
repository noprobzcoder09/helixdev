<?php

namespace App\Http\Controllers\Api\Admin\Employee;

use Validator;
use Exception;
use Helix\Support\RoleManager;
use Helix\Response\ResponseTrait;
use App\Http\Controllers\Controller;
use Helix\Services\Employee\Employee;
use App\Http\Controllers\Api\Admin\Traits\CompanyTrait;

class SkillsController extends Controller
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
     * Skills controller
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
     * List all active skills
     *
     * @return json
     */
    public function index()
    {
        $role = request()->route('roleId');
        $skills = $this->employee
                    ->skills()
                    ->wherePivot('skill_id', $role)
                    ->get();

        return $this->successResponse('skills', $skills);
    }

    /**
     * Attach a skills to a certain role
     *
     * @return json
     */
    public function attach()
    {
        $role = request()->route('roleId');
        $skill = request('skill');

        try {
            if (is_array($skill) || is_null($skill)) {

                $existing = $this->employee->skills()
                                ->wherePivot('skill_id', $role)
                                ->get()
                                ->map(function($item) {
                                    return $item->pivot->skill_item_id;
                                });
                $this->employee->skills()->detach($existing);

                $arrayOfSkills = array_fill_keys($skill, ['skill_id' => $role]);
                $this->employee->skills()->attach($arrayOfSkills);
            } else {
                $this->employee->skills()->attach($skill, ['skill_id' => $role]);
            }
        } catch (Exception $e) {}

        $this->employee->updateStatus();

        return $this->successResponse('skills', []);
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
            'skill' => 'required'
        ];

        return Validator::make($input, $rules);
    }
}
