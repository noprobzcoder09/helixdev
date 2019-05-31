<?php

namespace App\Observers;

use App\SafetyVideo;
use App\Log;
use Auth;

class SafetyVideoObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(SafetyVideo $video)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.safety_video.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(SafetyVideo $video)
    {
        //
    }
}