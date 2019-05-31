<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionImages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspection_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename', 100)->nullable();
            $table->integer('inspection_item_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

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
        Schema::dropIfExists('inspection_images');
    }
}
