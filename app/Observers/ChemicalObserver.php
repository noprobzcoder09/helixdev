<?php

namespace App\Observers;

use App\Chemical;
use App\Log;
use Auth;

class ChemicalObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Chemical $chemical)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.chemical.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(Chemical $chemical)
    {
        //
    }
}