<?php

use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::Table('states')->insert([
            ['name' => 'New South Wales', 'abv' => 'NSW'],
            ['name' => 'Queensland', 'abv' => 'QLD'],
            ['name' => 'Victoria', 'abv' => 'VIC'],
            ['name' => 'Western Australia', 'abv' => 'WA'],
            ['name' => 'South Australia', 'abv' => 'SA'],
            ['name' => 'Tasmania', 'abv' => 'TAS']
        ]);
    }
}
