<?php

namespace App\Listeners;

use App\Events\UserDetails;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\UserSendDetailsMail;

class UserDetailsListener
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
     * @param  UserDetails  $event
     * @return void
     */
    public function handle(UserDetails $event)
    {
        \Mail::to($event->user->email)->send(new UserSendDetailsMail($event->user));
    }
}
