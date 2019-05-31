<?php

namespace App\Observers;

use App\InspectionItem;

class InspectionItemObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(InspectionItem $inspectionItem)
    {

    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(InspectionItem $inspectionItem)
    {
        //
    }
}