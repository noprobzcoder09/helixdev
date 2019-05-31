<?php

namespace App\Http\Controllers\Api\Admin;

use App\Events\UserDetails;
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
use App\Employee;

use Faker;
use File;
use Validator;
use Auth;
use DB;

use App\Services\NotificationServices;

class EmployeeController extends Controller
{
    public function __construct(Request $request, Manager $manager)
    {
        $this->request = $request;
        $this->fractal = new $manager;
    }

    protected function loginDetails($employee_id)
    {
      DB::beginTransaction();

      try {

        $generatedPassword = AppHelper::generatePassword();
        $employee = Employee::find($employee_id);

        if($employee) {


          DB::commit();

          return Response()->json(
              [
                  'result' => true,
                  'user' => array('data' => $user, 'employee_id' => $user->employee->id)
              ]
          );
        }

      }
      catch (\Exception $e) {
          DB::rollback();
      }

      return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function add($companyId)
    {

        DB::beginTransaction();

        try
        {
            $companyId = AppHelper::decrypt($companyId);
            $company = Company::find($companyId);

            if($company)
            {

                $validator = Validator::make($this->request->all(), ValidationHelper::$EMPLOYEE);

                if($validator->fails()) {
                    return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ], 400);
                }

                $arrNewEmployee = $this->request->all();

                $arrNewEmployee['created_by'] = Auth::id();
                $arrNewEmployee['company_id'] = $companyId;

                $user = Employee::addEmployee($arrNewEmployee);

                if($user)
                {
                    if($this->request->hasFile('avatar')
                        && self::processAvatar($user, $this->request->file('avatar'))
                    ) {
                      DB::commit();
                    } else {
                      DB::commit();
                    }
                    $service = new NotificationServices();
                    $service->addNotification(Auth::id(), $user->id, 'Welcome', 'Congratulations!, Welcome to ' . $company->name, '');

                    DB::commit();

                    return Response()->json(
                        [
                            'result' => true,
                            'user' => array('data' => $user, 'employee_id' => $user->employee->id)
                        ]
                    );
                }

            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function update()
    {

        DB::beginTransaction();

        try
        {
            $companyId = AppHelper::decrypt($this->request->route('id'));
            $company = Company::find($companyId);
            $employeeId =$this->request->route('eId');
            $employee = Employee::find($employeeId);

            if($company && $employee->isMyCompany($company))
            {

                $validator = Validator::make($this->request->all(), ValidationHelper::$EMPLOYEE_UPDATE);

                if($validator->fails()) {
                    return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
                }

                $user = Employee::updateEmployee($employeeId, $this->request->all());
                $user = \App\User::find($employee->user_id);

                if($user)
                {

                    if($this->request->hasFile('avatar') && self::processAvatar($user, $this->request->file('avatar'))) {
                        DB::commit();
                    } else {
                        DB::commit();
                    }

                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_EMPLOYEE);
                }
            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function updateProfile()
    {
        DB::beginTransaction();

        try
        {
            $employee = Employee::find($this->request->route('eId'));
            $update = $this->request->all();

            if($employee && $employee->fill($update)->update())
            {
                if($employee->fill($update)->update())
                {

                    if($this->request->hasFile('avatar')
                        &&
                        self::processAvatar($employee->user, $this->request->file('avatar'))) {
                        DB::commit();
                    }

                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_EMPLOYEE);
                }
            }

        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function search()
    {

        $companyId = AppHelper::decrypt($this->request->route('id'));
        $this->request->keywords ? $keywords = $this->request->get('keywords') : $keywords = '';
        
        $params = $this->request->all();

        $employees = Employee::where('company_id', $companyId)->search( $keywords, ['first_name' => 10, 'last_name' => 10, 'email' => 5])->paginate( ConstantHelper::$PAGINATION_LIMIT );

        $resource = new FractalCollection( $employees, new EmployeeTransformer($params) );
        $collection =  $this->fractal->createData( $resource )->toArray();

        return Response()->json(['result' => true, 'employees' => $collection]);
    }

    protected function searchPagination()
    {

        $companyId = AppHelper::decrypt($this->request->route('id'));

        $this->request->keywords
            ? $keywords = $this->request->get('keywords') : $keywords = '';

        $employees = Employee::where('company_id', $companyId);
            
        if($this->request->admin) {
            $employees = $employees->where('employee_role_id', 1);
        }

        $employees = $employees->search( $keywords, ['first_name' => 10, 'last_name' => 10, 'email' => 10])
                    ->orderBy('id', 'desc')
                    ->paginate(120);

        $result = ['true' => true];
        $result['search'] = $employees;

        return Response()->json($result);
    }

    protected function lists()
    {
        $companyId = AppHelper::decrypt($this->request->route('id'));
        $employees = Employee::where('company_id', $companyId)->paginate(300);

        $resource = new FractalCollection( $employees, new EmployeeTransformer() );
        $collection =  $this->fractal->createData( $resource )->toArray();

        return Response()->json(['result' => true, 'employees' => $collection]);
    }

    protected function view()
    {
        $employee = Employee::getEmployee($this->request->route('eId'));
        if($employee) {
            return Response()->json(['result' => true, 'employee'=>['data'=>$employee]]);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function logs()
    {

        $employee = Employee::getEmployee($this->request->route('eId'));

        if($employee)
        {
            $logs = $employee->user->logs()->paginate(config('paginations.user_logs'));
            return Response()->json(['result' => true, 'logs'=>['data'=>$logs]]);

        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }

    protected function docs()
    {

        $companyId = AppHelper::decrypt($this->request->route('id'));
        $company = Company::find($companyId);
        $employeeId =$this->request->route('eId');
        $employee = Employee::find($employeeId);

        if($company && $employee->isMyCompany($company)) {

            return Response()->json([
                'result' => true,
                'data' => ['employee_required_docs' => Employee::employeeRequiredDocs(), 'docs' => $employee->documents()->get()]
            ]);

        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    public function uploadDocs()
    {
        DB::beginTransaction();

        try
        {
            $employee = Employee::find($this->request->route('eId'));

            if(!$employee) {
                return Response()->json(ConstantHelper::$SERVER_ERROR);
            }

            $files = $this->request->file();

            foreach($files as $key => $file) {
                self::processDoc(
                    $employee,
                    substr($key, 13), /* name */
                    $file
                );
            }

            $docs = $employee->documents()->get();
            if($docs) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'docs' => ['data' => $docs],
                ]);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function uploadDoc()
    {
        DB::beginTransaction();

        try {
            $validator = Validator::make(
                $this->request->all(),
                ValidationHelper::$EMPLOYEE_DOCUMENT
            );

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            if(!in_array($this->request->type, Employee::employeeRequiredDocs())) {
                return Response()->json(ValidationHelper::error(['invalid_type' => 'invalid employee requirement type']));
            }

            $companyId  = AppHelper::decrypt($this->request->route('id'));
            $company    = Company::find($companyId);
            $employeeId = $this->request->route('eId');
            $employee   = Employee::find($employeeId);

            if($company && $employee->isMyCompany($company))
            {

                $result = self::processDoc(
                    $employee,
                    $this->request->type,
                    $this->request->file('file')
                );

                if($result) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPLOAD_FILE);
                }
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    public function isAdmin()
    {
        if($this->employee_role_id == config('app.roles.employee.admin')) {
            return true;
        }

        return false;
    }

    public function viewEmployeeCompletedInductions()
    {
        $employee = Employee::getEmployee($this->request->route('eId'));
        if($employee) {
            $employee->completed_inductions = $employee->getCompletedInductions();

            return Response()->json([
                'result'                =>  true,
                'employee'  =>  ['data' => $employee]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    public function sendLoginDetails()
    {

        $employee = Employee::find($this->request->route('eId'));
        $messages = [];
        if($employee) {
            $messages[] = ['type' => 'success', 'style' => 'success', 'message' => 'Successfully send notification'];
            event(new UserDetails($employee->user));
        } else {
            $messages[] = ['type' => 'error', 'style' => 'danger', 'message' => 'Problem sending notification'];

        }
        return Response()->json([
            'result' => true,
            'messages' => $messages
        ]);
    }

    public function updateAdmin()
    {

        $employee = Employee::find($this->request->route('eId'));

        if($employee)
        {

            if($this->request->isAdmin) {
                $employee->employee_role_id =  config('roles.employee.admin');
            } else {
                $employee->employee_role_id =  config('roles.employee.viewer');
            }

            $employee->update();

            return Response()->json(ConstantHelper::$SUCCEED_UPDATE_EMPLOYEE);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected static function processAvatar($user, $file)
    {

        if(File::exists(public_path($user->getAvatarPath()))) {
         //   Storage::deleteDirectory(public_path($user->getAvatarPath()));
        }

        DB::table('user_images')->where('user_id', $user->id)->delete();

        $filename = 'user_'.time().'.'.$file->getClientOriginalExtension();

        $path = $user->getAvatarPath() . $filename;
 
        $upload = AppHelper::upload( $path, $file );

        if( $upload ){
            $date_time = new \DateTime();
            DB::table('user_images')->insert([
                'user_id' => $user->id,
                'filename' => $filename,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return true;
        }

        return false;
    }

    protected static function processDoc($employee, $type, $file)
    {

        $filename = "{$type}.".$file->getClientOriginalExtension();

        $path = $employee->getDocsPath() . $filename;
        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            DB::table('employee_docs')->where('type', $type)->where('employee_id', $employee->id)->delete();
            $date_time = new \DateTime();
            $r = DB::table('employee_docs')->insert([
                'employee_id' => $employee->id,
                'filename' => $filename,
                'type' => $type,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return $r;
        }

        return false;
    }
}
