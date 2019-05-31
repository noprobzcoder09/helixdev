<?php

namespace App\Observers;

use App\Inspection;
use App\Log;
use Auth;
use App\CorrectiveAction;

class InspectionObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Inspection $inspection)
    {
        Log::add([
            'user_id' => Auth::user()->id,
            'content' => config('logs.inspection.create'),
            'company_id' => Auth::user()->employee->company_id,
        ]);
//
//        CorrectiveAction::insert([
//            'inspection_item_id' => $inspection->id,
//            'company_id'     => $inspection->company_id,
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
    public function deleting(Inspection $inspection)
    {
        //
    }
}