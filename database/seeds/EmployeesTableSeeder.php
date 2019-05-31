<?php

use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $employees = factory(App\Employee::class, 200)->make();
        $company = App\Company::where('name', 'Prime Projects Construction')->first();

        foreach($employees as $employee) {
            $employee->company_id = $company->id;

            $user = new App\User();
            $user->email = $employee->email;

            unset($employee->accounts_email);
            unset($employee->state);
            unset($employee->status);
            $user->password = bcrypt('test');
            $user->save();
            $employee->state_id = 1;
            $employee->user_id = $user->id;
            $employee->save();
        }

    }
}
