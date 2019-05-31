<?php

namespace App\Services;

use App\Models\Notification;

class NotificationServices
{
    /*public function addNotification($from, $to, $subject, $message, $link)
    {
        $data = [
    		'user_id' 	=> $from,
    		'to_id'		=> $to,
    		'subject'	=> $subject,
    		'message'	=> $message,
            'link'      => $link
    	];

       return Notification::updateOrCreate(['user_id'   => $from, 'to_id'=> $to], $data);
    }*/


    public function updateOrCreate($data)
    {
        
       return Notification::updateOrCreate(['user_id'   => $data['user_id'], 'to_id'=> $data['to_id'], 'extra_params' => $data['extra_params']], $data);
    }


    public function getNotifications($id)
    {
        return Notification::where('to_id', $id)
            ->orderBy('id', 'asc')
            ->get();
    }
}
