<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('to_id')->unsigned();
            $table->integer('alert_content_id')->unsigned()->nullable();
            $table->foreign('alert_content_id')->references('id')->on('alert_contents');
            $table->string('subject', 255);
            $table->text('message');
            $table->string('link', 255)->nullable();
            $table->boolean('read')->default(false);
            $table->string('extra_params')->nullable()->comment('useful table column for special column where condition');
            $table->timestamps();
            $table->softDeletes();
            $table->text('action_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('notifications');
    }
}
