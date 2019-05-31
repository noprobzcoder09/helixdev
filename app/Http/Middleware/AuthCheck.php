<?php

namespace App\Http\Middleware;

use App\Http\Helpers\ConstantHelper;
use Closure;
use Auth;

class AuthCheck
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
//        if($request->has('email') && $request->has('password')) {
//            return $next($request);
//        } else {
//            return Response()->json(ConstantHelper::$UNAUTHORIZED);
//        }
//
//        if(Auth::check()) {
//            return $next($request);
//        } else {
//            return Response()->json(ConstantHelper::$UNAUTHORIZED);
//        }
        

        return $next($request);

    }
}
