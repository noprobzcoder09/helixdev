<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('email');
            $table->string('mobile', 30)->nullable();
            $table->date('dob')->nullable();
            $table->text('address')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('kin_name', 30)->nullable();
            $table->string('kin_mobile', 30)->nullable();
            $table->string('kin_relationship', 30)->nullable();
            $table->text('med_conditions')->nullable();
            $table->text('allergies')->nullable();
            $table->integer('created_by')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');

            $table->integer('state_id')->unsigned()->nullable();
            $table->foreign('state_id')->references('id')->on('states');

            $table->integer('employee_role_id')->unsigned();
            $table->foreign('employee_role_id')->references('id')->on('employee_roles');
            
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
        Schema::dropIfExists('employees');
    }
}
