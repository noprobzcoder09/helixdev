<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInductionQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('induction_questions', function (Blueprint $table) {
            $table->increments('id');
            $table->text('question');

            $table->timestamps();
            $table->string('answer');

            $table->integer('induction_id')->unsigned();
            $table->foreign('induction_id')->references('id')->on('inductions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('induction_questions');
    }
}
