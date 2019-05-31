<?php

namespace App\Listeners;

use App\Events\NewAlertContent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\AlertHistory;
use App\AlertHistoryReceiver;
use Auth;

class NewMessageHistory
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewAlertContent  $event
     * @return void
     */
    public function handle(NewAlertContent $event)
    {
        $alert_history = AlertHistory::create([
            'user_id' => Auth::user()->id,
            'alert_content_id' => $event->alert->id,
        ]);

        if( $alert_history ){
            if( $event->employees && $event->employees->count() > 0 ){

                $alert_history_receiver_data = array();
                foreach( $event->employees as $employee ){
                    $params = array(
                            'alert_history_id' => $alert_history->id,
                            'recepient' => $employee->id,
                            'created_at' => date('Y-m-d H:i:s'),
                            'updated_at' => date('Y-m-d H:i:s'),
                        );

                    $alert_history_receiver_data[] = $params;
                }
                AlertHistoryReceiver::insert($alert_history_receiver_data);
            }
        }
    }
}
