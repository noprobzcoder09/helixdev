<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspection_items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->integer('answer')->nullable();
            $table->boolean('isDone')->default(true);
            $table->boolean('isClone')->default(false);
            $table->integer('status')->nullable();

            $table->integer('assigned_to')->unsigned()->nullable();
            $table->foreign('assigned_to')->references('id')->on('employees');

            $table->text('required_action')->nullable();
            $table->text('description')->nullable();
            $table->date('action_due')->nullable();
            $table->string('options')->nullable();
            $table->boolean('not_applicable')->default(false);

            $table->timestamps();
            $table->softDeletes();

            $table->integer('inspection_item_category_id')->unsigned();
            $table->foreign('inspection_item_category_id')->references('id')->on('inspection_item_categories');

            $table->integer('inspection_id')->unsigned();
            $table->foreign('inspection_id')->references('id')->on('inspections');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inspection_items');
    }
}
