<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlertHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_history', function (Blueprint $table) {
            $table->increments('id');    
            $table->integer('user_id')->unsigned();        
            $table->integer('alert_content_id')->unsigned();

            $table->timestamps();
            $table->softDeletes();

            //$table->foreign('user_id')->references('id')->on('employees');
            $table->foreign('alert_content_id')->references('id')->on('alert_contents');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alert_history');
    }
}
