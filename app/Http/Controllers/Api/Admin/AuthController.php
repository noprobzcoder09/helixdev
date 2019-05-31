<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Laravel\Passport\Client;

use Validator;
use Auth;
use App\Log;
use DB;
use Session;

class AuthController extends Controller
{

    public function __construct(Request $request){
        $this->request  = $request;
    }

    protected function guard()
    {
        return Auth::guard('api');
    }
    /**
     * Login Auth
     *
     * @return json response
     */
    public function login(){

        $validator = Validator::make($this->request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(['result' => false, 'message_code' => 'error_validation', 'message' => $validator->errors() ]);
        }

        if (Auth::attempt(['email' => $this->request->get('email'), 'password' => $this->request->get('password')])) {

            /* Authentication passed... */

            /* get user's client id and client secret from OAuth table */
            $client = Client::where('user_id', Auth::user()->id)->first();

            /* perform oAuth curl for serving access token */
            $http = new \GuzzleHttp\Client;

            $response = $http->post(url('oauth/token'), [
                'form_params' => [
                    'client_id'     => $client->id,
                    'client_secret' => $client->secret,
                    'grant_type'    => 'password',
                    'username'      => $this->request->get('email'),
                    'password'      => $this->request->get('password'),
                    'code'          => '',
                ],
            ]);

            $jsonResult = json_decode((string) $response->getBody(), true);
            $employee = \App\Employee::where('user_id', Auth::id())->first();
            $employee->avatar = $employee->getUserAvatar();
            $employee->email = Auth::user()->email;
            $jsonResult['company'] = $employee->getCompany();
            $jsonResult['user']  = $employee;
            $jsonResult['states']  = $employee->state;

            return $jsonResult;
        }

        return Response()->json(['result' => false, 'message_code' => 'server_error', 'message' => 'Something wrong with the server']);
    }

    public function logout(Request $request)
    {

        if (!$this->guard()->check()) {
            return response([
                'message' => 'No active user session was found'
            ], 404);
        }

        // Taken from: https://laracasts.com/discuss/channels/laravel/laravel-53-passport-password-grant-logout
        $request->user('api')->token()->revoke();

        Auth::guard()->logout();

        Session::flush();

        Session::regenerate();

        Log::add([
            'user_id' => $request->user('api')->id,
            'content' => config('logs.user.logout'),
            'company_id' => $request->user('api')->employee->id,
        ]);
        return response([
            'message' => 'User was logged out'
        ]);
    }
}
