<?php

namespace App\Providers;

use App\Observers\ChemicalObserver;
use App\Observers\EmergencyObserver;
use App\Observers\EmployeeObserver;
use App\Observers\InductionObserver;
use App\Observers\InspectionObserver;
use App\Observers\ResourceObserver;
use App\Observers\SafetyVideoObserver;
use App\Observers\SubContractorObserver;
use Illuminate\Support\ServiceProvider;

use App\Employee;
use App\SubContractor;
use App\Induction;

use App\SafetyVideo;
use App\Inspection;
use App\Chemical;
use App\Emergency;
use App\Resource;

class EloquentEventServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Employee::observe(EmployeeObserver::class);
        SubContractor::observe(SubContractorObserver::class);
        Induction::observe(InductionObserver::class);
     //   InductionComplete::observe(InductionCompleteObserver::class);
        SafetyVideo::observe(SafetyVideoObserver::class);
        Inspection::observe(InspectionObserver::class);
        Chemical::observe(ChemicalObserver::class);
        Emergency::observe(EmergencyObserver::class);
        Resource::observe(ResourceObserver::class);

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
