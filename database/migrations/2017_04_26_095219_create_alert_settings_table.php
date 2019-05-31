<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlertSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('sent_to_supervisor');
            $table->boolean('sent_to_leading_hands');
            $table->boolean('sent_to_management');
            $table->boolean('sent_sms');
            $table->boolean('sent_email');
            $table->boolean('sent_portal');
            $table->integer('company_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

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
        Schema::dropIfExists('alert_settings');
    }
}
