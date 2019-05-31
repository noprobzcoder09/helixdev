<?php

namespace App\Observers;

use App\Resource;
use App\Log;
use Auth;

class ResourceObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Resource $re)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.resource.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(Resource $r)
    {
        //
    }
}