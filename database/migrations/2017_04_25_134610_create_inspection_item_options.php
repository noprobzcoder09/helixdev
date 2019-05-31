<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionItemOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspection_item_options', function (Blueprint $table) {
            $table->increments('id');
            $table->string('option', 30);

            $table->timestamps();
            $table->softDeletes();
            
            $table->integer('inspection_item_id')->unsigned();
            $table->foreign('inspection_item_id')->references('id')->on('inspection_items');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inspection_item_options');
    }
}
