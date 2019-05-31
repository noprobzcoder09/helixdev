<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInductionGroupItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('induction_group_items', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('group_id')->unsigned();
            $table->foreign('group_id')->references('id')->on('induction_groups');
            
            $table->integer('induction_id')->unsigned();
            $table->foreign('induction_id')->references('id')->on('inductions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('induction_group_items');
    }
}
