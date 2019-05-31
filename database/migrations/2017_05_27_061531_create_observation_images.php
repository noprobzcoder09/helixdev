<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObservationImages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observation_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('pre_action_photo_filename', 100)->nullable();
            $table->string('post_action_photo_filename', 100)->nullable();
            $table->string('verified_action_photo_filename', 100)->nullable();
            $table->integer('observation_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('observation_id')->references('id')->on('observations')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('observation_images');
    }
}
