<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\SubContractor;
use App\Observation;
use App\InspectionItem;
use App\Observers\SubContractorObserver;
use App\Observers\ObservationObserver;
use App\Observers\InspectionItemObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        SubContractor::observe(SubContractorObserver::class);
        Observation::observe(ObservationObserver::class);
        InspectionItem::observe(InspectionItemObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
