<?php

use Illuminate\Database\Seeder;
use App\InspectionCategory;

class InspectionCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = new InspectionCategory();
        $category->name = 'Safety/OHS';
        $category->save();

        $category = new InspectionCategory();
        $category->name = 'Environmental';
        $category->save();

        $category = new InspectionCategory();
        $category->name = 'Plant & Equipment';
        $category->save();

        $category = new InspectionCategory();
        $category->name = 'Quality';
        $category->save();

        $category = new InspectionCategory();
        $category->name = 'Health & Wellbeing';
        $category->save();

        $category = new InspectionCategory();
        $category->name = 'HR';
        $category->save();
    }
}
