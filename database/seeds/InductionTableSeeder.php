<?php

use Illuminate\Database\Seeder;

class InductionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $company = App\Company::where('name', 'Prime Projects Construction')->first();

        if($company)
        {
            $dateTime = new \DateTime();

            DB::table('induction_groups')->insert([
                [
                    'name'       => 'Uncategorized',
                    'created_at' => $dateTime,
                    'updated_at' => $dateTime,
                    'company_id' => $company->id
                ]
            ]);
        }
    }
}
