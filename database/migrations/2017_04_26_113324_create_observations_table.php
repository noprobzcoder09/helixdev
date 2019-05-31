<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observations', function (Blueprint $table) {
            $table->increments('id');

            /* what you saw */
            $table->text('seen');
            $table->text('description')->nullable();

            $table->string('category');

            /* NEGATIVE, SAFE */
            $table->integer('type')->nullable();
            $table->integer('status')->nullable();

            /* YES NO */
            $table->boolean('isAction');
            $table->timestamp('due')->nullable();

            /* Employee performer */
            $table->integer('performed_by')->unsigned()->nullable();
            $table->foreign('performed_by')->references('id')->on('employees');


            /*
             *
             * Client Side
             *
             */

            $table->text('location')->nullable();
            $table->text('action_performed')->nullable();
            $table->text('further_action')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');

            $table->text('verification_comment')->nullable();
            $table->integer('created_by')->unsigned()->nullable();
            $table->foreign('created_by')->references('id')->on('employees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('observations');
    }
}
