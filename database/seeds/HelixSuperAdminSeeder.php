<?php

use Illuminate\Database\Seeder;
use App\User;

class HelixSuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fUser = factory('App\User', 1)->make()->first();
        $fUser->email = 'superadmin@helix.com';
        $fUser->save();

        $superAdmin = factory('App\HelixUser', 1)->make()->first()->toArray();
        $superAdmin['role_id'] = 1;
        $superAdmin['user_id'] = $fUser->id;
        DB::table('helix_users')->insert($superAdmin);
    }
}