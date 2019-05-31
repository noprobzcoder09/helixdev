<?php

namespace App\Http\Controllers\Api\HelixAdmin;

use App\Http\Controllers\Controller;
use App\Http\Helpers\ConstantHelper;
use Illuminate\Http\Request;
use App\Http\Transformers\Api\CompanyTransformer;

use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item as FractalItem;
use App\Http\Helpers\AppHelper;
use Validator;
use App\Company;
use App\State;
use App\Feature;
use App\Employee;
use App\Module;
use App\Log;
use App\HelixStats;
use Auth;
use DB;
use Storage;
use File;

class CompanyController extends Controller
{
    public function __construct(Request $request, Manager $manager)
    {
        $this->request = $request;
        $this->fractal = new $manager;
    }

    protected function lists()
    {
        $companies = Company::orderBy('id', 'desc')->paginate(20);

        $resource = new FractalCollection( $companies, new CompanyTransformer );
        $collection =  $this->fractal->createData( $resource )->toArray();

        $stats = HelixStats::getStats();

        return Response()->json([
            'result' => true,
            'companies' => $collection,
            'stats' => ['data' => $stats]
        ]);
    }

    protected function add()
    {

        DB::beginTransaction();

        try {

            $validator = Validator::make($this->request->all(), [
                'name' 	=> 'required',
                'email' => 'required|unique:companies,email',
            ]);
            
            if ($validator->fails()) {
                return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
            }

            $arrNewCompany = $this->request->all();
            $arrNewCompany['created_by'] = Auth::id();

            $company = new Company();
            $company = $company->fill($arrNewCompany);

            if ($company->save())
            {
                if($this->request->hasFile('company_logo')) {
                    self::processLogo($company, $this->request->file('company_logo'));
                }

                if($this->request->get('modules')) {
                    $modules = explode(",", $this->request->get('modules'));
                    $company->insertModules($modules);
                }

                /* create auto employee as admin */

                $result = Employee::addEmployee([
                    'first_name' => 'admin',
                    'last_name'  => $company->name,
                    'email'      => $company->email,
                    'company_id' => $company->id,
                    'isAdmin' => true,
                ]);

                if($result) {
                    DB::commit();
                }

                return Response()->json(

                );
            }
        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function states()
    {
        return Response()->json(['result' => true, 'states' => ['data'=>State::all()]]);
    }

    protected function features()
    {
        return Response()->json(['result' => true, 'features' => ['data'=>Feature::all()]]);
    }

    protected function view($id)
    {
        $company = Company::find(AppHelper::decrypt($id));

        if($company) {
            $company->logo = $company->logo();
            $company->modules = $company->modules();
            $company->logs = $company->logs()->get();
            return Response()->json(['result' => true, 'company'=>['data'=>$company]]);
        }

        return Response()->json(['result' => false, 'message_code' => 'company_not_found', 'message' => 'Company not found' ], 400);
    }

    protected function update($id)
    {

        DB::beginTransaction();

        try {

            $validator = Validator::make($this->request->all(), [
                'name' 	=> 'required',
            ]);

            if ($validator->fails()) {
                return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
            }

            $arrUpdateCompany = $this->request->all();
            $filteredUpdate = [];
            $company = Company::find($id);

            foreach($arrUpdateCompany as $key => $val) {
                if(!is_null($val) && $val !== 'null') {
                    $filteredUpdate[$key] = $val;
                }
            }
            unset($filteredUpdate['logs']);
            unset($filteredUpdate['updated_at']);
            unset($filteredUpdate['created_at']);
            unset($filteredUpdate['logo']);

            $company->fill($filteredUpdate);

            if( $company->update() )
            {
                $modules = $this->request->modules;
                if($this->request->hasFile('company_logo')) {
                    self::processLogo($company, $this->request->file('company_logo'));
                }

                if($this->request->get('modules')) {
                    $modules = explode(",", $modules);
                    $company->insertModules($modules);
                }
                
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_COMPANY);
            }

        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function enable($id)
    {
        $id = AppHelper::decrypt($id);
        $company = Company::find($id);
        if ($company) {
            $company->update(['status'=>TRUE]);
            return Response()->json(ConstantHelper::$SUCCEED_UPDATE_COMPANY);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function disable($id)
    {
        $id = AppHelper::decrypt($id);
        $company = Company::find($id);

        if ($company) {
            $company->update(['status'=>FALSE]);
            $company->update();
            return Response()->json(ConstantHelper::$SUCCEED_UPDATE_COMPANY);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }
    
    protected function processLogo($company, $file)
    {
        DB::table('company_logos')->where('company_id', $company->id)->delete();

        $filename = 'company_'.time().'.'.$file->getClientOriginalExtension();
        $path = $company->getCompanyLogoPath() . $filename;
        $upload = AppHelper::upload( $path, $file );

        if( $upload ){
            $date_time = new \DateTime();
            DB::table('company_logos')->insert([
                'company_id' => $company->id,
                'filename' => $filename,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return true;
        }
        
       return false;
    }
    
}
