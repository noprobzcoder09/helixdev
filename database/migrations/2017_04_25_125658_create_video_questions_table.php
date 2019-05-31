<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideoQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_questions', function (Blueprint $table) {
            $table->increments('id');
            $table->text('question');

            $table->softDeletes();
            $table->timestamps();

            $table->integer('answer')->unsigned()->nullable();

            $table->integer('video_id')->unsigned();
            $table->foreign('video_id')->references('id')->on('videos');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('video_questions');
    }
}
