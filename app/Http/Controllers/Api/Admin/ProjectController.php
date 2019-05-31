<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\AppHelper;

use Illuminate\Http\Request;

use App\Http\Transformers\Api\EmployeeTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item as FractalItem;

use App\Company;
use App\Project;

use File;
use Validator;
use Auth;
use DB;

class ProjectController extends Controller
{
    public function __construct(Request $request, Manager $manager)
    {
        $this->request = $request;
        $this->fractal = new $manager;
    }

    protected function add()
    {

        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            if($company)
            {

                $validator = Validator::make(
                    $this->request->all(),
                    ValidationHelper::$PROJECT
                );

                if($validator->fails()) {
                    return Response()->json(
                        ValidationHelper::error($validator->errors())
                    );
                }

                $project = Project::addProject($company->id, $this->request->all());

                if($project)
                {
                    DB::commit();
                    return Response()->json([
                        'result' =>  true,
                        'project' => ['data' => $project]
                    ]);
                }
            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function lists()
    {

        $companyId = AppHelper::decrypt($this->request->route('id'));
        $projects = Project::where('company_id', $companyId)->get();

        return Response()->json([
            'result' => true, 'projects' => ['data' => $projects]
        ]);
    }

    protected function view()
    {

    }

    protected function update()
    {

        DB::beginTransaction();

        try
        {
            $project = Project::find($this->request->route('pId'));

            if($project)
            {
                $project->fill($this->request->all());
                if($project->update()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_PROJECT);
                }

            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }
}
