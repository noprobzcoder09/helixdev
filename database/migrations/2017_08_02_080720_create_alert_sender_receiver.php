<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlertSenderReceiver extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_receivers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('alert_content_id')->unsigned();
            $table->integer('sender')->unsigned();
            $table->integer('recepient')->unsigned();

            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('alert_content_id')->references('id')->on('alert_contents');
            //$table->foreign('sender')->references('id')->on('employees');
            //$table->foreign('recepient')->references('id')->on('employees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alert_receivers');
    }
}
