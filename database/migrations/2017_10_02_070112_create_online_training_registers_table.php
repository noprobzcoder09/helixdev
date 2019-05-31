<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOnlineTrainingRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('online_training_registers', function (Blueprint $table) {
            $table->increments('id');

            $table->timestamps();
            $table->softDeletes();
            
            $table->integer('employee_id')->unsigned();
            $table->foreign('employee_id')->references('id')->on('employees');

            $table->string('full_name')->nullable();
            $table->string('title')->nullable();
            
            $table->integer('video_id')->unsigned()->nullable();
            $table->foreign('video_id')->references('id')->on('video_certifications');

            $table->integer('induction_id')->unsigned()->nullable();
            $table->foreign('induction_id')->references('id')->on('induction_certifications');

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('online_training_registers');
    }
}
