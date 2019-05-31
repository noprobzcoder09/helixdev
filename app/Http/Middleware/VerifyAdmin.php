<?php

namespace App\Http\Middleware;

use App\Http\Helpers\ConstantHelper;
use Closure;
use Auth;
use App\Http\Helpers\AppHelper;

class VerifyAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->email && $request->password)
        {
            $user = \App\User::where('email', $request->email)->first();

            if($user && $user->employee->isAdmin()) {
                return $next($request);
            }
        }

        if(Auth::user()) {
            /* check if its helix user */
            if(Auth::user()->helixUser()->first()) {
                return Response()->json(ConstantHelper::$UNAUTHORIZED);
            }
            return $next($request);
        }


        return Response()->json(ConstantHelper::$UNAUTHORIZED);
    }
}
