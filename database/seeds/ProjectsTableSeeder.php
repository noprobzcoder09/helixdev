<?php

use Illuminate\Database\Seeder;
use App\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        $company = App\Company::where('name', 'Prime Projects Construction')->first();

        $p = new Project();
        $p->name = "Project 1";
        $p->company_id = $company->id;
        $p->save();

        $p2 = new Project();
        $p2->name = "Project 2";
        $p2->company_id = $company->id;
        $p2->save();
    }
}
