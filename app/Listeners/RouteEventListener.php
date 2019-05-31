<?php

namespace App\Listeners;

use App\Events\UserAuthEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log as Logger;
use App\Log;

class RouteEventListener
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
     * Handle user route events.
     */
    public function onRoute($event) {

        
        Logger::info('on route');

    }



    /**
     * Handle the event.
     *
     * @param  UserAuthEvent  $event
     * @return void
     */
    public function handle(UserAuthEvent $event)
    {
        /*Log::info('test event');
        Log::info($event->user);*/
    }

    public function subscribe($events)
    {
       /* $events->listen(
            'Illuminate\Routing\Events\RouteMatched',
            'App\Listeners\RouteEventListener@onRoute'
        );*/
        
        
    }
}
