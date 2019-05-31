<?php

use Illuminate\Database\Seeder;

class FeaturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('features')->insert([
            ['name'  => 'Observations',  'key'   => 'observations'],
            ['name'  => 'Safety Videos', 'key'  => 'safety_vids'],
            ['key'   => 'inspection',    'name'  => 'Inspection'],
            ['key'   => 'inductions',    'name'  => 'Inductions'],
            ['key'   => 'chemical_mgt',  'name'  => 'Chemical Mgt'],
            ['key'   => 'incidents',     'name'  => 'Incidents'],
            ['key'   => 'resources',     'name'  => 'Resources'],
            ['key'   => 'alerts',        'name'  => 'Alerts'],
            ['key'   => 'emergency_info', 'name' => 'Emergency Info']
        ]);
    }
}
