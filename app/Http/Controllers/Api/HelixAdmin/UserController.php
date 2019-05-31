<?php

namespace App\Http\Controllers\Api\HelixAdmin;

use App\Http\Helpers\ConstantHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Pagination\LengthAwarePaginator;

use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item as FractalItem;

use App\Http\Transformers\Api\HelixUserTransformer;

use App\User;
use App\HelixUser;

use Validator;
use UserHelper;
use App\Http\Helpers\AppHelper;
use File;
use DB;

class UserController extends Controller
{

	public function __construct(Request $request, Manager $manager){
		$this->request  = $request;
		$this->fractal   = new $manager;
	}


	/**
	 * Add Helix Admin User
	 *
	 * @return json response
	 */
	public function add(){

		//throw error when user is not allowed to perform the method
//		if(!UserHelper::can_add_helix_user())
//		{
//			return Response()->json(['result' => false, 'message_code' => 'not_allowed_method', 'message' => 'You re not allowed to perform this method.']);
//		}

		$validator = Validator::make($this->request->all(), UserHelper::$VALIDATIONS);

		if($validator->fails())
		{
			return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
		}

		$helixUser = HelixUser::addUser($this->request->all());
		if( $helixUser ) {
			$user = User::find($helixUser->user_id);
			if($this->request->hasFile('avatar')) {
				self::processAvatar($user, $this->request->file('avatar'));
			}
			return Response()->json(ConstantHelper::$SUCCEED_ADDED_USER);
		}

		return Response()->json(ConstantHelper::$SERVER_ERROR);
	}


	/**
	 * Update Helix Admin User
	 *
	 * @return json response
	 */
	public function update($helixUserId){
		//echo $helixUserId;
		//throw error when user is not allowed to perform the method
//		if( !UserHelper::can_add_helix_user() ){
//			return Response()->json(['result' => false, 'message_code' => 'not_allowed_method', 'message' => 'You re not allowed to perform this method.']);
//		}
		
		$validations = UserHelper::$VALIDATIONS;
		unset($validations['password']);
		unset($validations['email']);
		
		$validator = Validator::make($this->request->all(), $validations);

		if ($validator->fails()) {
			return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
		}

		$helixUser = HelixUser::updateUser(AppHelper::decrypt( $helixUserId ), $this->request->all());

		if($helixUser) {
			$user = User::find($helixUser->user_id);
			if($this->request->hasFile('avatar')) {
				self::processAvatar($user, $this->request->file('avatar'));
			}
			return Response()->json(ConstantHelper::$SUCCEED_UPDATE_USER);
		}

		return Response()->json(ConstantHelper::$SERVER_ERROR);
	}

	/**
	 * Lists of Helix Admin Users
	 *
	 * @return json response
	 */
	public function lists(){

		$helix_users = HelixUser::paginate( 15 );

		$resource = new FractalCollection( $helix_users, new HelixUserTransformer );
		$collection =  $this->fractal->parseIncludes('user')->createData( $resource )->toArray();
		return Response()->json(['result' => true, 'helix_users' => $collection]);

	}

	/**
	 * View Helix Admin User
	 *
	 * @return json response
	 */
	public function view($id)
	{
		$helixUser = HelixUser::viewUser( AppHelper::decrypt( $id ) );

		if($helixUser) {
			return Response()->json(['result' => true, 'helix_user' => ['data'=>$helixUser]]);
		}

		return Response()->json(ConstantHelper::$SERVER_ERROR);

	}

	/**
	 * Delete Helix Admin User
	 *
	 * @return json response
	 */
	
	public function delete($id)
	{
		
	}

	protected function processAvatar($user, $file)
	{
		if(File::exists(public_path($user->getAvatarPath()))) {
			Storage::deleteDirectory(public_path($user->getAvatarPath()));
		}

		DB::table('user_images')->where('user_id', $user->id)->delete();

		$filename = 'user_'.time().'.'.$file->getClientOriginalExtension();
		$path = $user->getAvatarPath() . $filename;
		$upload = AppHelper::upload( $path, $file );

		if( $upload ){
			$date_time = new \DateTime();
			DB::table('user_images')->insert([
				'user_id' => $user->id,
				'filename' => $filename,
				'created_at' => $date_time,
				'updated_at' => $date_time
			]);
			return true;
		}

		return false;
	}
}
