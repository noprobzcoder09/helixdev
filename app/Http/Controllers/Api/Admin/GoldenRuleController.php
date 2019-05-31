<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\GoldenRule;
use App\Company;

use DB;
use Auth;
use Validator;

class GoldenRuleController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function add()
    {

        DB::beginTransaction();
        
        try 
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $validator = Validator::make($this->request->all(), ValidationHelper::$GOLDEN_RULE);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }
            $goldenRule = new GoldenRule();
            $goldenRule->name = $this->request->name;
            $goldenRule->company_id = $company->id;
            $goldenRule->created_by = Auth::user()->employee()->first()->id;
            
            if($goldenRule->save()) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'new_golden_rule' => ['data' => $goldenRule]
                ]);
            }
        } 
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $goldenRules = GoldenRule::where('company_id', $company->id)->get();

        return Response()->json([
            'result' => true,
            'golden_rules' => ['data' => $goldenRules]
        ]);
    }

    protected function view()
    {
        $goldenRule = GoldenRule::find($this->request->route('gId'));

        if($goldenRule) {
            return Response()->json([
               'result' => true,
                'golden_rule' => ['data' => $goldenRule]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function update()
    {

        DB::beginTransaction();

        try {

            $validator = Validator::make($this->request->all(), ValidationHelper::$GOLDEN_RULE);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $goldenRule = GoldenRule::find($this->request->route('gId'));

            if($goldenRule)
            {
                $goldenRule->name = $this->request->name;
                if($goldenRule->update()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_GOLDEN_RULE);
                }
            }

        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function delete()
    {

        $goldenRule = GoldenRule::find($this->request->route('gId'));

        if($goldenRule && $goldenRule->delete()) {
            return Response()->json(ConstantHelper::$SUCCEED_DELETE_GOLDEN_RULE);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

}
