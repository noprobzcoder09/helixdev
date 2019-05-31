<?php

namespace App\Http\Controllers\Api\HelixAdmin;

use App\HelixUser;
use App\Http\Controllers\Controller;
use App\Http\Helpers\ConstantHelper;
use Illuminate\Http\Request;

use Laravel\Passport\Client;

use Validator;
use Auth;
use DB;
use App\User;

class AuthController extends Controller
{

    public function __construct(Request $request){
        $this->request  = $request;
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

            // Authentication passed...

            //get user's client id and client secret from OAuth table    
            $client = Client::where('user_id', Auth::user()->id)->first();

            //perform oAuth curl for serving access token
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
            $helixUser = HelixUser::find(Auth::id());
            $helixUser->avatar = Auth::user()->getUserAvatar();
            $helixUser->email = Auth::user()->email;
            $jsonResult['user']  = $helixUser;
            return $jsonResult;

        }

        return Response()->json(['result' => false, 'message_code' => 'server_error', 'message' => 'Something wrong with the server']);
    }

    public function logout(Request $request)
    {
        $accessToken = Auth::user()->token();
        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);
        
        $accessToken->revoke();
        return Response()->json(ConstantHelper::$SUCCESS_LOGOUT);
    }

}
