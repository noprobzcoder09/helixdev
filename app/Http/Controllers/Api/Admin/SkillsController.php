<?php

namespace App\Http\Controllers\Api\Admin;

use App\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\Company;

use DB;
use Auth;
use Validator;

class SkillsController   extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $skills = Skill::where('company_id', $company->id)->get();
        $skills->each(function($skill){
           $skill->count = $skill->items()->count() . ' Skills';
        });
        return Response()->json(['result' => true, 'skills' => ['data' => $skills]]);
    }

    protected function add()
    {
        DB::beginTransaction();

        try {

            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $validator = Validator::make($this->request->all(), ValidationHelper::$SKILL);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $skill = new Skill();
            $skill->name = $this->request->name;
            $skill->company_id = $company->id;
            $skill->created_by = Auth::user()->employee()->first()->id;

            if($skill->save()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_SKILL);

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function view()
    {
        $skill = Skill::find($this->request->route('sId'));

        if($skill) {
            $skill->items = $skill->items();
            return Response()->json(['result' => true, 'skill' => ['data' => $skill]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function update()
    {
        DB::beginTransaction();

        try {

            $skill = Skill::find($this->request->route('sId'));

            if($skill) {

                $validator = Validator::make($this->request->all(), ValidationHelper::$SKILL);

                if($validator->fails()) {
                    return Response()->json(ValidationHelper::error($validator->errors()));
                }

                $skill->name = $this->request->name;

                if($skill->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_SKILL);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function delete()
    {
        $skill = Skill::find($this->request->route('sId'));

        if($skill && $skill->delete()) {
            return Response()->json(ConstantHelper::$SUCCEED_DELETE_SKILL);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function addItem()
    {
        DB::beginTransaction();

        try {

            $skill = Skill::find($this->request->route('sId'));

            if($skill) {

                $validator = Validator::make($this->request->all(), ValidationHelper::$SKILL);

                if($validator->fails()) {
                    return Response()->json(ValidationHelper::error($validator->errors()));
                }

                $skillItem = new \App\SkillItem();
                $skillItem->name = $this->request->name;
                $skillItem->id = $skill->id;

                if($skillItem->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_SKILL);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function viewItem()
    {
        $skillItem = SkillItem::find($this->request->route('itemId'));

        if($skillItem) {

           return Response()->json(['result' => true, 'skill_item' => ['data' => $skillItem]]);
       }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function updateItem()
    {
        DB::beginTransaction();

        try
        {
            $skill = Skill::find($this->request->route('sId'));
            $skillItem = SkillItem::find($this->request->route('itemId'));

            if($skill && $skillItem) {
                $validator = Validator::make($this->request->all(), ValidationHelper::$SKILL);

                if($validator->fails()) {
                    return Response()->json(ValidationHelper::error($validator->errors()));
                }

                $skillItem->name = $this->request->name;

                if($skillItem->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_SKILL_ITEM);
                }
            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function deleteItem()
    {
        $skillItem = SkillItem::find($this->request->route('itemId'));

        if($skillItem && $skillItem->delete())
        {
            return Response()->json(ConstantHelper::$SUCCEED_DELETE_SKILL_ITEM);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }
}
