<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmergencyResponseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emergency_response', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->string('role');
            $table->string('name');
            $table->string('mobile');
            $table->integer('group');
            $table->integer('employee_id')->nullable()->unsigned();
            $table->foreign('employee_id')->references('id')->on('employees');

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emergency_response');
    }
}
