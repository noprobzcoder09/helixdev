<?php

namespace App\Listeners;

use App\Events\NewPortalReceiver;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AddNewPortalReceiver
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
     * @param  NewPortalReceiver  $event
     * @return void
     */
    public function handle(NewPortalReceiver $event)
    {
        //
    }
}
