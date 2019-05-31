<?php

namespace App\Observers;

use App\InspectionItem;
use App\CorrectiveAction;
use Auth;


class InspectionItemObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(InspectionItem $i)
    {
//        CorrectiveAction::insert([
//            'inspection_item_id' => $i->id,
//            'company_id'     => $i->inspection->company_id,
//            'created_at'     => new \DateTime(),
//            'updated_at'     => new \DateTime()
//        ]);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(InspectionItem $i)
    {
        //
    }
}