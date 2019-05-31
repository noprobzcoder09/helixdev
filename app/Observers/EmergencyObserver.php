<?php

namespace App\Observers;

use App\Emergency;
use App\Log;
use Auth;

class EmergencyObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Emergency $emergency)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.emergency.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(Emergency $emergency)
    {
        //
    }
}