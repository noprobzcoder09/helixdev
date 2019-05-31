<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use Faker\Provider\en_US\PhoneNumber;
use Faker\Provider\en_US\Address;
use Faker\Provider\Lorem;
use Faker\Provider\en_US\Company;
use App\User;
//-----------------------------------------------------------------------------------------------
/*
 * users
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('email')->unique();
        $table->text('password');
        $table->rememberToken();
        $table->softDeletes();
        $table->timestamps();
    });
 */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;
    return [
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
/*
 * groups
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->timestamps();
        });
 */
$factory->define(App\Group::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->company,
    ];
});

//-----------------------------------------------------------------------------------------------

/*
 * helix_users
    $table->increments('id');
    $table->string('first_name', 30);
    $table->string('last_name', 30);
    $table->string('mobile', 30);

    $table->timestamps();
    $table->softDeletes();

    $table->integer('role_id')->unsigned();
    $table->foreign('role_id')->references('id')->on('roles');

    $table->integer('user_id')->unsigned();
    $table->foreign('user_id')->references('id')->on('users');
 */

$factory->define(App\HelixUser::class, function (Faker\Generator $faker) {
    $date_time = new \DateTime();
    return [
        'first_name' => $faker->firstname,
        'last_name' => $faker->lastname,
        'mobile' => $faker->phoneNumber,
        'created_at' => $date_time,
        'updated_at' => $date_time,
        'deleted_at' => null
    ];
});

//-----------------------------------------------------------------------------------------------



/*
 * 
 *    $table->increments('id');
            $table->string('name', 30);
            $table->text('link');
            $table->string('contact_name', 30);
            $table->string('email', 30);
            $table->string('accounts_contact', 30);
            $table->string('accounts_email', 30);
            $table->string('abn');
            $table->integer('created_by')->unsigned();
            $table->integer('state_id')->unsigned();
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('state_id')->references('id')->on('states');

 */


$factory->define(App\Company::class, function (Faker\Generator $faker) {
    $date_time = new \DateTime();
    return [
        'name' => $faker->catchPhrase,
        'link' => $faker->url,
        'contact_name' => $faker->name,
        'email' => $faker->email,
        'accounts_contact' => $faker->name,
        'accounts_email' => $faker->email,
        'abn' => $faker->postcode,
        'mobile' => '2345-923',
        'website' => $faker->url,
        'head_office_state' => 'Australia',
        'state_id' => 1,
        'created_by' => 1,
        'created_at' => $date_time,
        'updated_at' => $date_time
    ];
});

/*
    $table->increments('id');
    $table->string('first_name', 50);
    $table->string('last_name', 50);
    $table->string('email', 30);
    $table->string('mobile', 30)->nullable();
    $table->timestamp('dob')->nullable();
    $table->text('address')->nullable();
    $table->integer('state');
    $table->string('postal_code')->nullable();
    $table->string('kin_name', 30)->nullable();
    $table->string('kin_mobile', 30)->nullable();
    $table->string('kin_relationship', 30)->nullable();
    $table->text('med_conditions')->nullable();
    $table->text('allergies')->nullable();
    $table->integer('created_by')->nullable();

    $table->timestamps();
    $table->softDeletes();

    $table->integer('level_id')->unsigned();
    $table->foreign('level_id')->references('id')->on('levels');

    $table->integer('company_id')->unsigned();
    $table->foreign('company_id')->references('id')->on('companies');
 */

$factory->define(App\Employee::class, function (Faker\Generator $faker) {
    $date_time = new \DateTime();
    return [
        'first_name' => $faker->firstname,
        'last_name' => $faker->lastname,
        'email' => $faker->unique()->email,
        'mobile' => $faker->phoneNumber,
        'accounts_email' => $faker->unique()->email,
        'dob' => $date_time,
        'address' => $faker->address,
        'state' => 1,
        'postal_code' => $faker->postcode,
        'kin_name' => $faker->name,
        'kin_mobile' => $faker->unique()->phoneNumber,
        'kin_relationship' => 'agent',
        'med_conditions' => $faker->text($maxNbChars = 50),
        'allergies' => $faker->text($maxNbChars = 50),
        'employee_role_id' => 1,
        'created_by' => null,
        'created_at' => $date_time,
        'updated_at' => $date_time,
        'status' => TRUE
    ];
});