<?php

use Illuminate\Database\Seeder;

class EmployeeRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date_time = new \DateTime();
        DB::table('employee_roles')->insert([
            ['name' => 'Admin', 'created_at' => $date_time, 'updated_at' => $date_time],
            ['name' => 'HR', 'created_at' => $date_time, 'updated_at' => $date_time],
            ['name' => 'Supervisor', 'created_at' => $date_time, 'updated_at' => $date_time],
            ['name' => 'Leading Hands', 'created_at' => $date_time, 'updated_at' => $date_time],
            ['name' => 'Management Team', 'created_at' => $date_time, 'updated_at' => $date_time],
        ]);
    }
}
