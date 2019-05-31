<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObservationAssignemntsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observation_assignments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image')->nullable();
            $table->text('forms')->nullable();
            $table->timestamps();

            $table->integer('observation_id')->unsigned()->nullable();
            $table->foreign('observation_id')->references('id')->on('observations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('observation_assignments');
    }
}
