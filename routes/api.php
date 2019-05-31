<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* test routes with auth:api middleware */

/* Route::group(['middleware' => 'auth:api'], function () {

    //sample get user
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});*/


Route::group(['prefix' => 'v1'], function () {

    /*
    * Test API routes
    *
    */
    Route::get('/generate', ['as' => 'admin.token.generate', 'uses' => function (Request $request) {
        echo UserHelper::generate_client_secret(2);
    }]);

    /*
    * Unprotected API routes
    *
    */

    /* helix admin login */
    Route::post('/helixadmin/login',['as' => 'helixadmin.login', 'uses' => 'Api\HelixAdmin\AuthController@login']);

    /* helix admin logout */
    Route::post('/helixadmin/logout',['middleware' => 'auth:api', 'as' => 'helixadmin.logout', 'uses' => 'Api\HelixAdmin\AuthController@logout']);

    /* admin login */
    Route::post('/admin/login',['as' => 'admin.login', 'uses' => 'Api\Admin\AuthController@login', 'middleware' => 'company']);

    /* admin logout */
    Route::post('/admin/logout',['as' => 'admin.logout', 'uses' => 'Api\Admin\AuthController@logout']);

    /* client login */
    Route::post('/client/login',['as' => 'client.login', 'uses' => 'Api\Admin\AuthController@login']);

    /* admin logout */
    Route::post('/client/logout',['as' => 'client.logout', 'uses' => 'Api\Admin\AuthController@logout']);

    /* client reset password */
    Route::group(['prefix' => 'password'], function()
    {
        Route::post('reset', ['as' => 'password.reset', 'uses' => 'Api\PasswordController@reset']);
    });

    /*
    * Protected API routes | auth:api middleware
    * HelixAdmin
    */
    Route::group(['prefix' => 'helixadmin', 'middleware' => ['auth:api']], function ()
    {
        /* initialize data e.g modules */
        Route::get('init',['as' => 'helixadmin.init', 'uses' => 'Api\HelixAdmin\HelixController@init']);

        /* features */
        Route::get('features',['as' => 'helixadmin.features', 'uses' => 'Api\HelixAdmin\CompanyController@features']);

        /* states */
        Route::get('states',['as' => 'helixadmin.states', 'uses' => 'Api\HelixAdmin\CompanyController@states']);

        /* users */
        Route::group(['prefix' => 'user'], function(){
            /* add user */
            Route::post('add',['as' => 'helixadmin.user.add', 'uses' => 'Api\HelixAdmin\UserController@add']);

            /* list of user */
            Route::get('lists',['as' => 'helixadmin.user.lists', 'uses' => 'Api\HelixAdmin\UserController@lists']);

            /* view user */
            Route::get('{id}/view', ['as' => 'helixadmin.user.view', 'uses' => 'Api\HelixAdmin\UserController@view']);

            /* update user */
            Route::post('{id}/update', ['as' => 'helixadmin.user.update', 'uses' => 'Api\HelixAdmin\UserController@update']);

            /* delete user */
            Route::post('{id}/delete', ['as' => 'helixadmin.user.delete', 'uses' => 'Api\HelixAdmin\UserController@delete']);
        });

        /* companies */
        Route::group(['prefix' => 'company'], function() {
            /* add a company */
            Route::post('add',['as' => 'helixadmin.company.add', 'uses' => 'Api\HelixAdmin\CompanyController@add']);

            /* list of companies */
            Route::get('lists',['as' => 'helixadmin.company.lists', 'uses' => 'Api\HelixAdmin\CompanyController@lists']);

            /* view company */
            Route::get('{id}/view',['as' => 'helixadmin.company.view', 'uses' => 'Api\HelixAdmin\CompanyController@view']);

            /* update company */
            Route::post('{id}/update',['as' => 'helixadmin.company.update', 'uses' => 'Api\HelixAdmin\CompanyController@update']);

            /* disable company */
            Route::get('{id}/disable',['as' => 'helixadmin.company.enable', 'uses' => 'Api\HelixAdmin\CompanyController@disable']);

            /* enable company */
            Route::get('{id}/enable',['as' => 'helixadmin.company.disable', 'uses' => 'Api\HelixAdmin\CompanyController@enable']);
        });
    });

    /*
    * Protected API routes | auth:api middleware
    * CompanyAdmin
    */
    Route::group(['prefix' => 'admin', 'middleware' => ['auth:api', 'company']], function() {
        /* subcontractor */
        Route::group(['prefix' => 'subcontractor'], function() {

            //add
            Route::post('add',['as' => 'admin.subcontractor.add', 'uses' => 'Api\Admin\SubcontractorController@add']);

            //update
            Route::post('{id}/update',['as' => 'admin.subcontractor.update', 'uses' => 'Api\Admin\SubcontractorController@update']);

            //delete
            Route::delete('{id}/delete',['as' => 'admin.subcontractor.delete', 'uses' => 'Api\Admin\SubcontractorController@delete']);

            //lists
            Route::get('lists',['as' => 'admin.subcontractor.lists', 'uses' => 'Api\Admin\SubcontractorController@lists']);

            //search
            Route::post('search',['as' => 'admin.subcontractor.search', 'uses' => 'Api\Admin\SubcontractorController@search']);

            //upload docs
            Route::post('upload-docs',['as' => 'admin.subcontractor.upload.docs', 'uses' => 'Api\Admin\SubcontractorController@uploadDocs']);

            //add logo
            Route::post('add/logo',['as' => 'admin.subcontractor.add.logo', 'uses' => 'Api\Admin\SubcontractorController@addLogo']);

            //add document
            Route::post('add/document',['as' => 'admin.subcontractor.add.document', 'uses' => 'Api\Admin\SubcontractorController@addDocument']);
        });


        /* Company */
        Route::group(['prefix' => 'company/{id}/'], function()
        {
            Route::get('analytics', 'Api\Admin\Company\AnalyticsController@overview');
            Route::get('export-by-employee', 'Api\Admin\Company\AnalyticsController@exportByEmployee');

			/* Chemical Management */
			Route::group(['prefix' => 'chemical'], function()
			{

				/* add */
				Route::post('add', ['as' => 'admin.chemical.add', 'uses' => 'Api\Admin\ChemicalController@add']);

				/* lists */
				Route::get('lists', ['as' => 'admin.chemical.lists', 'uses' => 'Api\Admin\ChemicalController@lists']);

				/* update */
				Route::post('{cId}/update', ['as' => 'admin.chemical.update', 'uses' => 'Api\Admin\ChemicalController@update']);

				/* view */
				Route::get('{cId}/view', ['as' => 'admin.chemical.view', 'uses' => 'Api\Admin\ChemicalController@view']);

				/* delete */
				Route::delete('{cId}/delete', ['as' => 'admin.chemical.delete', 'uses' => 'Api\Admin\ChemicalController@delete']);

				Route::group(['prefix' => 'category'], function() {
					/* category add */
					Route::post('add', ['as' => 'admin.chemical.category.add', 'uses' => 'Api\Admin\ChemicalController@categoryAdd']);

					/* category lists */
					Route::get('lists', ['as' => 'admin.chemical.category.lists', 'uses' => 'Api\Admin\ChemicalController@categoryLists']);

					/* category update */
					Route::post('{catId}/update', ['as' => 'admin.chemical.category.update', 'uses' => 'Api\Admin\ChemicalController@categoryUpdate']);

					/* category view */
					Route::get('{catId}/view', ['as' => 'admin.chemical.category.view', 'uses' => 'Api\Admin\ChemicalController@categoryView']);

					/* category delete */
					Route::get('{catId}/delete', ['as' => 'admin.chemical.category.delete', 'uses' => 'Api\Admin\ChemicalController@categoryDelete']);
				});

				Route::group(['prefix' => 'ppe'], function() {

					/* ppe add */
					Route::post('add', ['as' => 'admin.chemical.ppe.add', 'uses' => 'Api\Admin\ChemicalController@ppeAdd']);

					/* ppe lists */
					Route::get('lists', ['as' => 'admin.chemical.ppe.lists', 'uses' => 'Api\Admin\ChemicalController@ppeLists']);

					/* ppe update */
					Route::post('{pId}/update', ['as' => 'admin.chemical.ppe.update', 'uses' => 'Api\Admin\ChemicalController@ppeUpdate']);

					/* ppe view */
					Route::get('{pId}/view', ['as' => 'admin.chemical.ppe.view', 'uses' => 'Api\Admin\ChemicalController@ppeView']);

					/* ppe delete */
					Route::get('{pId}/delete', ['as' => 'admin.chemical.ppe.delete', 'uses' => 'Api\Admin\ChemicalController@ppeDelete']);
				});
			});

			Route::group(['prefix' => 'groups'], function()
			{

				/* Search Groups */
				Route::get('/', ['as' => 'groups.search', 'uses' => 'Api\Admin\GroupsController@search']);

				/* Add a Group */
				Route::post('add', ['as' => 'groups.add', 'uses' => 'Api\Admin\GroupsController@addGroup']);

				/* Update a Group */
				Route::post('{gId}/update', ['as' => 'groups.update', 'uses' => 'Api\Admin\GroupsController@updateGroup']);

			});

			Route::group(['prefix' => 'register'], function()
			{

				/* Observations */
				Route::group(['prefix' => 'observations'], function()
				{
					Route::get('/', ['as' => 'register.observations', 'uses' => 'Api\Admin\RegisterController@observations']);
				});

				/* Inspections */
				Route::group(['prefix' => 'inspections'], function()
				{
					Route::get('/', ['as' => 'register.inspections', 'uses' => 'Api\Admin\RegisterController@inspections']);
				});

				/* Corrective Actions */
				Route::group(['prefix' => 'corrective-actions'], function()
				{
					Route::get('/', ['as' => 'register.corrective-actions', 'uses' => 'Api\Admin\RegisterController@correctiveActions']);
				});

                /* Corrective Actions */
                Route::group(['prefix' => 'completed-trainings'], function()
                {
                    Route::get('/', ['as' => 'register.completed-trainings', 'uses' => 'Api\Admin\RegisterController@completedTrainings']);
                });
                
                Route::get('skill-gaps', 'Api\Admin\Company\AnalyticsController@overview');
			});

            /* Client Side */
            Route::group(['prefix' => 'client'], function()
			{

				/* Emergency */
				Route::group(['prefix' => 'emergency'], function() {
					Route::get('categories', ['as' => 'client.emergency.categories', 'uses' => 'Api\Admin\EmergencyController@clientCategories']);
				});

				/* Alerts */
				Route::group(['prefix' => 'alert'], function() {
					Route::get('user/{userId}', ['as' => 'client.alerts', 'uses' => 'Api\Admin\MessageController@clientGetUserAlerts']);
				});

                /* Inspection */
                Route::group(['prefix' => 'inspection'], function()
                {
                    /* Home */
                    Route::get('home', ['as' => 'client.inspection.home', 'uses' => 'Api\Admin\InspectionController@clientHome']);

                    Route::group(['prefix' => '{iId}'], function()
                    {
                        /* Setup */
                        Route::post('setup', ['as' => 'client.inspection.setup', 'uses' => 'Api\Admin\InspectionController@clientSetup']);

						/* Update Inspection Item */
                        Route::post('update-item', ['as' => 'client.inspection.item.update', 'uses' => 'Api\Admin\InspectionController@clientUpdateInspectionItem']);

                        /* View Inspection */
                        Route::get('view', ['as' => 'client.inspection.view', 'uses' => 'Api\Admin\InspectionController@clientViewInspection']);

                        /* Inspection Item */
                        Route::get('item', ['as' => 'client.inspection.item', 'uses' => 'Api\Admin\InspectionController@clientViewItem']);

						/* Summarize Item */
                        Route::post('summary', ['as' => 'client.inspection.summary', 'uses' => 'Api\Admin\InspectionController@clientSummary']);
                    });

                });

				/* Observation */
                Route::group(['prefix' => 'observation'], function()
                {
                    /* Assignments Observation */
                    Route::get('assignments', ['as' => 'client.observation.assignments', 'uses' => 'Api\Admin\ObservationController@clientAssignments']);

                    /* List  Observation */
                    Route::get('list', ['as' => 'client.observation.list', 'uses' => 'Api\Admin\ObservationController@clientList']);

                    /* Start Observation */
                    Route::post('start', ['as' => 'client.observation.start', 'uses' => 'Api\Admin\ObservationController@clientStart']);

					/* Action Observation */
                    Route::post('{oId}/action', ['as' => 'client.observation.action', 'uses' => 'Api\Admin\ObservationController@clientAction']);

					/* Summarize Observation */
                    Route::post('{oId}/summary', ['as' => 'client.observation.summary', 'uses' => 'Api\Admin\ObservationController@clientSummary']);

					/* Verify or closeout Observation */
                    Route::post('{oId}/verify', ['as' => 'client.observation.verify', 'uses' => 'Api\Admin\ObservationController@clientVerify']);

					/* View Observation */
                    Route::get('{oId}/view', ['as' => 'client.observation.view', 'uses' => 'Api\Admin\ObservationController@clientView']);
                });

				/* Chemical */
				Route::group(['prefix' => 'chemical'], function()
				{
					Route::get('assessment', ['as' => 'client.chemical.assessment-data', 'uses' => 'Api\Admin\ChemicalController@clientViewAssessmentData']);

					/* MSDS Libraries */
					Route::get('libraries', ['as' => 'client.chemical.libraries', 'uses' => 'Api\Admin\ChemicalController@libraries']);

					/* get chemical image */
					Route::get('{cId}/image', ['as' => 'client.chemical.image', 'uses' => 'Api\Admin\ChemicalController@clientViewImage']);

					/* perform chemical assessment */
					Route::post('{cId}/assessment', ['as' => 'client.chemical.assessment.update', 'uses' => 'Api\Admin\ChemicalController@clientDoneAssessment']);

					/* perform chemical assessment */
					Route::post('add-group', ['as' => 'client.chemical.groups.add', 'uses' => 'Api\Admin\GroupsController@addGroup']);

					/* get chemical */
					Route::get('{cId}/view', ['as' => 'client.chemical.view', 'uses' => 'Api\Admin\ChemicalController@view']);

					Route::group(['prefix' => 'group/{gId}'], function()
					{
						/* Get chemicals by group */
						Route::get('list', ['as' => 'client.chemical.group.list', 'uses' => 'Api\Admin\ChemicalController@clientViewGroupChemicals']);
					});
				});

				/* Resources */
				Route::group(['prefix' => 'resource'], function()
				{
					/* categories */
					Route::get('categories', ['as' => 'client.categories', 'uses' => 'Api\Admin\ResourcesController@categories']);
				});


                /* greenhat */
                Route::group(['prefix' => 'greenhat'], function()
                {
                    Route::post('feedback/save', ['as' => 'client.greenhat.feedback.save', 'uses' => 'Api\Admin\GreenhatController@saveFeedback']);
                    Route::post('feedback/check', ['as' => 'client.greenhat.feedback.check', 'uses' => 'Api\Admin\GreenhatController@checkUserFeedback']);

                });

            });


            /* Initialize data for dashboard */
            Route::get('init', ['as' => 'admin.company.init', 'uses' => 'Api\Admin\CompanyController@init']);

            /* View Company */
            Route::get('view', ['as' => 'admin.company.view', 'uses' => 'Api\Admin\CompanyController@view']);

            /* Project */
            Route::group(['prefix' => 'project'], function() {

				/* project lists */
                Route::get('lists', ['as' => 'admin.company.project.lists', 'uses' => 'Api\Admin\ProjectController@lists']);

                /* project add */
                Route::post('add', ['as' => 'admin.company.project.add', 'uses' => 'Api\Admin\ProjectController@add']);

                /* project view */
                Route::get('pId}/view', ['as' => 'admin.company.project.view', 'uses' => 'Api\Admin\ProjectController@view']);

				/* project update */
                Route::post('{pId}/update', ['as' => 'admin.company.project.update', 'uses' => 'Api\Admin\ProjectController@update']);

            });

            /* Employee */
            Route::group(['prefix' => 'employee'], function() {

                Route::get('{eId}/roles', 'Api\Admin\Employee\RolesController@index');
                Route::post('{eId}/roles', 'Api\Admin\Employee\RolesController@attach');
                Route::delete('{eId}/roles/{roleId}', 'Api\Admin\Employee\RolesController@detach');

                Route::get('{eId}/roles/{roleId}/skills', 'Api\Admin\Employee\SkillsController@index');
                Route::post('{eId}/roles/{roleId}/skills', 'Api\Admin\Employee\SkillsController@attach');

                /* employee lists */
                Route::get('lists', ['as' => 'admin.company.employee.lists', 'uses' => 'Api\Admin\EmployeeController@lists']);

                /* employee search */
                Route::post('search', ['as' => 'admin.company.employee.search', 'uses' => 'Api\Admin\EmployeeController@search']);

				/* employee search with pagination */
                Route::post('searchPagination', ['as' => 'admin.company.employee.search.paginate', 'uses' => 'Api\Admin\EmployeeController@searchPagination']);

                /* employee add */
                Route::post('add', ['as' => 'admin.company.employee.add', 'uses' => 'Api\Admin\EmployeeController@add']);

                /* employee update */
                Route::post('{eId}/update', ['as' => 'admin.company.employee.update', 'uses' => 'Api\Admin\EmployeeController@update']);

                /* employee profile update */
                Route::post('{eId}/profile/update', ['as' => 'admin.company.employee.profile.update', 'uses' => 'Api\Admin\EmployeeController@updateProfile']);

                /* employee view */
                Route::get('{eId}/view', ['as' => 'admin.company.employee.view', 'uses' => 'Api\Admin\EmployeeController@view']);

                /* employee completed inductions */
                Route::get('{eId}/completed-inductions', ['as' => 'admin.company.employee.completed-inductions', 'uses' => 'Api\Admin\EmployeeController@viewEmployeeCompletedInductions']);

                /* employee docs */
                Route::get('{eId}/docs', ['as' => 'admin.company.employee.docs', 'uses' => 'Api\Admin\EmployeeController@docs']);

                /* employee login details */
                Route::get('{eId}/login-details', ['as' => 'admin.company.employee.logindetails', 'uses' => 'Api\Admin\EmployeeController@loginDetails']);

                /* employee upload docs */
                Route::post('{eId}/docs', ['as' => 'admin.company.employee.docs.upload', 'uses' => 'Api\Admin\EmployeeController@uploadDocs']);

                /* employee upload doc */
                Route::post('{eId}/uploaddoc', ['as' => 'admin.company.employee.doc.upload', 'uses' => 'Api\Admin\EmployeeController@uploadDoc']);

				/* employee send login details */
                Route::post('{eId}/send-details', ['as' => 'admin.company.employee.send.login-details', 'uses' => 'Api\Admin\EmployeeController@sendLoginDetails']);

				/* employee make admin */
                Route::post('{eId}/update-admin', ['as' => 'admin.company.employee.make-admin', 'uses' => 'Api\Admin\EmployeeController@updateAdmin']);

                /* employee logs */
                Route::get('{eId}/logs', ['as' => 'admin.company.employee.logs', 'uses' => 'Api\Admin\EmployeeController@logs']);
            });

            /* Inductions */
            Route::group(['prefix' => 'induction'], function() {

                /* Induction Group */
                Route::group(['prefix' => 'group'], function()
                {
                    /* add */
                    Route::post('add', ['as' => 'admin.company.induction.group.add', 'uses' => 'Api\Admin\InductionController@addGroup']);

                    /* lists */
                    Route::get('lists', ['as' => 'admin.company.induction.group.lists', 'uses' => 'Api\Admin\InductionController@listsGroup']);

                    /* view */
                    Route::get('{gId}/view', ['as' => 'admin.company.induction.group.view', 'uses' => 'Api\Admin\InductionController@viewGroup']);

                    /* update */
                    Route::post('{gId}/update', ['as' => 'admin.company.induction.group.update', 'uses' => 'Api\Admin\InductionController@updateGroup']);

                    /* delete */
                    Route::post('{gId}/delete', ['as' => 'admin.company.induction.group.delete', 'uses' => 'Api\Admin\InductionController@deleteGroup']);
                });

                /* Induction Add */
                Route::post('add', ['as' => 'admin.company.induction.add', 'uses' => 'Api\Admin\InductionController@add']);

                /* Inductee Lists */
                Route::get('inductees', ['as' => 'admin.company.induction.inductees', 'uses' => 'Api\Admin\InductionController@inductees']);

                /* Inductee Search */
                Route::get('search-inductees', ['as' => 'admin.company.induction.inductee.search', 'uses' => 'Api\Admin\InductionController@searchInductees']);

                /* Induction Lists */
                Route::get('lists', ['as' => 'admin.company.induction.lists', 'uses' => 'Api\Admin\InductionController@lists']);

                /* Induction Lists and User Completed Inductions */
                Route::get('client-list', ['as' => 'admin.company.induction.lists', 'uses' => 'Api\Admin\InductionController@clientCategories']);

                /* Induction View */
                Route::get('{iId}/view', ['as' => 'admin.company.induction.view', 'uses' => 'Api\Admin\InductionController@view']);

                /* Induction Update */
                Route::post('{iId}/update', ['as' => 'admin.company.induction.update', 'uses' => 'Api\Admin\InductionController@update']);

                /* Induction Delete */
                Route::delete('{iId}/delete', ['as' => 'admin.company.induction.view', 'uses' => 'Api\Admin\InductionController@delete']);

                /* to complete a video questions from client */
                Route::post('{iId}/complete', ['as' => 'admin.company.induction.complete', 'uses' => 'Api\Admin\InductionController@completeVideo']);
            });

            /* Safety Videos */
            Route::group(['prefix' => 'safety-video'], function() {
                Route::get('lists', ['as' => 'admin.company.safety-video.lists', 'uses' => 'Api\Admin\SafetyVideoController@lists']);
                Route::post('add', ['as' => 'admin.company.safety-video.add', 'uses' => 'Api\Admin\SafetyVideoController@add']);

                Route::group(['prefix' => '{sId}'], function()
                {
					Route::delete('/', ['as' => 'admin.company.safety-video.delete', 'uses' => 'Api\Admin\SafetyVideoController@delete']);
                    Route::get('view', ['as' => 'admin.company.safety-video.view', 'uses' => 'Api\Admin\SafetyVideoController@view']);
                    Route::post('add-question', ['as' => 'admin.company.safety-video.question.add', 'uses' => 'Api\Admin\SafetyVideoController@addQuestion']);
                    Route::post('update', ['as' => 'admin.company.safety-video.update', 'uses' => 'Api\Admin\SafetyVideoController@update']);
                    /* to complete a video questions from client */
                    Route::post('complete', ['as' => 'admin.company.safety-video.complete', 'uses' => 'Api\Admin\SafetyVideoController@completeVideo']);
                    Route::group(['prefix' => 'question'],function() {
                        Route::get('lists', ['as' => 'admin.company.safety-video.question.lists', 'uses' => 'Api\Admin\SafetyVideoController@questions']);
                        Route::post('{qId}/delete', ['as' => 'admin.company.safety-video.question.delete', 'uses' => 'Api\Admin\SafetyVideoController@deleteQuestion']);
                    });
                });
            });

			/* Golden Rule */
			Route::group(['prefix' => 'golden-rule'], function() {
				Route::get('/lists', ['as' => 'admin.company.ohs.golden-rule.list', 'uses' => 'Api\Admin\GoldenRuleController@lists']);
				Route::post('/add', ['as' => 'admin.company.ohs.golden-rule.add', 'uses' => 'Api\Admin\GoldenRuleController@add']);
				Route::post('{gId}/update', ['as' => 'admin.company.ohs.golden-rule.update', 'uses' => 'Api\Admin\GoldenRuleController@update']);
			});

            /* Inspections */
            Route::group(['prefix' => 'inspection'], function() {

                /* Inspection Categories */
                Route::get('categories', ['as' => 'admin.company.inspection.categories', 'uses' => 'Api\Admin\InspectionController@getCategories']);

                /* Item Category */
                Route::group(['prefix' => 'item-category'], function()
                {
                    /* add */
                    Route::post('add', ['as' => 'admin.company.inspection.item.category.add', 'uses' => 'Api\Admin\InspectionController@itemCategoryAdd']);

                    /* lists */
                    Route::get('lists', ['as' => 'admin.company.inspection.item.category.lists', 'uses' => 'Api\Admin\InspectionController@itemCategoryList']);

                    /* view */
                    Route::get('{itemId}/view', ['as' => 'admin.company.inspection.item.category.view', 'uses' => 'Api\Admin\InspectionController@itemCategoryView']);

                    /* update */
                    Route::post('{itemId}/update', ['as' => 'admin.company.inspection.item.category.update', 'uses' => 'Api\Admin\InspectionController@itemCategoryUpdate']);

                    /* delete */
                    Route::delete('{itemId}/delete', ['as' => 'admin.company.inspection.item.category.delete', 'uses' => 'Api\Admin\InspectionController@itemCategoryDelete']);
                });

                /* Category */
                Route::group(['prefix' => 'category'], function()
                {
                    /* add */
                    Route::post('add', ['as' => 'admin.company.inspection.category.add', 'uses' => 'Api\Admin\InspectionController@categoryAdd']);

                    /* lists */
                    Route::get('lists', ['as' => 'admin.company.inspection.category.lists', 'uses' => 'Api\Admin\InspectionController@categoryLists']);

                    /* view */
                    Route::get('{cId}/view', ['as' => 'admin.company.inspection.category.view', 'uses' => 'Api\Admin\InspectionController@categoryView']);

                    /* update */
                    Route::post('{cId}/update', ['as' => 'admin.company.inspection.category.update', 'uses' => 'Api\Admin\InspectionController@categoryUpdate']);

                    /* delete */
                    Route::delete('{cId}/delete', ['as' => 'admin.company.inspection.category.delete', 'uses' => 'Api\Admin\InspectionController@categoryDelete']);
                });

                /* Inspection Lists */
                Route::get('lists', ['as' => 'admin.company.inspection.lists', 'uses' => 'Api\Admin\InspectionController@lists']);

                /* Inspection Add */
                Route::post('add', ['as' => 'admin.company.inspection.add', 'uses' => 'Api\Admin\InspectionController@add']);

                Route::group(['prefix' => '{iId}'], function()
                {
                    Route::post('item/add', ['as' => 'admin.company.inspection.item.add', 'uses' => 'Api\Admin\InspectionController@addItem']);

					Route::get('item/{itemId}/view', ['as' => 'admin.company.inspection.item.add', 'uses' => 'Api\Admin\InspectionController@viewItem']);

					Route::post('item/{itemId}/update', ['as' => 'admin.company.inspection.item.update', 'uses' => 'Api\Admin\InspectionController@updateItem']);

					Route::post('item/{itemId}/delete', ['as' => 'admin.company.inspection.item.delete', 'uses' => 'Api\Admin\InspectionController@deleteItem']);

                    Route::get('view', ['as' => 'admin.company.inspection.view', 'uses' => 'Api\Admin\InspectionController@view']);

					Route::post('delete', ['as' => 'admin.company.inspection.delete', 'uses' => 'Api\Admin\InspectionController@delete']);

                    Route::post('update', ['as' => 'admin.company.inspection.update', 'uses' => 'Api\Admin\InspectionController@update']);
                });

            });

            /* Roles */
            Route::group(['prefix' => 'roles'], function() {
                // Roles routes
                Route::get('/', 'Api\Admin\Company\RolesController@index');
                Route::post('/', 'Api\Admin\Company\RolesController@store');
                Route::get('/{role}', 'Api\Admin\Company\RolesController@show');
                Route::post('/{role}', 'Api\Admin\Company\RolesController@update');
                Route::delete('/{role}', 'Api\Admin\Company\RolesController@destroy');

                // Skills routes
                Route::get('/{role}/skills', 'Api\Admin\Company\SkillsController@index');
                Route::delete('/{role}/skills/{skill}', 'Api\Admin\Company\SkillsController@destroy');
                Route::post('/{role}/skills', 'Api\Admin\Company\SkillsController@store');
            });

            /* Skill Requirements */
            Route::group(['prefix' => 'skill'], function() {

                /* Lists */
                Route::get('lists', ['as' => 'admin.company.skill.lists', 'uses' => 'Api\Admin\SkillsController@lists']);

                /* Add */
                Route::post('add', ['as' => 'admin.company.skill.add', 'uses' => 'Api\Admin\SkillsController@add']);

                /* Skill with ID */
                Route::group(['prefix' => '{sId}'], function()
                {

                    /* View Skill */
                    Route::get('view', ['as' => 'admin.company.skill.view', 'uses' => 'Api\Admin\SkillsController@view']);

                    /* Update Skill */
                    Route::post('update', ['as' => 'admin.company.skill.update', 'uses' => 'Api\Admin\SkillsController@update']);

                    /* Skill Item */
                    Route::group(['prefix' => 'item'], function() {

                        /* Add Item */
                        Route::post('add', ['as' => 'admin.company.skill.item.add', 'uses' => 'Api\Admin\SkillsController@addItem']);

                        /* View Item */
                        Route::get('{itemId}/view', ['as' => 'admin.company.skill.item.view', 'uses' => 'Api\Admin\SkillsController@viewItem']);

                        /* Update Item */
                        Route::post('{itemId}/update', ['as' => 'admin.company.skill.item.update', 'uses' => 'Api\Admin\SkillsController@updateItem']);

                        /* Delete Item */
                        Route::delete('{itemId}/delete', ['as' => 'admin.company.skill.item.delete', 'uses' => 'Api\Admin\SkillsController@deleteItem']);
                    });
                });
            });

            /* Sub-contractor */
            Route::group(['prefix' => 'subcontractor'], function() {

                //add
                Route::post('add',['as' => 'admin.company.subcontractor.add', 'uses' => 'Api\Admin\SubcontractorController@add']);

                //lists
                Route::get('lists',['as' => 'admin.company.subcontractor.lists', 'uses' => 'Api\Admin\SubcontractorController@lists']);

                //search
                Route::post('search',['as' => 'admin.company.subcontractor.search', 'uses' => 'Api\Admin\SubcontractorController@search']);

                //add logo
                Route::post('add/logo',['as' => 'admin.company.subcontractor.add.logo', 'uses' => 'Api\Admin\SubcontractorController@addLogo']);

                //add document
                Route::post('add/document',['as' => 'admin.company.subcontractor.add.document', 'uses' => 'Api\Admin\SubcontractorController@addDocument']);

                //update
                Route::post('{sId}/update',['as' => 'admin.company.subcontractor.update', 'uses' => 'Api\Admin\SubcontractorController@update']);

                //upload docs
                Route::post('{sId}/docs',['as' => 'admin.company.subcontractor.upload.docs', 'uses' => 'Api\Admin\SubcontractorController@uploadDocs']);

                //delete
                Route::delete('{sId}/delete',['as' => 'admin.company.subcontractor.delete', 'uses' => 'Api\Admin\SubcontractorController@delete']);

                //delete
                Route::get('{sId}/view',['as' => 'admin.company.subcontractor.view', 'uses' => 'Api\Admin\SubcontractorController@view']);
            });
            
            /* observation */
            Route::group(['prefix' => 'observation'], function() {

                /* add */
                Route::post('add',['as' => 'admin.observation.add', 'uses' => 'Api\Admin\ObservationController@add']);

                /* lists */
                Route::get('lists',['as' => 'admin.observation.add', 'uses' => 'Api\Admin\ObservationController@lists']);

				/* view */
				Route::get('/{oId}/view',['as' => 'admin.observation.view', 'uses' => 'Api\Admin\ObservationController@view']);

				Route::post('/{oId}/update',['as' => 'admin.observation.view', 'uses' => 'Api\Admin\ObservationController@update']);
            });

            /* Emergency */
            Route::group(['prefix' => 'emergency'], function() {

				/* Add Emergency */
                Route::post('add',['as' => 'admin.company.emergency.add', 'uses' => 'Api\Admin\EmergencyController@add']);

                /* Assign Employee */
                Route::post('assign',['as' => 'admin.company.emergency.assign', 'uses' => 'Api\Admin\EmergencyController@assign']);

                /* Employee Lists */
                Route::get('lists',['as' => 'admin.company.emergency.lists', 'uses' => 'Api\Admin\EmergencyController@lists']);

                /* Employee View */
                Route::get('{eId}/view',['as' => 'admin.company.emergency.view', 'uses' => 'Api\Admin\EmergencyController@view']);

				/* Responder Update */
                Route::post('{eId}/update',['as' => 'admin.company.emergency.update', 'uses' => 'Api\Admin\EmergencyController@update']);

                /* Employee Delete */
                Route::get('{eId}/delete',['as' => 'admin.company.emergency.delete', 'uses' => 'Api\Admin\EmergencyController@delete']);

				/* Update Emergency */
                Route::post('update',['as' => 'admin.company.emergency.update', 'uses' => 'Api\Admin\EmergencyController@update']);

            });

			/* Resources */
			Route::group(['prefix' => 'resource'], function() {

				/* Categories */
                Route::get('categories',['as' => 'admin.company.resources.categories', 'uses' => 'Api\Admin\ResourcesController@categories']);

				/* Add */
                Route::post('add',['as' => 'admin.company.resources.add', 'uses' => 'Api\Admin\ResourcesController@add']);

				/* View */
				Route::get('{rId}/view',['as' => 'admin.company.resources.view', 'uses' => 'Api\Admin\ResourcesController@add']);

				/* Update */
				Route::post('{rId}/update',['as' => 'admin.company.resources.update', 'uses' => 'Api\Admin\ResourcesController@update']);

				/* Delete */
				Route::post('{rId}/delete',['as' => 'admin.company.resources.delete', 'uses' => 'Api\Admin\ResourcesController@delete']);

            });

			/* Messaging */
            Route::group(['prefix' => 'message'], function()
			{
                /* send */
                Route::post('send',['as' => 'admin.message.send', 'uses' => 'Api\Admin\MessageController@send']);
                Route::get('{type}/history',['as' => 'admin.message.history', 'uses' => 'Api\Admin\MessageController@history']);
                Route::get('{mId}/view',['as' => 'admin.message.view', 'uses' => 'Api\Admin\MessageController@view']);


                Route::post('group-recipient/add',['as' => 'admin.message.add.groupRecipient', 'uses' => 'Api\Admin\MessageGroupRecipientController@add']);
                Route::get('group-recipient/lists',['as' => 'admin.message.lists.groupRecipient', 'uses' => 'Api\Admin\MessageGroupRecipientController@lists']);
                Route::get('group-recipient/{recipientId}/delete',['as' => 'admin.message.delete.groupRecipient', 'uses' => 'Api\Admin\MessageGroupRecipientController@delete']);
            });
        });
    });

    /*greenhat api routes*/

    Route::group(['prefix' => 'admin'], function() {
        Route::get('greenhat-dropdowns', ['uses' => 'Api\Admin\GreenhatController@getDropdowns']);

        Route::get('get-greenhat-data/{user_id}/{com_id}', 'Api\Admin\GreenhatController@getGreenhatData');

        Route::post('send-kickoff', 'Api\Admin\GreenhatController@sendKickOff');

        Route::post('greenhat/program/save', ['as' => 'admin.greenhat.program.save', 'uses' => 'Api\Admin\GreenhatController@saveProgram']);

        Route::get('user/{id}/get-notifications', ['as' => 'user.notifications', 'uses' => 'Api\Admin\NotificationController@getNotifications']);

        Route::get('user/{id}/employee/{employee_id}/check-notification/{department}', 'Api\Admin\GreenhatController@checkNotification');

        Route::get('check-feedback/{employee}/{id}/{department}', 'Api\Admin\GreenhatController@checkFeedback');

        Route::post('greenhat/feedback/save', 'Api\Admin\GreenhatController@saveFeedback');

        Route::get('greenhat/corrective-actions', 'Api\Admin\GreenhatController@getCorrectiveActions');

        Route::get('greenhat/registered', 'Api\Admin\GreenhatController@getRegistered');

        Route::get('greenhat/program/employee/{emp_id}/reviews', 'Api\Admin\GreenhatController@getProgramReviews');

    });
});
