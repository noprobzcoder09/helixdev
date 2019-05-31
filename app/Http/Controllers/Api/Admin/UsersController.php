<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Laravel\Passport\Client;

use Validator;
use Auth;

use App\User;

class UsersController extends Controller
{
    
    public function __construct(Request $request){        
        $this->request  = $request; 
    }

    public function index()
    {

    }

}
