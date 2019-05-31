<?php

namespace App\Services;

use App\Alert;
use App\AlertSenderReceiver;

class AlertServices
{
    public function saveAlert($user_id, $created_by, $subject, $message, $link)
    {        
        // save to alerts_content
        $content = [
            'subject'       => $subject,
            'short_text'    => $message,
            'url'           => $link,
            'read'          => 0,
            'method'        => 'portal', //used string because column is varchar
            'type'          => 1,
        ];

        $save_content = Alert::updateOrcreate($content);

        if($save_content->id) {
            // save to receiver
            $receiver = [
                'alert_content_id'  => $save_content->id,
                'sender'            => $created_by,
                'recepient'         => $user_id
            ];

            $save_receiver = AlertSenderReceiver::updateOrcreate($receiver);
        }

        return $save_receiver;
    }
}
