<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChemicalMsdsImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chemical_msds_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename');
            $table->string('type');
            $table->timestamps();

            $table->integer('chemical_id')->unsigned();
            $table->foreign('chemical_id')->references('id')->on('chemicals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chemical_msds_images');
    }
}
