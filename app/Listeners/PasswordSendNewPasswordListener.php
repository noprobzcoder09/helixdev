<?php

namespace App\Listeners;

use App\Events\PasswordChange;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\PasswordSuccessChangedMail;

class PasswordSendNewPasswordListener
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
     * @param  PasswordChange  $event
     * @return void
     */
    public function handle(PasswordChange $event)
    {
        \Mail::to($event->user->email)->send(new PasswordSuccessChangedMail($event->user));
    }
}
