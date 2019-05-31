<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubcontratorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcontractors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30);
            $table->string('contact', 30)->nullable();
            $table->string('contact_number', 30)->nullable();
            $table->string('email', 30);
            $table->string('type', 30);
            $table->boolean('approved')->nullable();
            $table->text('address');
            $table->string('postal_code', 30)->nullable();
            $table->string('abn', 10);
            $table->softDeletes();
            $table->timestamps();

            $table->integer('state_id')->unsigned();
            $table->foreign('state_id')->references('id')->on('states');

            $table->integer('created_by')->unsigned();
            $table->foreign('created_by')->references('id')->on('employees');

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
        Schema::dropIfExists('subcontractors');
    }
}
