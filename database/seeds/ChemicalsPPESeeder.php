<?php

use Illuminate\Database\Seeder;


class ChemicalsPPESeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dateTime = new \DateTime();
        $company = App\Company::where('name', 'helix')->first();
        DB::table('chemical_ppes')->insert([
            [
                'name' => 'respirators',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'facial shield',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'dusk mask',
                'description' => 'for dust and face protection',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'ear protection',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'hand protection',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'safety footwear',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'eye protection',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
            [
                'name' => 'protective clothing',
                'description' => 'head safety masks',
                'created_at' => $dateTime,
                'updated_at' => $dateTime
            ],
        ]);
    }
}
