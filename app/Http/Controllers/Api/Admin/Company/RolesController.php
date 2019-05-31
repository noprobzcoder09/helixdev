<?php

namespace App\Http\Controllers\Api\Admin\Company;

use Validator;
use Exception;
use Helix\Response\ResponseTrait;
use Helix\Services\Employee\Role;
use Helix\Services\Employee\Company;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\Admin\Traits\CompanyTrait;

class RolesController extends Controller
{
    use ResponseTrait,
        CompanyTrait;

    /**
     * Retrieve all list of roles
     *
     * @return json
     */
    public function index()
    {
        $data = Role::findByCompany($this->getCompanyId());

        return $this->successResponse('roles', $data);
    }

    /**
     * View resource
     *
     * @param int $role
     * @return json
     */
    public function show()
    {
        $id = request()->route('role');
        $role = Role::company($this->getCompanyId())->with('skills')->find($id);

        if ( ! $role) {
            return $this->failResponse('Resource not found.');
        }

        return $this->successResponse('roles', $role);
    }

    /**
     * Update resource
     *
     * @return json
     */
    public function update()
    {
        $id = request()->route('role');
        $inputs = request()->only('name');
        $validator = $this->validateUpdate($inputs);

        if ($validator->fails()) {
            return $this->failResponse($validator->errors()->first());
        }

        $role = Role::company($this->getCompanyId())->find($id);

        if ( ! $role) {
            return $this->failResponse('Resource not found.');
        }

        $role->update($inputs);

        return $this->successResponse('roles', $role);
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
            $inputs = array_merge($inputs, [
                'company_id' => $this->getCompanyId(),
                'created_by' => auth()->user()->employee()->first()->id,
            ]);

            $role = Role::create($inputs);

        } catch (Exception $e) {
            return $this->failResponse('Invalid inputs.');
        }
        
        return $this->successResponse('roles', $role);
    }

    /**
     * Delete resource
     *
     * @return json
     */
    public function destroy()
    {
        $id = request()->route('role');
        $role = Role::company($this->getCompanyId())->find($id);

        if ( ! $role) {
            return $this->failResponse('Resource not found.');
        }

        $role->delete();

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

    /**
     * Pre-update validator
     *
     * @param array $inputs
     * @return \Illuminate\Validation\Validator
     */
    protected function validateUpdate($input = [])
    {
        $rules = [];

        return Validator::make($input, $rules);
    }
}
