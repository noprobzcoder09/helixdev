<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

use Carbon\Carbon;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //passport route
        Passport::routes();

        //passport token expiration
        Passport::tokensExpireIn(Carbon::now()->addDays(15));

        //passport refresh token
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(30));

        //enabling ImplicitGrant
        //Passport::enableImplicitGrant();
    }
}
