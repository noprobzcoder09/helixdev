<?php

namespace App\Http\Helpers;

use DB;
use Auth;

use App\HelixUser;


class UserHelper {

	/**
	 * Generate Client Secret
	 *
	 * @param int $user_id
	 * @return json response
	 */
	public static function generate_client_secret($user_id){

		$date_time = new \DateTime();
		$generate_client_secret = 	DB::table('oauth_clients')->insert([
			'user_id' => $user_id,
			'name' => 'Authorization Code for User ID '.$user_id,
			'secret' => str_random(40),
			'redirect' => url('/'),
			'personal_access_client' => false,
			'password_client' => true,
			'revoked' => false,
			'created_at' => $date_time,
			'updated_at' => $date_time,
		]);

		return ( $generate_client_secret )	?	true : false;
	}

	public static function can_add_helix_user(){

		$helix_user = HelixUser::whereUserId( Auth::user()->id )->first();
		return ( !is_null( $helix_user ) && $helix_user->role_id == 2 )	?	true : false;

	}

	public static function addAuthClient($userId)
	{
		$date_time = new \DateTime();
		DB::table('oauth_clients')->insert([
			'user_id' => $userId,
			'name' => 'Authorization Code for User ID ' . $userId,
			'secret' => str_random(40),
			'redirect' => url('/'),
			'personal_access_client' => false,
			'password_client' => true,
			'revoked' => false,
			'created_at' => $date_time,
			'updated_at' => $date_time,
		]);
	}

	public static $VALIDATIONS = [
		'first_name' => 'required',
		'last_name'  => 'required',
		'email' 	 => 'required|unique:users,email',
		'mobile' 	 => 'required',
		'password' 	 => 'required',
	];

}