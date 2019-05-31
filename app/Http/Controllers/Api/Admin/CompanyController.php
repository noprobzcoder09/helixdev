<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;

use App\Company;
use App\State;

class CompanyController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function init()
    {
        $states = State::all();
        $projects = [];

        return Response()->json([
            'result'  => true,
            'init'    =>
            [
                'data' => [
                    'states' => $states,
                    'sub_contractor_required_docs' => config('requirements.sub_contractor_docs'),
                    'employee_required_docs' => config('requirements.employee_docs'),
                    'projects'  => $projects,
                    'option_keys' => config('requirements.inspection_option_keys')
                ]
            ]
        ]);
    }
}
