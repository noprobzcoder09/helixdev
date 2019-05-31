<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\AlertGroupRecipient;
use App\Employee;

use Validator;
use DB;
use Auth;

class MessageGroupRecipientController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request  = $request;
    }

    public function add(){

        DB::beginTransaction();

        try{

            if(!empty( $this->request->recipients )){
                $employees = [];

                foreach( json_decode( $this->request->recipients ) as $recipient ){

                    //individually update/create every recipient id
                    $groupRecipient = AlertGroupRecipient::updateOrCreate(
                        ['company_id' => Auth::user()->employee->company_id, 'employee_id' => $recipient, 'employee_role_id' => $this->request->role_id],
                        ['company_id' => Auth::user()->employee->company_id, 'employee_id' => $recipient, 'employee_role_id' => $this->request->role_id]
                    );

                    if( $groupRecipient ){
                        $get_employee = Employee::find($recipient);
                        array_push($employees, array('recipient' => $get_employee, 'id' => $groupRecipient->id, 'employee_role_id' => $this->request->role_id ));
                    }

                }


                DB::commit();
                //return Response()->json(['result' => true, 'recipients' => $recipients, 'employee_role_id' => $this->request->role_id, 'company_id' => Auth::user()->employee->company_id]);
                return Response()->json(['result' => true, 'recipients' => $employees]);
            }


            return Response()->json([ConstantHelper::$EMPTY_RECIPIENTS]);

        } catch(\Exception $e) {
            DB::rollback();
            //  dd($e);exit;
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);




    }

    public function lists(){
        $groupRecipients = AlertGroupRecipient::all();
        $employees = [];
        if( !is_null( $groupRecipients ) ){
            foreach( $groupRecipients as $recipient ){
                array_push($employees, array('recipient' => $recipient->employee, 'id' => $recipient->id, 'employee_role_id' => $recipient->employee_role_id));
            }
        }

        return Response()->json(['result' => true, 'recipients' => $employees]);


    }

    function delete(){



        DB::beginTransaction();

        try{
/*echo $this->request->route('recipientId');exit;*/
            $delete = AlertGroupRecipient::find($this->request->route('recipientId'))->delete();

            if( $delete ){

                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETING_DATA);

            }

        } catch(\Exception $e) {
            DB::rollback();
            //  dd($e);exit;
        }


        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }


}
