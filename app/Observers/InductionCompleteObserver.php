<?php

namespace App\Observers;

use App\InductionComplete;
use App\Log;
use Auth;

class InductionCompleteObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function passVideo()
    {
        dd('xxxxxxxxxxxyyyyyyyyyyyyxxxxxxxx');
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => 'llxxxxxxxxx',
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(InductionComplete $r)
    {
        //
    }
}