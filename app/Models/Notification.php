<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use DB;
use App\Employee;
use App\Alert;

class Notification extends Model
{
    protected $table = 'notifications';
    protected $appends = ['file_url', 'short_text'];
    protected $fillable = ['user_id', 'to_id', 'alert_content_id', 'subject', 'message', 'link', 'extra_params'];
    protected $hidden = ['deleted_at'];

    public static function getUserNotifications($userId)
    {
        $notifications = Notification::where('to_id', $userId)
            ->orderBy('id', 'desc')
            ->get();

      //  $finalNotifications = new Collection;

//        foreach($notifications as $n) {
//            $finalNotifications[] = $n;
//        }
//
//        $employee = Employee::where('user_id', $userId)->first();
//
//        $recepients = DB::table('alert_receivers')->where('recepient', $employee->id)->get();
//
//        foreach($recepients as $r)
//        {
//            $content = DB::table('alert_contents')->where('id', $r->alert_content_id)->first();
//            if($content) {
//                $message = new \stdClass;
//                $message->subject = $content->subject;
//                $message->message = $content->short_text;
//                $message->created_at = $content->created_at;
//                $message->read = false;
//                $finalNotifications[] = $message;
//            }
//        }

        $count = count($notifications);
        return [
            'messages' => $notifications,
            'count' => $count
        ];
    }

    public function getFileUrlAttribute()
    {
        if(!$this->alert_content_id) return '';

        if($this->attachment) {
            return config('fileapi.path_alerts_attachments') . $this->attachment->alert_content_id . '/' . $this->attachment->filename;
        }

        return '';
    }

    public function getShortTextAttribute()
    {
        if($this->alert_content_id) {
          return Alert::find($this->alert_content_id)->short_text;
        }else {
          return '';
        }

        // return 'test';
    }

    public function attachment()
    {
        return $this->belongsTo('App\AlertFile', 'alert_content_id', 'alert_content_id');
    }
}
