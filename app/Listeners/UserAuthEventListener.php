<?php

namespace App\Listeners;

use App\Events\UserAuthEvent;
use App\Log;
use Auth;

class UserAuthEventListener
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
     * Handle user login events.
     */
    public function onUserLogin($event) {

        $log = [
            'user_id' => Auth::user()->id,
            'content' => config('logs.user.login')
        ];

        if(Auth::user()->employee) {
            $log['company_id'] = Auth::user()->employee->company_id;
        }

        Log::add($log);

    }

    /**
     * Handle user logout events.
     */
    public function onUserLogout($event)
    {
        
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
        $events->listen(
            'Illuminate\Auth\Events\Login',
            'App\Listeners\UserAuthEventListener@onUserLogin'
        );

        $events->listen(
            'Illuminate\Auth\Events\Logout',
            'App\Listeners\UserAuthEventListener@onUserLogout'
        );
    }
}
