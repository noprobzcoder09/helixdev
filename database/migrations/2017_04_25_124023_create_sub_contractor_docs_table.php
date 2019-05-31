<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubContractorDocsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcontractor_docs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename', 100);
            $table->string('type');
            $table->timestamps();

            $table->integer('subcontractor_id')->unsigned();
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
        Schema::dropIfExists('subcontractor_docs');
    }
}
