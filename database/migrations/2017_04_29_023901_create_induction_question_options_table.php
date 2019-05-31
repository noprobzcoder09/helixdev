<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInductionQuestionOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('induction_question_options', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('value');
            $table->timestamps();

            $table->integer('question_id')->unsigned();
            $table->foreign('question_id')->references('id')->on('induction_questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('induction_question_options');
    }
}
