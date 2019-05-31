<?php

namespace App\Http\Controllers\Api\HelixAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HelixController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function init()
    {
        return Response()->json([
            'result' => true,
            'init' => [
                'data' =>
                    [
                        'modules' => config('requirements.modules')
                    ]
            ]
        ]);
    }
}
