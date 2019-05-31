<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideoOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_options', function (Blueprint $table) {
            $table->increments('id');
            $table->string('option', 255);
            $table->string('value');
            $table->timestamps();

            $table->integer('video_question_id')->unsigned();
            $table->foreign('video_question_id')->references('id')->on('video_questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('video_options');
    }
}
