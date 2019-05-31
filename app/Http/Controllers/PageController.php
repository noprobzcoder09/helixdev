<?php

namespace App\Http\Controllers;

use App\Events\PasswordChange;
use App\Events\PasswordRequest;
use App\Http\Helpers\AppHelper;
use Illuminate\Http\Request;
use App\User;
use DB;

class PageController extends Controller
{
    protected function index()
    {
        return view('client');
    }

    protected function admin()
    {
        return view('portal');
    }

    protected function helix()
    {
        return view('helix');
    }

    protected function passwordRequest()
    {
        return view('passwords.request');
    }

    protected function passwordPostRequest(Request $request)
    {
        if($request->email)
        {
            $user = User::where('email', $request->email)->first();

            if($user)
            {
                event(new PasswordRequest($user));
                $request->session()->put('succeed_password_request', 'Request to change  password has already been sent..');
            }
        }
        $request->session()->put('error_password_request', 'Email not registered.');

        return view('passwords.request');
    }

    protected function passwordChange(Request $request)
    {
        if($request->h) {
            $email = AppHelper::decrypt($request->h);
            return view('passwords.change', compact('email'));
        }
    }

    protected function passwordPostChange(Request $request)
    {
        $email = $request->email;
        if(
            ($request->has('password') && $request->has('repeat_password'))
            && ($request->password == $request->repeat_password) && $request->has('email')
        ) {
            DB::beginTransaction();

            try {

                $user = User::updatePassword($request->email, $request->password);

                if($user) {
                    event(new PasswordChange($user));
                    DB::commit();
                    return view('passwords.success');
                }

            } catch(\Exception $e) {
                $request->session()->put('error', 'something wrong in the system..');
                DB::rollback();
            }

        } else {
            $request->session()->put('error', 'password and repeat password does not match..');
        }

        return view('passwords.change', compact('email'));
    }
}
