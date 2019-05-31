<?php

use Illuminate\Database\Seeder;
use App\Employee;
use App\Company;
use App\User;
use App\Http\Helpers\ConstantHelper;

class CompaniesTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date_time = new \DateTime();
        $companies = factory(App\Company::class, 10)->make();
        $features = App\Feature::all();
        foreach($companies as $key =>$company) {

            if($key == 1) {
                $company = new Company();
                $company->name = 'Prime Projects Construction';
                $company->link = 'www.ppc.com';
                $company->status = 1;
                $company->state_id = 1;
                $company->created_by = 1;
                $company->isSample = true;
                $company->save();

                $result = Employee::addEmployee([
                    'first_name' => 'admin',
                    'last_name'  => 'admin',
                    'email'      => 'admin@primeprojects.com.au',
                    'state_id'   => $company->state_id,
                    'mobile'     => '+639173786266',
                    'company_id' => $company->id,
                    'employee_role_id' => 1,
                    'isAdmin'    => true,
                    'password'   => 'secret'
                ]);
            } else {

                $result = Employee::addEmployee([
                    'first_name' => 'admin',
                    'last_name'  => 'admin',
                    'email'      => 'admin@admin' . $key . '.com',
                    'state_id'   => $company->state_id,
                    'company_id' => $company->id,
                    'employee_role_id' => 1,
                    'isAdmin' => true
                ]);
                $company->save();
            }

            foreach($features as $feature)
            {
                DB::table('modules')->insert([
                   [
                       'key' => $feature->key,
                       'feature_id' => $feature->id,
                       'company_id' => $company->id,
                       'created_at' => $date_time,
                       'updated_at' => $date_time,
                       'status' => true
                   ]
                ]);
            }
        }
    }
}
