<?php

namespace App\Listeners;

use App\Events\UserNew;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\UserWelcome;

class UserSendWelcome
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
     * @param  UserNew  $event
     * @return void
     */
    public function handle(UserNew $event)
    {
        \Mail::to($event->user->email)->send(new UserWelcome($event->user));
    }
}
