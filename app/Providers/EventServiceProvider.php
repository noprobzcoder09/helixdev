<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        /*'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],*/
        /*'App\Events\UserAuthEvent' => [
            'App\Listeners\UserAuthEventListener',
        ],*/

        'App\Events\NewAlertContent' => [
            'App\Listeners\NewMessageHistory',
            //'App\Listeners\NewMessageHistoryReceiver',
        ],
        'App\Events\UserNew' => [
            'App\Listeners\UserSendWelcome',
        ],
        'App\Events\UserDetails' => [
            'App\Listeners\UserDetailsListener'
        ],
        'App\Events\PasswordRequest' => [
            'App\Listeners\PasswordSendRequestListener'
        ],
        'App\Events\PasswordChange' => [
            'App\Listeners\PasswordSendNewPasswordListener'
        ],
        'App\Events\NewPortalReceiver' => [
            'App\Listeners\AddNewPortalReceiver',
        ],
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'App\Listeners\UserAuthEventListener',
        //'App\Listeners\RouteEventListener',
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
        Event::listen('send.portal', function ($foo, $bar) {
            //
        });

    }
}
