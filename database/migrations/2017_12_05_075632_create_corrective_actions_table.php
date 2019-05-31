<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCorrectiveActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('corrective_actions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('inspection_item_id')->unsigned()->nullable();
            $table->foreign('inspection_item_id')->references('id')->on('inspection_items');
            $table->integer('observation_id')->unsigned()->nullable();
            $table->foreign('observation_id')->references('id')->on('observations');
            $table->integer('company_id')->unsigned()->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('corrective_actions');
    }
}
