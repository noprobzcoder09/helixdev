<?php

namespace App;

use App\Http\Helpers\AppHelper;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;
use App\Http\Helpers\ConstantHelper;
use App\UserPassword;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password',
    ];

     protected $events = [
         'created' => Events\UserNew::class
     ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function helixUser()
    {
        return $this->hasOne('App\HelixUser');
    }

    public function avatar()
    {
        $avatar = DB::table('user_images')->where('user_id', $this->id)->first();
        if($avatar){
            return "/storage/users/avatar/{$this->id}/" . $avatar->filename;
        }
        return '';
    }

    public function getUserAvatar()
    {
        $user_avatar = DB::table('user_images')->where('user_id', $this->user_id)->first();
        if($user_avatar) {
            $image_url =  config('fileapi.path_user_avatar') . $this->user_id . '/' . $user_avatar->filename;
        } else {
            $image_url = '/images/user.png';
        }
        return $image_url;
    }

    public function getAvatarPath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."users/avatar/{$this->id}/";
    }

    public function hasDashboard()
    {
        return true;
    }

    public function employee()
    {
        return $this->hasOne('App\Employee');
    }

    public function logs()
    {
        return $this->hasMany('App\Log');
    }

    /* use to send user password in email and sms */
    public function updateTempPassword($password)
    {
        $userPassword = UserPassword::where('user_id', $this->id)->first();
        $password = AppHelper::encrypt($password);

        if($userPassword)
        {
            $userPassword->password = $password;
            $userPassword->update();

            return true;
        }

        $userPassword = new UserPassword();
        $userPassword->user_id = $this->id;
        $userPassword->password = $password;
        $userPassword->save();

        return true;
    }

    public function getPassword()
    {
        $userPassword = UserPassword::where('user_id', $this->id)->first();

        if($userPassword)
        {
            return AppHelper::decrypt($userPassword->password);
        }

        return '';
    }

    public static function updatePassword($email, $password)
    {
        $user = self::where('email', $email)->first();

        if($user) {
            $user->password = bcrypt($password);
            $user->updateTempPassword($password);
            $user->save();
            return $user;
        }

        return false;
    }

}
