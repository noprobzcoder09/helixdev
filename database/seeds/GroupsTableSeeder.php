<?php

use Illuminate\Database\Seeder;
use App\Project;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $groups = factory(App\Group::class, 100)->make();
        $company = App\Company::where('name', 'Prime Projects Construction')->first();
        $projects = Project::all()->pluck('id')->toArray();

        foreach($groups as $group) {
            $rand = rand(0,1);
            $group->project_id = $projects[$rand];
            $group->company_id = $company->id;
            $group->save();
        }
    }
}
