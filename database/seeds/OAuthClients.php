<?php

use Illuminate\Database\Seeder;
use App\User;

class OAuthClients extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        foreach($users as $user) {
            \App\Http\Helpers\UserHelper::addAuthClient($user->id);
        }
    }
}