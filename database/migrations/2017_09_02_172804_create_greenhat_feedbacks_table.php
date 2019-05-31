<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGreenhatFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('greenhat_feedbacks', function(Blueprint $table) {
            $table->increments('id');

            //$table->string('department');
            //$table->integer('reviewer');
            //$table->integer('reviewee');
            //$table->text('dynamic_feedback')->nullable();
            //$table->text('general_comment')->nullable();
            $table->integer('user_id')->unsigned();
            $table->integer('greenhat_program_id')->unsigned();
            $table->text('feedback')->nullable();
            $table->tinyInteger('feedback_by')->comment('1 - worker | 2 - Direct Supervisor | 3 - HR | 4 - Conts Manager | 5 - Plant Dept | 6 - OHS | 7 - Enviro');

            $table->timestamps();
            $table->softDeletes();


            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('greenhat_program_id')->references('id')->on('greenhat_programs');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('greenhat_feedbacks');
    }
}
