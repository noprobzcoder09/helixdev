<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlertFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_files', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename', 255);
            $table->string('filetype', 10);
            $table->integer('alert_content_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

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
        Schema::dropIfExists('alert_files');
    }
}
