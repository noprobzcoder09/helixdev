<?php

use Illuminate\Database\Seeder;
use App\User;
class HelixAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory('App\User', 10)->make();
        foreach($users as $user) {
            $user->save();
            $helix_user = factory('App\HelixUser', 1)->make()->first()->toArray();
            $helix_user['user_id'] = $user->id;
            $helix_user['role_id'] = 2;
            DB::table('helix_users')->insert($helix_user);
        }
    }
}