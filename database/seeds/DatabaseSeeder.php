<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::unsetEventDispatcher();
        $this->call(StatesTableSeeder::class);
        $this->call(FeaturesTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(EmployeeRolesSeeder::class);
        $this->call(HelixSuperAdminSeeder::class);
        $this->call(HelixAdminSeeder::class);
        $this->call(OAuthClients::class);
        $this->call(CompaniesTablesSeeder::class);

        $this->call(InspectionCategorySeeder::class);
       // $this->call(EmployeesTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(GroupsTableSeeder::class);
        $this->call(ChemicalsPPESeeder::class);
        $this->call(InductionTableSeeder::class);
    }
}
