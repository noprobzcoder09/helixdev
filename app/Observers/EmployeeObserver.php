<?php

namespace App\Observers;

use App\Employee;

use App\Log;
use Auth;

class EmployeeObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(Employee $employee)
    {
        $log = [
            'user_id' => Auth::user()->id,
            'content' => config('logs.user.login')
        ];

        if(Auth::user()->employee) {
            $log['company_id'] = Auth::user()->employee->company_id;
        }

        Log::add($log);
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