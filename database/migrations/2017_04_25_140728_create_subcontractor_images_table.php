<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubcontractorImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcontractor_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename', 100);
            $table->integer('subcontractor_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('subcontractor_id')->references('id')->on('subcontractors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcontractor_images');
    }
}
