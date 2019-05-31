<?php

namespace App\Listeners;

use App\Events\PasswordRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\PasswordRequestMail;
class PasswordSendRequestListener
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
     * @param  PasswordRequest  $event
     * @return void
     */
    public function handle(PasswordRequest $event)
    {
        \Mail::to($event->user->email)->send(new PasswordRequestMail($event->user));
    }
}
