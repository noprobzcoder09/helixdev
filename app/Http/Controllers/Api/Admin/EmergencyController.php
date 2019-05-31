<?php

namespace App\Http\Controllers\Api\Admin;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\Company;
use App\Employee;
use App\Emergency;

use DB;
use Auth;
use Validator;

class EmergencyController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function add()
    {
        
        DB::beginTransaction();
        
        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $validator = Validator::make(
                $this->request->all(), ValidationHelper::$EMERGENCY
            );

            if ($validator->fails()) {
                return Response()->json(
                    ValidationHelper::error($validator->errors())
                );
            }

            $request = $this->request->all();
            $request['company_id'] = $company->id;
            $responder = Emergency::create($request);

            if($responder)
            {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'new_responder' => ['data' => $responder]
                ]);
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function update()
    {

        DB::beginTransaction();

        try {

            $validator = Validator::make(
                $this->request->all(), ValidationHelper::$EMERGENCY
            );

            if ($validator->fails()) {
                return Response()->json(
                    ValidationHelper::error($validator->errors())
                );
            }

            $responder = Emergency::find($this->request->route('eId'));

            $request = [
                'role'   => $this->request->role,
                'name'   => $this->request->name,
                'mobile' => $this->request->mobile,
            ];

            if($responder->update($request))
            {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_EMERGENCY);
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }


    protected function assign()
    {
        DB::beginTransaction();

        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $validator = Validator::make($this->request->all(), ValidationHelper::$EMERGENCY);

            if ($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $employee = Employee::find($this->request->employee_id);

            if (!$employee) {
                $newEmergency = new Emergency();
                $newEmergency->employee_id = $employee->id;
                $newEmergency->company_id = $company->id;
                if ($newEmergency->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_ASSIGN_EMERGENCY);
                }
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function lists()
    {

        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $groups = config('requirements.emergency_groups');

        foreach($groups as $key => $val)
        {
            $mResponders = Emergency::where('company_id', $company->id)->where('group', $val['id'])->get();
            $groups[$key]['responders'] = $mResponders;
        }

        return Response()->json([
            'result' => true,
            'emergency_groups' => ['data' => $groups]
        ]);

    }

    protected function view()
    {
        $responder = Emergency::find($this->request->route('eId'));
        $responder->employee = $responder->employee()->get();
        
        return Response()->json([
            'result' => true,
            'emergency_responders' => ['data' => $responder]
        ]);
    }

    protected function delete()
    {
        DB::beginTransaction();

        try {
            $responder = Emergency::find($this->request->route('eId'));
            if($responder->delete()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_RESIGN_EMERGENCY);
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    /*
    * Client Side
    */

    protected function clientCategories()
    {
        $groups = config('requirements.emergency_groups');

        foreach($groups as $key => $group)
        {
            $responders = Emergency::where('group', $group['id'])->get();

            if($responders) {
                $groups[$key]['responders'] = $responders;
            }
        }

        return Response()->json([
            'result' => true,
            'categories' => ['data' => $groups]
        ]);
    }
}
