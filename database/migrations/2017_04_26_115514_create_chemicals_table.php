<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChemicalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chemicals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('substance', 255);
            $table->timestamp('issue_date');
            $table->string('type', 255)->nullable();

            $table->string('chemical_company', 255)->nullable();
            $table->string('hazchem', 255)->nullable();
            $table->string('un', 255)->nullable();
            $table->text('classification', 255)->nullable();
            $table->text('health_hazards', 255)->nullable();
            $table->text('first_aid', 255)->nullable();
            $table->string('storage', 255)->nullable();
            $table->text('ppe_text')->nullable();
            $table->text('forms')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->integer('created_by')->unsigned();
            $table->foreign('created_by')->references('id')->on('employees');

            $table->integer('company_id')->unsigned();
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
        Schema::dropIfExists('chemicals');
    }
}
