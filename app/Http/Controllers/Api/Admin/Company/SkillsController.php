<?php

namespace App\Http\Controllers\Api\Admin\Company;

use Validator;
use Helix\Response\ResponseTrait;
use Helix\Services\Employee\Role;
use Helix\Services\Employee\Skill;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\Admin\Traits\CompanyTrait;

class SkillsController extends Controller
{
    use ResponseTrait,
        CompanyTrait;
        
    /**
     * Parent Role
     *
     * @var Helix\Services\Employee\Role
     */
    protected $parentRole;

    /**
     * Skills controller
     *
     */
    public function __construct()
    {
        // Verify role exists
        $role = request()->route('role');
        
        $parentRole = Role::company($this->getCompanyId())->find($role);

        // The following lines will check whether the parent role exists or is validated
        // If not found, the process terminates with fail error
        $this->middleware(function ($request, $next) use($parentRole) {

            if ( ! $parentRole) {
                return $this->failResponse('Resource not found.');
            }

            return $next($request);
        });

        $this->parentRole = $parentRole;
    }

    /**
     * Retrieve all list of skills
     *
     * @return json
     */
    public function index()
    {
        return $this->successResponse('skills', $this->parentRole->skills);
    }

    /**
     * Create new resource
     *
     * @throws \Exception
     * @return json
     */
    public function store()
    {
        $inputs = request()->only('name');
        $validator = $this->validateStore($inputs);

        if ($validator->fails()) {
            return $this->failResponse($validator->errors()->first());
        }

        try {
            $role = request()->route('role');

            $inputs = array_merge($inputs, [
                'skill_id' => $role,
            ]);

            $skill = Skill::create($inputs);

        } catch (Exception $e) {
            return $this->failResponse('Invalid inputs.');
        }
        
        return $this->successResponse('roles', $skill);
    }

    /**
     * Delete resource
     *
     * @return json
     */
    public function destroy()
    {
        // Attempt retrieving the target skill
        $id = request()->route('skill');
        $skill = $this->parentRole->skills->find($id);

        if ( ! $skill) {
            return $this->failResponse('Resource not found.');
        }

        $skill->delete();

        return $this->successResponse('roles');
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
            'name' => 'required'
        ];

        return Validator::make($input, $rules);
    }
}
