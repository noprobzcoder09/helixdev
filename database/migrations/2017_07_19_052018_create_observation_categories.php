<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObservationCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observation_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sub_category');
            $table->string('category');
            $table->timestamps();

            $table->integer('observation_id')->unsigned();
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
        Schema::dropIfExists('observation_categories');
    }
}
