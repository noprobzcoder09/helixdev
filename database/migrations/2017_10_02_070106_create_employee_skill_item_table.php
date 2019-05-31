<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeeSkillItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_skill_item', function (Blueprint $table) {
            $table->integer('employee_id')->references('id')->on('employees');
            $table->integer('skill_item_id')->references('id')->on('skill_items');
            $table->integer('skill_id')->references('id')->on('skills');
            $table->timestamps();
            $table->primary(['employee_id', 'skill_item_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_skill_item');
    }
}
