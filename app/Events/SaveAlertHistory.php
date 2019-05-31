<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\AlertHistory;
use Auth;

class SaveAlertHistory
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($collection)
    {

        if( !empty( $collection ) ){
            $alert_data = array();
            foreach($collection->recepient as $recepient){
                array_push($alert_data, array('user_id' => Auth::user()->id, 'subject' => $collection->subject, 'short_text' => $collection->short_text, 'content' => $collection->body, 'type' => $collection->type, 'method' => json_encode( $collection->method ), 'unique_time' => $collection->unique_time, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')));
                break;
            }
            AlertHistory::insert($alert_data);
        }

    }

}
