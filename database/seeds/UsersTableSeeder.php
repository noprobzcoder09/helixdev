<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date_time = new \DateTime();
        DB::table('users')->insert([
            'email' => 'johndoetest@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => $date_time,
            'updated_at' => $date_time
        ]);
    }
}
