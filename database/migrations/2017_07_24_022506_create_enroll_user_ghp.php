<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnrollUserGhp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('greenhat_programs', function(Blueprint $table) {
          $table->increments('id');
          $table->smallInteger('user_id')->references('employees')->on('id');
          $table->smallInteger('company_id')->references('companies')->on('id');
          $table->smallInteger('supervisor_id')->references('employees')->on('id');
          $table->smallInteger('status');
          $table->smallInteger('const_mgmt_id');
          $table->smallInteger('plant_dept_id');
          $table->smallInteger('env_evaluator_id');
          $table->smallInteger('hr_followup_id');
          $table->smallInteger('ohs_evaluator_id');
          $table->smallInteger('created_by');
          $table->string('comment')->nullable();
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
        Schema::drop('greenhat_program');
    }
}
