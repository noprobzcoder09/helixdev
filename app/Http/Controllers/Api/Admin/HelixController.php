<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Helpers\ConstantHelper;
use Illuminate\Http\Request;

use Validator;
use App\HelixUser;
use App\Company;

class HelixController extends Controller
{
    protected function index()
    {
        return response()->json(['etst']);
    }

    protected function getUsers()
    {
        $users = HelixUser::all()->except(['role_id'=>ConstantHelper::$HELIX_SUPER_ADMIN]);
        return response()->json(compact('users'));
    }

    protected function getCompanies()
    {
        $companies = Company::all();
        return response()->json(compact('companies'));
    }
}
