<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;


class SendSMS
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */   

    public function __construct($employees, $alert_content)
    {
        
        if( !empty( $employees ) ){

            $client = new \GuzzleHttp\Client();

            if($alert_content->short_text) {
                $message = $alert_content->subject."\n\n".$alert_content->short_text;
            } else {
                $message = $alert_content->subject."\n\n".$alert_content->content;
            }

            if( !empty( $employees->count() > 0 ) ){
                foreach( $employees as $employee ){
                    $res = $client->request('GET', 'https://platform.clickatell.com/messages/http/send?apiKey=m2VHL7tSQ-OKT-bWbArhAA==&to='.$employee->mobile.'&content='.urlencode($message) );
                }
            }
        }
        
    }
}
