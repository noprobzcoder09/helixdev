<?php

namespace App\Listeners;

use App\Events\NewAlertContent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Illuminate\Support\Facades\Log;

class NewMessageHistoryReceiver
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
        //Log::info( $event->employees );
       
    }
}
