<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlertContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alert_contents', function (Blueprint $table) {
            $table->increments('id');            
            $table->string('subject', 255);
            $table->text('short_text')->nullable();
            $table->text('content')->nullable();
            $table->string('url', 255);
            $table->tinyInteger('read');
            $table->tinyInteger('type')->comment('1 = alert | 2 = message')->nullable();

            $table->string('employee_roles')->comment('3 = Supervisor | 4 = Leading Hands | 5 - Management Team')->nullable();
            $table->string('method', 30)->comment('1 = SMS | 2 = email | 3 = portal')->nullable();

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
        Schema::dropIfExists('alert_contents');
    }
}
