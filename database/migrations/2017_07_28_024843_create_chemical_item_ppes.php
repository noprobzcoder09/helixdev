<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChemicalItemPpes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chemical_item_ppes', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('ppe_id')->unsigned();
            $table->foreign('ppe_id')->references('id')->on('chemical_ppes');


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
        Schema::dropIfExists('chemical_item_ppes');
    }
}
