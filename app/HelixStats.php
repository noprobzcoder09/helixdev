<?php

namespace App;

use App\Company;
use App\User;
use App\Feature;

class HelixStats
{
    public function getTotalCompanies()
    {
        return Company::all()->count();
    }

    public function getTotalUsers()
    {
        return User::all()->count();
    }

    public function getTotalFeatures()
    {
        return Feature::all()->count();
    }

    public function getAverageModules()
    {
        return 9;
    }

    public function getDailyHits()  {
        return 200;
    }

    public function getWeeklyHits()
    {
        return 200;
    }

    public static function getStats()
    {
        $stat = new self();
        return [
            [ 'image_url' => '/img/client.png', 'name' => 'Clients', 'count' => $stat->getTotalCompanies() ],
            [ 'image_url' => '/img/users.png', 'name' => 'Users', 'count' => $stat->getTotalUsers() ],
            [ 'image_url' => '/img/module.png', 'name' => 'Modules', 'count' => $stat->getTotalFeatures() ],
            [ 'image_url' => '/img/daily-hits.png', 'name' => 'Average Modules', 'count' => $stat->getAverageModules() ],
            [ 'image_url' => '/img/avg-module.png', 'name' => 'Daily Hits', 'count' => $stat->getDailyHits() ],
            [ 'image_url' => '/img/weekly-hits.png', 'name' => 'Weekly Hits', 'count' => $stat->getWeeklyHits() ]
        ];
    }
}
