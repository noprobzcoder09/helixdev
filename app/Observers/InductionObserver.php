<?php

namespace App\Observers;

use App\Induction;

use App\Log;
use Auth;

class InductionObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Induction $induction)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.induction.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(Induction $induction)
    {
        //
    }
    
}