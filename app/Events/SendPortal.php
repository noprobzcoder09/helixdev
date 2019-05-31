<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\Models\Notification;
use App\AlertSenderReceiver;
use Auth;

class SendPortal
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($employees, $alert_content)
    {

        if($employees && $employees->count() > 0)
        {
            $alert_sender_receiver_data = array();
            foreach( $employees as $employee )
            {
                $params = array(
                        'alert_content_id' => $alert_content->id,
                        'sender' => Auth::user()->id,
                        'recepient' => $employee->id,
                        'created_at' => date('Y-m-d H:i:s'),
                        'updated_at' => date('Y-m-d H:i:s'),
                    );

                $alert_sender_receiver_data[] = $params;

                $data = [
                    'user_id' 	=> Auth::user()->id,
                    'to_id'		=> $employee->user_id,
                    'alert_content_id' => $alert_content->id,
                    'subject'	=> $alert_content->subject,
                    'message'	=> $alert_content->content,
                    'link'      => ''
                ];

                Notification::create($data);
            }

            AlertSenderReceiver::insert($alert_sender_receiver_data);
        }

    }

}
