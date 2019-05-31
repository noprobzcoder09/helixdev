<?php

namespace App\Observers;

use App\SubContractor;

use App\Log;
use Auth;

class SubContractorObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(SubContractor $user)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.sub_con.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(SubContractor $user)
    {
        //
    }
}