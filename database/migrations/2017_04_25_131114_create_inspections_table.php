<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspections', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->boolean('isSetup')->default(false);
            $table->boolean('isClone')->default(false);
            $table->string('site_location')->nullable();
            $table->string('supervisor')->nullable();
            $table->text('lat_long')->nullable();
            $table->text('google_address')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->integer('inspected_by')->unsigned()->nullable();
            $table->foreign('inspected_by')->references('id')->on('employees');

            $table->integer('created_by')->unsigned();
            $table->foreign('created_by')->references('id')->on('employees');

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies');

            $table->integer('inspection_category_id')->unsigned();
            $table->foreign('inspection_category_id')->references('id')->on('inspection_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inspections');
    }
}
