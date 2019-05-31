<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255);
            $table->text('link')->nullable();
            $table->string('contact_name', 30)->nullable();
            $table->string('email')->nullable();
            $table->string('accounts_contact')->nullable();
            $table->string('accounts_email')->nullable();
            $table->string('mobile')->nullable();
            $table->string('head_office_state')->nullable();
            $table->string('website')->nullable();
            $table->string('abn')->nullable();
            $table->boolean('status')->default(TRUE);
            $table->boolean('isSample')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->integer('state_id')->unsigned()->nullable();
            $table->foreign('state_id')->references('id')->on('states');

            $table->integer('created_by')->unsigned();
            $table->foreign('created_by')->references('id')->on('helix_users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('companies');
    }
}
