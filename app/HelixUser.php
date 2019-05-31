<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Http\Helpers\UserHelper;
use App\HelixUser;
use Validator;

class HelixUser extends Model
{
    use SoftDeletes;

    protected $table = 'helix_users';
    
    protected $dates = ['deleted_at'];

    protected $fillable = [
       'first_name',
        'last_name',
        'mobile',
        'created_at',
        'updated_at',
        'deleted_at',
        'role_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function role()
    {
        return $this->belongsTo('App\Role', 'role_id', 'id');
    }
    
    public static function viewUser($id) 
    {
        $helixUser = self::find($id);
        if(!$helixUser) return false;
        
        $user = User::find($helixUser->user_id);
        $user->avatar = $user->avatar();
        if(!$user) return false;
        
        $helixUser = array_merge($helixUser->toArray(), $user->toArray());

        return $helixUser;
    }
    
    public static function addUser($arrNewHelixUser)
    {
        $helixUser = new HelixUser();
        $user = new User();

        $user->email = $arrNewHelixUser['email'];
        $user->password = bcrypt($arrNewHelixUser['password']);

        if($user->save())
        {
            $arrNewHelixUser['role_id'] = 1;
            $arrNewHelixUser['user_id'] = $user->id;

            $helixUser->fill($arrNewHelixUser);
            if($helixUser->save()) {
                // generate oauth client id and secret
                UserHelper::generate_client_secret($user->id);
                return $helixUser;
            }

            return false;
        }

        return false;
    }
    
    public static function updateUser($id, $arrHelixUser)
    {
        $helixUser = HelixUser::find($id);

        if(!$helixUser) {
            return false;
        }

        if(isset($arrHelixUser['email'])) {
            $validator = Validator::make(['email'=>$arrHelixUser['email']], [
                'email' => 'required|unique:users,email',
            ]);

            if($validator->fails()) {
                return false;
            }
            $user = User::find($helixUser->user_id);
            $user->email = $arrHelixUser['email'];
            $user->save();

        }

        $helixUser->fill($arrHelixUser);
        if($helixUser->update()) {
            return $helixUser;
        }

        return false;
    }   
}
