<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Helpers\AppHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\ValidationHelper;

use App\Http\Transformers\Api\InductionTransformer;
use App\Http\Transformers\Api\EmployeeCompletedInductionTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item as FractalItem;

use App\Company;
use App\InductionGroup;
use App\Induction;
use App\Employee;
use App\EmployeeCompletedInduction;

use DB;
use Validator;
use Auth;

class InductionController extends Controller
{
    public function __construct(Request $request, Manager $manager)
    {
        $this->request = $request;
        $this->fractal = $manager;
    }

    protected function addGroup()
    {
        DB::beginTransaction();

        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $validator = Validator::make($this->request->all(), ValidationHelper::$GROUP_INDUCTION);

            if ($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $inductionGroup = new InductionGroup();
            $inductionGroup->name = $this->request->name;
            $inductionGroup->company_id = $company->id;

            if ($inductionGroup->save()) {
                DB::commit();
                return Response()->json(['result' => true, 'induction_group' => ['data' => $inductionGroup]]);
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function viewGroup()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $group = InductionGroup::find($this->request->route('gId'));

        if($company && $group) {
            return Response()->json([
                'result'              => TRUE,
                'induction_group'    => ['data' => $group]
            ]);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function updateGroup()
    {

        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $group = InductionGroup::find($this->request->route('gId'));

            $validator = Validator::make($this->request->all(), ValidationHelper::$GROUP_INDUCTION);

            if ($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            if(!$company || !$group) {
                return Response()->json(ConstantHelper::$SERVER_ERROR);
            }

            $group->name = $this->request->name;

            if($group->update()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_GROUP_INDUCTION);
            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }


        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function deleteGroup()
    {

        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $group = InductionGroup::find($this->request->route('gId'));

            if(!$company || !$group) {
                return Response()->json(ConstantHelper::$SERVER_ERROR);
            }

            if($group->delete()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETE_GROUP_INDUCTION);
            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }


        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function listsGroup()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        if($company)
        {
            $categories = InductionGroup::getCategories($company->id);

            return Response()->json([
                'result'              => TRUE,
                'induction_groups'    => ['data' => $categories]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function add()
    {
        DB::beginTransaction();

        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $validator = Validator::make($this->request->all(), ValidationHelper::$INDUCTION);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()), 404);
            }

            $arrNewInduction = $this->request->all();
            $arrNewInduction['created_by'] = Auth::user()->employee()->first()->id;

            $induction = Induction::addInduction($arrNewInduction);

            if($induction) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_INDUCTION);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function view()
    {
        $induction = Induction::viewInduction($this->request->route('iId'));

        if($induction)
        {
            return Response()->json(['result' => true, 'induction' => ['data' => $induction]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function delete()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $induction = Induction::find($this->request->route('iId'));

        if($company && $induction)
        {
            $induction->delete();
            return Response()->json(ConstantHelper::$SUCCEED_DELETED_INDUCTION);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        if ($company)
        {
            $inductions = Induction::where('company_id', $company->id)->get();

            $resource = new FractalCollection( $inductions, new InductionTransformer() );
            $collection =  $this->fractal->createData( $resource )->toArray();

            return Response()->json(['result' => true, 'inductions' => $collection]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

	protected function update()
	{
        DB::beginTransaction();

        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $validator = Validator::make($this->request->all(), ValidationHelper::$INDUCTION);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $induction = Induction::updateInduction($this->request->route('iId'), $this->request->all());

            if($induction) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INDUCTION);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
	}

    protected function inductees()
    {

        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        if ($company)
        {
            $paginate = EmployeeCompletedInduction::where('company_id', $company->id)->distinct()->paginate(ConstantHelper::$PAGINATION_LIMIT);
            $inductees = $paginate->items();
            $arrPaginations = $paginate->toArray();
            unset($arrPaginations['data']);

            $resource = new FractalCollection( $inductees, new EmployeeCompletedInductionTransformer() );
            $collection =  $this->fractal->createData( $resource )->toArray();

            return Response()->json(['result' => true, 'inductees' => $collection, 'pagination' => $arrPaginations]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function searchInductees()
    {
        $companyId = AppHelper::decrypt($this->request->route('id'));
        $this->request->keywords ? $keywords = $this->request->get('keywords') : $keywords = '';

//        $employees = Employee::where('company_id', $companyId)
//                        ->search($keywords, ['first_name' => 10, 'last_name' => 10, 'email' => 10])
//                        ->orderBy('id', 'desc')
//                        ->paginate(ConstantHelper::$PAGINATION_LIMIT);


        if($this->request->project) {
            $employees = Employee::join('employee_projects', 'employees.id', '=', 'employee_projects.employee_id')
                ->where('company_id', $companyId)
                ->where('project_id', (int) $this->request->project);
        } else {
            $employees = Employee::where('company_id', $companyId);
        }

        if($this->request->admin) {
            $employees = $employees->where('employee_role_id', 1);
        }

        $employees = $employees->groupBy('user_id')
            ->search($keywords, ['first_name' => 10, 'last_name' => 10, 'email' => 10])
            //->orderBy('updated_at', 'desc')
            ->paginate(ConstantHelper::$PAGINATION_LIMIT);

        $employees->each(function($employee) {
            $employee->no_of_inductions = $employee->getCountCompletedInductions();
            $employee->last_completion = $employee->getLastInductionDate();
        });

        $result = ['true' => true];
        $result['search'] = $employees;

        return Response()->json($result);
    }


    /* Client sides */
    protected function clientCategories()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        if($company)
        {
            $categories = InductionGroup::getCategories($company->id);
            $employee = Auth::user()->employee()->first();
            return Response()->json([
                'result'                => true,
                'induction_groups'      => ['data' => $categories],
                'completed_inductions'  => ['data' => $employee->getCompletedInductions()]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function completeVideo()
    {

        DB::beginTransaction();

        try
        {
            $video =  Induction::find($this->request->route('iId'));

            if($video)
            {
                $videoComplete = new \App\InductionComplete();
                $videoComplete->employee_id = Auth::user()->employee()->first()->id;

                if(!$this->request->isPassed) {
                    $videoComplete->isPassed = false;
                } else {
                    $videoComplete->isPassed = $this->request->isPassed;
                }

                $videoComplete->induction_id = $video->id;

                if($videoComplete->save())
                {

                    if($videoComplete->isPassed)
                    {
                        $training = new \App\OnlineTraining();
                        $training->employee_id = $this->request->user('api')->employee->id;
                        $training->induction_id = $video->id;
                        $training->company_id = $this->request->user('api')->employee->company_id;
                        $training->full_name = $this->request->user('api')->employee->full_name;
                        $training->title = $video->title;
                        $training->save();
                    }

                    $result = ConstantHelper::$SUCCEED_COMPLETED_SAFETY_VIDEO;
                    $result['video_complete_id'] = $videoComplete->id;
                    $result['video_complete'] = $videoComplete;
                   \App\Log::add([
                        'user_id' => $this->request->user('api')->id,
                        'content' => config('logs.induction.completed'),
                        'company_id' => $this->request->user('api')->employee->id,
                    ]);
                    DB::commit();
                    return Response()->json($result);
                }
            }
        }

        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }
}
