<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Helpers\ConstantHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PasswordController extends Controller
{
    public function __construct(Request $request) {
        $this->request = $request;
    }
    protected function reset()
    {
        $user = \App\User::where('email', $this->request->email)->first();
        if($user) {
            Mail::to($user)->send(new \App\Mail\ForgotPassword($user));
            return Response()->json(ConstantHelper::$SUCCEED_RESET_PASSWORD);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }
}