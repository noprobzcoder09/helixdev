<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEmployeeStatusToEmployees extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employees', function(Blueprint $table)
        {
            $table->boolean('skilled')->default(0);
            $table->dateTime('skilled_date');
            $table->dateTime('unskilled_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employees', function(Blueprint $table)
        {
            $table->dropColumn('skilled');
            $table->dropColumn('skilled_date');
            $table->dropColumn('unskilled_date');
        });
    }
}
