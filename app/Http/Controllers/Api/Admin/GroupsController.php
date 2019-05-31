<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;
use App\Group;
use Validator;

class GroupsController extends Controller {

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function search()
    {

        $keywords = $this->request->k;
        $companyId = AppHelper::decrypt($this->request->route('id'));

        $paginate = new Group();
        $paginate = $paginate->where('company_id', $companyId);

        if($this->request->project_id) {
            $paginate = $paginate->where('project_id', $this->request->project_id);
        }

        if($this->request->keywords) {
            $paginate = $paginate->search($keywords, ['name' => 10]);
        }

        $paginate = $paginate->orderBy('created_at', 'desc')->paginate(ConstantHelper::$PAGINATION_LIMIT);

        $groups = $paginate->items();

        foreach($groups as $key => $group)
        {
            $groups[$key]->project = $group->project;
        }

        return Response()->json([
            'result' => true,
            'pagination' => ['data' => $paginate],
            'groups'    => ['data' => $groups]
        ]);
    }

    public function addGroup()
    {

        DB::beginTransaction();

        try {
            $companyId = AppHelper::decrypt($this->request->route('id'));

            $request = $this->request->all();
            $validator = Validator::make($request, [
                'name' => 'required',
            ]);

            // check group uniqueness
            $existGroup = Group::where('name', $request['name'])
                ->where('company_id', $companyId)->first();

            if($existGroup) {
                return Response()->json(
                    ['name' => ['the name has already taken on this company']]
                , 400);
            }

            if($validator->fails()) {
                return Response()->json($validator->errors(), 400);
            }

            $group = new Group();
            $group->name = $this->request->name;
            $group->company_id = $companyId;

            if($this->request->project) {
                $group->project_id = $this->request->project;
            }

            if($group->save()) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'new_group' => ['data' => $group]
                ]);
            }

        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function updateGroup()
    {

        DB::beginTransaction();

        try {
            $companyId = AppHelper::decrypt($this->request->route('id'));

            $request = $this->request->all();
            $validator = Validator::make($request, [
                'name' => 'required',
            ]);

            // check group uniqueness
//            $existGroup = Group::where('name', $request['name'])
//                ->where('company_id', $companyId)->first();
//
//            if($existGroup) {
//                return Response()->json(
//                    ['name' => ['the name has already taken on this company']]
//                    , 400);
//            }

            if($validator->fails()) {
                return Response()->json($validator->errors(), 400);
            }

            $group = Group::find($this->request->route('gId'));

            if($group)
            {
                $group->name = $this->request->name;
                $group->company_id = $companyId;

                if($this->request->project) {
                    $group->project_id = $this->request->project_id;
                }

                if($group->save()) {
                    DB::commit();
                    $group->project = $group->project;
                    return Response()->json([
                        'result' => true,
                        'updated_group' => ['data' => $group]
                    ]);
                }
            }

        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }
}
