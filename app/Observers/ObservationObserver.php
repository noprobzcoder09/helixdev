<?php

namespace App\Observers;

use Auth;
use App\Observation;
use App\CorrectiveAction;

class ObservationObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Observation $observation)
    {
        // create corrective action here....
        CorrectiveAction::insert([
            'observation_id' => $observation->id,
            'company_id'     => $observation->company_id,
            'created_at'     => new \DateTime(),
            'updated_at'     => new \DateTime()
        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(Observation $observation)
    {
        //
    }
}