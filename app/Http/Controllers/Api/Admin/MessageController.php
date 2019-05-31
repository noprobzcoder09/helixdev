<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\Events\NewAlertContent;
use App\Events\SendSMS;
use App\Events\SendEmail;
use App\Events\SendPortal;

use App\Alert;
use App\Employee;
use App\AlertHistory;
use App\AlertGroupRecipient;


use Validator;
use DB;
use Auth;

class MessageController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request  = $request;
    }

    public function send()
    {

        DB::beginTransaction();

        try {

            $validator = Validator::make(
                $this->request->all(), ValidationHelper::$MESSAGING
            );

            if($validator->fails())
            {
                return Response()->json(
                    ValidationHelper::error($validator->errors())
                );
            }

            if($this->request->by_login_details)
            {

                $employee  = Employee::where('id', (int) $this->request->send_to)->first();
                $employees = Employee::where('id', (int) $this->request->send_to)->get();

                $alert = Alert::create([
                    'subject' => "Logins Details. email {$employee->user->email}, password: {$employee->user->getPassword()}",
                    'short_text' => 'email: test pasword: 123',
                    'content' => 'email: test pasword: 123',
                    'type' => 1,
                    'method' => "[1]",
                    'employee_roles' => "[1]"
                ]);

            } else {
                $alert = Alert::create([
                    'subject' => $this->request->subject,
                    'short_text' => $this->request->short_text,
                    'content' => $this->request->body,
                    'type' => $this->request->type,
                    'method' => json_encode($this->request->method),
                    'employee_roles' => json_encode($this->request->employee_role_id),
                ]);

                $employees = $this->getEmployees( $this->request->employee_role_id, $this->request->individual );

            }

        } catch (\Exception $e) {
            DB::rollback();
            return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
        }

        $messages = [];

        if($alert)
        {
            if(!empty($this->request->file))
            {
                //process attachment file
                try {
                    $this->processFile($this->request->file, $alert->id);
                    $messages[] = ['type' => 'success', 'style' => 'success', 'message' => 'Successfully uploading files'];
                } catch(\Exception $e) {
                    $messages[] = ['type' => 'error', 'style' => 'danger', 'message' => 'Uploading file has encountered a problem'];
                }
            }

            //add sms
            if(in_array(1, json_decode($this->request->method)))
            {
                try {
                    event(new SendSMS($employees, $alert));
                    $messages[] = ['type' => 'success', 'style' => 'success', 'message' => 'Successfully send sms'];
                } catch(\Exception $e) {
                    $messages[] = ['type' => 'error', 'style' => 'danger', 'message' => 'Problem occured during sms'];
                }
            }

            //add email
            if(in_array(2, json_decode($this->request->method)))
            {
                try {
                    event(new SendEmail($employees, $alert, $this->request->file));
                    $messages[] = ['type' => 'success', 'style' => 'success', 'message' => 'Successfully send email'];
                } catch(\Exception $e) {
                    $messages[] = ['type' => 'error', 'style' => 'danger', 'message' => 'Problem occured during email'];
                }
            }

            //add portal
            if(in_array(3, json_decode($this->request->method)))
            {
                try {
                    event(new SendPortal( $employees, $alert ) );
                    $messages[] = ['type' => 'success', 'style' => 'success', 'message' => 'Successfully send notification'];
                } catch(\Exception $e) {
                    $messages[] = ['type' => 'error', 'style' => 'danger', 'message' => 'Problem sending notification'];
                }
            }
        }

        DB::commit();
        event(new NewAlertContent($alert, $employees));
        return Response()->json(['result' => true, 'messages' => $messages]);
    }

    public function history()
    {

        DB::beginTransaction();
        try {

            $messages = AlertHistory::with('alert','recepient.employee')
                ->whereUserId(Auth::user()->id)
                ->whereHas('alert', function ($query) {
                    $query->whereType( $this->request->route('type') );
                })
                ->paginate(ConstantHelper::$PAGINATION_LIMIT);

            //dd($messages);exit;

            return Response()->json(['messages' => $messages]);

            DB::commit();

        }catch(\Exception $e) {
            DB::rollback();
        }
    }

    public function view()
    {

        DB::beginTransaction();
        try {

            /*$validator = Validator::make($this->request->all(), ValidationHelper::$MESSAGING_VIEW);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }*/

            //echo $this->request->route('mId');exit;
            $message = AlertHistory::with('alert','recepient.employee','attachment')->find($this->request->route('mId'));

            //dd( $messages );exit;

            if( is_null( $message ) ){
                return Response()->json([ConstantHelper::$INVALID_ID]);
            }

            return Response()->json(['message' => $message]);
            DB::commit();

        }catch(\Exception $e) {
            DB::rollback();
        }
    }

    /* client sides */
    protected function clientGetUserAlerts()
    {
        $alerts = Notification::getUserNotifications($this->request->user('api')->id);

        return Response()->json([
            'result' => 'true',
            'alerts' => ['data' => $alerts]
        ]);
    }

    private static function processFile($file, $alert_content_id)
    {

        $filename = 'alert_content_'.time().'.'.$file->getClientOriginalExtension();
        $path =  'public/alert_contents/attachment/'.$alert_content_id.'/'.$filename;
        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            $dateTime = new \DateTime();
            $result = DB::table('alert_files')->insert([
                [
                    'filename' => $filename,
                    'filetype' => $file->getClientOriginalExtension(),
                    'alert_content_id' => $alert_content_id,
                    'created_at' => $dateTime,
                    'updated_at' => $dateTime,
                ]
            ]);

            return ( $result ) ?  true : false;
        }

        return false;
    }

    private static function getEmployees($employee_role_id, $individual)
    {

        //get employee ids from alert_group_recipients

        $alert_group_recipient_ids = [];

        if( !empty( $employee_role_id ) ){
            $group_recipients = AlertGroupRecipient::whereCompanyId(Auth::user()->employee->company_id)
                                                    ->whereIn('employee_role_id', json_decode($employee_role_id) )
                                                    ->get();

            if( !$group_recipients->isEmpty() ){
                foreach( $group_recipients as $group_recipient ){
                    array_push($alert_group_recipient_ids, $group_recipient->employee_id);
                }
            }

        }

        $employees = Employee::orWhere( function( $query ) use ( $alert_group_recipient_ids ){
            if( !empty( $alert_group_recipient_ids ) ){
                $query->whereIn('id', $alert_group_recipient_ids );
            }
        })
            ->orWhere( function( $query ) use ( $individual ){

                if( !empty( $individual ) ){
                    $query->whereIn('id', json_decode($individual) );
                }

            })
            ->get();
        return ( $employees->count() > 0 ) ? $employees : null;
    }



}
