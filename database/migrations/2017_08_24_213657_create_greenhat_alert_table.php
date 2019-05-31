<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGreenhatAlertTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('greenhat_alerts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sender')->unsigned();
            $table->integer('receiver')->unsigned();
            $table->string('department');
            $table->integer('employee')->unsigned();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('greenhat_alerts');
    }
}
