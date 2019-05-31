<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', ['as' => 'client', 'uses' => function() {
  return redirect('admin');
}]);*/

Route::get('/', ['as' => 'client', 'uses' => 'PageController@index']);

Route::get('admin/', ['as' => 'admin', 'uses' => 'PageController@admin']);
Route::get('helixadmin/', 'PageController@helix');
Route::get('images/subcon/docs/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/subcon/docs/' . $id . '/' .  $filename;

    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/subcon/logo/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/subcon/logo/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/employee/avatar/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/users/avatar/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/employee/docs/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/employee/docs/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/companies/logo/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/companies/logo/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/observation/images/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/observation/images/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/inspection/images/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/inspection_items/images/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/chemical/images/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/chemical/images/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/chemical/msds/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/chemical/msds/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/resources/attachments/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/resources/attachments/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('images/alert_contents/attachment/{id}/{filename}', function($id, $filename) {
    $imagePath = storage_path() . '/app/public/alert_contents/attachment/' . $id . '/' .  $filename;
    if(!File::exists($imagePath)) {
        //Not have file do something here
    };

    $file = File::get($imagePath);
    $type = File::mimeType($imagePath);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
Route::get('pdf/video-complete/{id}', 'PdfController@videoComplete');
Route::get('pdf/induction-complete/{id}', 'PdfController@inductionComplete');

// First route that user visits on consumer app
Route::get('/redirect', function () {
    // Build the query parameter string to pass auth information to our request
    $query = http_build_query([
        'client_id' => '4',
        'redirect_uri' => 'http://www.helix.dev/callback',
        'response_type' => 'code',
        'scope' => ''
    ]);

    // Redirect the user to the OAuth authorization page
    return redirect('http://www.helix.dev/oauth/authorize?' . $query);

});

Route::get('/callback', function (Illuminate\Http\Request $request) {
    $http = new \GuzzleHttp\Client;

    $response = $http->post('http://www.helix.dev/oauth/token', [
        'form_params' => [
            'client_id' => '4',
            'client_secret' => 'LUg09jh7FDWtR9kNeQqmYt4MGZK3XHq49caE7fEJ',
            'grant_type' => 'authorization_code',
            'redirect_uri' => 'http://client.local/callback',
            'code' => $request->code,
        ],
    ]);
    return json_decode((string) $response->getBody(), true);
});

Route::group(['prefix' => sprintf('portal/v1'), 'as' => 'portal::'], function(){
	Route::get('/dashboard', function () {
	    return view('portal.all');
	});

    Route::get('/subcon', function () {
        return view('portal.sub-contractors.sub-con');
    });
    Route::get('/subcon/add', function () {
        return view('portal.sub-contractors.add');
    });
    Route::get('/subcon/view', function () {
        return view('portal.sub-contractors.details');
    });

    Route::get('/hr', function () {
        return view('portal.hr.all');
    });
    Route::get('/hr/workforce-management', function () {
        return view('portal.hr.workforce-management');
    });
    Route::get('/hr/induction', function () {
        return view('portal.hr.inductions.all');
    });
    Route::get('/hr/induction/list', function () {
        return view('portal.hr.inductions.induction_list');
    });
    Route::get('/hr/induction/add', function () {
        return view('portal.hr.inductions.add');
    });
    Route::get('/hr/onboarding/add', function () {
        return view('portal.hr.onboarding.add');
    });
    Route::get('/hr/onboarding/summary', function () {
        return view('portal.hr.onboarding.summary');
    });
    Route::get('/hr/open-worker/view', function () {
        return view('portal.hr.open-worker.view');
    });
    Route::get('/hr/open-worker/update', function () {
        return view('portal.hr.open-worker.update');
    });
    Route::get('/hr/open-worker/login', function () {
        return view('portal.hr.open-worker.login');
    });
    Route::get('/hr/open-worker/user', function () {
        return view('portal.hr.open-worker.user');
    });

    Route::get('/ohs', function () {
        return view('portal.ohs.all');
    });
    Route::get('/ohs/videos', function () {
        return view('portal.ohs.videos');
    });
    Route::get('/ohs/videos/add', function () {
        return view('portal.ohs.add');
    });
    Route::get('/ohs/videos/view', function () {
        return view('portal.ohs.view');
    });
    Route::get('/ohs/videos/edit', function () {
        return view('portal.ohs.edit');
    });
    Route::get('/ohs/inspections', function () {
        return view('portal.ohs.inspections.home');
    });
    Route::get('/ohs/inspections/site-inspection', function () {
        return view('portal.ohs.inspections.new');
    });
    Route::get('/ohs/inspections/site-inspection/summary', function () {
        return view('portal.ohs.inspections.summary');
    });
    Route::get('/ohs/observations/', function () {
        return view('portal.ohs.observations.home');
    });
    Route::get('/ohs/observations/open', function () {
        return view('portal.ohs.observations.open');
    });
    Route::get('/ohs/observations/entry', function () {
        return view('portal.ohs.observations.entry');
    });
    Route::get('/ohs/inspections/register', function () {
        return view('portal.ohs.inspections.register');
    });
    Route::get('/ohs/inspections/register/open', function () {
        return view('portal.ohs.inspections.register-open');
    });
    Route::get('/ohs/inspections/register/entry', function () {
        return view('portal.ohs.inspections.entry');
    });
    Route::get('/ohs/messaging', function () {
        return view('portal.ohs.messaging.home');
    });
    Route::get('/ohs/messaging/preview', function () {
        return view('portal.ohs.messaging.preview');
    });
    Route::get('/ohs/messaging/history', function () {
        return view('portal.ohs.messaging.history');
    });
    Route::get('/ohs/messaging/recipients', function () {
        return view('portal.ohs.messaging.recipients');
    });
    Route::get('/ohs/alerts', function () {
        return view('portal.ohs.alerts.home');
    });
    Route::get('/ohs/alerts/preview', function () {
        return view('portal.ohs.alerts.preview');
    });
    Route::get('/ohs/alerts/history', function () {
        return view('portal.ohs.alerts.history');
    });
    Route::get('/ohs/alerts/recipients', function () {
        return view('portal.ohs.alerts.recipients');
    });
    Route::get('/ohs/chemicals', function () {
        return view('portal.ohs.chemicals.home');
    });
    Route::get('/ohs/chemicals/add', function () {
        return view('portal.ohs.chemicals.add');
    });
    Route::get('/ohs/chemicals/open', function () {
        return view('portal.ohs.chemicals.view');
    });
    Route::get('/ohs/chemicals/assessment', function () {
        return view('portal.ohs.chemicals.assessment-list');
    });
    Route::get('/ohs/chemicals/assessment/open', function () {
        return view('portal.ohs.chemicals.assessment-open');
    });
    Route::get('/ohs/corrective-actions', function () {
        return view('portal.ohs.corrective-actions.home');
    });
    Route::get('/ohs/erp', function () {
        return view('portal.ohs.erp.home');
    });
    Route::get('/ohs/golden-rules', function () {
        return view('portal.ohs.golden-rules.home');
    });

    Route::get('/admin', function () {
        return view('portal.admin.home');
    });
    Route::get('/admin/projects', function () {
        return view('portal.admin.projects');
    });
    Route::get('/admin/crews', function () {
        return view('portal.admin.crews');
    });
    Route::get('/admin/crews/open', function () {
        return view('portal.admin.crews-open');
    });
    Route::get('/admin/resources', function () {
        return view('portal.admin.resources');
    });
    Route::get('/ohs/online-training', function () {
        return view('portal.ohs.online-training.home');
    });
});

Route::group(['prefix' => sprintf('admin/v1'), 'as' => 'admin::'], function(){
    Route::get('/companies', function () {
        return view('admin.companies.all');
    });

    Route::get('/companies/add', function () {
        return view('admin.companies.add');
    });
});

Route::group(['prefix' => sprintf('password')], function() {
    Route::get('request', ['as' => 'password.request.view', 'uses' => 'PageController@passwordRequest']);
    Route::post('request', ['as' => 'password.request.post', 'uses' =>'PageController@passwordPostRequest']);
    Route::get('change', ['as' => 'password.change.view', 'uses' => 'PageController@passwordChange']);
    Route::post('change', ['as' => 'password.change.post', 'uses' => 'PageController@passwordPostChange']);
});

Route::group(['prefix' => sprintf('client/v1'), 'as' => 'admin::'], function(){
    Route::get('/home', function () {
        return view('client.home');
    });
    Route::get('/emergency', function () {
        return view('client.emergency.emergency');
    });

    Route::get('/safety-videos/certificate', function () {
        $pdf = App::make('dompdf.wrapper');
        $pdf->loadHTML('<h1>Neal</h1>');
        return $pdf->stream();
    });

    Route::get('/safety-videos', function () {
        return view('client.safety-videos.safety-videos');
    });

    Route::get('/safety-videos/video', function () {
        return view('client.safety-videos.video');
    });
    Route::get('/safety-videos/video/questions', function () {
        return view('client.safety-videos.questions');
    });
    Route::get('/safety-videos/video/summary', function () {
        return view('client.safety-videos.summary');
    });
    Route::get('/inductions', function () {
        return view('client.induction.home');
    });
    Route::get('/inductions/video', function () {
        return view('client.induction.video');
    });
    Route::get('/inductions/video/questions', function () {
        return view('client.induction.questions');
    });
    Route::get('/inductions/video/summary', function () {
        return view('client.induction.summary');
    });
    Route::get('/inspections', function () {
        return view('client.inspection.home');
    });
    Route::get('/inspections/setup', function () {
        return view('client.inspection.setup');
    });
    Route::get('/inspections/entry', function () {
        return view('client.inspection.entry');
    });
    Route::get('/inspections/summary', function () {
        return view('client.inspection.summary');
    });
    Route::get('/inspections/closeout', function () {
        return view('client.inspection.closeout');
    });
    Route::get('/observations', function () {
        return view('client.observations.home');
    });
    Route::get('/observations/page', function () {
        return view('client.observations.observations');
    });
    Route::get('/observations/action', function () {
        return view('client.observations.action');
    });
    Route::get('/observations/summary', function () {
        return view('client.observations.summary');
    });
    Route::get('/', function () {
        return view('client.resources.home');
    });
    Route::get('/alerts', function () {
        return view('client.alerts.home');
    });
    Route::get('/user', function () {
        return view('client.user.profile');
    });
    Route::get('/chemicals', function () {
        return view('client.chemicals.home');
    });
    Route::get('/chemicals/management', function () {
        return view('client.chemicals.management');
    });
    Route::get('/chemicals/library', function () {
        return view('client.chemicals.library');
    });
    Route::get('/risk-assessment', function () {
        return view('client.risk-assessment.risk1');
    });
    Route::get('/risk-assessment/2', function () {
        return view('client.risk-assessment.risk2');
    });
    Route::get('/risk-assessment/3', function () {
        return view('client.risk-assessment.risk3');
    });
    Route::get('/risk-assessment/4', function () {
        return view('client.risk-assessment.risk4');
    });
    Route::get('/risk-assessment/5', function () {
        return view('client.risk-assessment.risk5');
    });
    Route::get('/risk-assessment/6', function () {
        return view('client.risk-assessment.risk6');
    });
    Route::get('/risk-assessment/open', function () {
        return view('client.risk-assessment.open');
    });
});

//for export routes
Route::group(['prefix' => 'export'], function() {

    Route::group(['prefix' => 'company/{id}/'], function() {

        Route::group(['prefix' => 'csv'], function() {

            Route::get('observation',[
                'as' => 'admin.observation.export',
                'uses' => 'Api\Admin\ObservationController@export'
            ]);
            
            Route::get('subcontractor',[
                'as' => 'admin.subcontractor.export',
                'uses' => 'Api\Admin\SubcontractorController@export'
            ]);

            Route::get('inspection',[
                'as' => 'admin.inspection.export',
                'uses' => 'Api\Admin\InspectionController@export'
            ]);

            Route::get('skillsgap-by-employee',[
                'as' => 'admin.skillsgap.exportByEmployee',
                'uses' => 'Api\Admin\Company\AnalyticsController@exportByEmployee'
            ]);

            Route::get('skillsgap-by-month',[
                'as' => 'admin.skillsgap.exportByMonth',
                'uses' => 'Api\Admin\Company\AnalyticsController@exportByMonth'
            ]);

            Route::get('corrective-actions',[
                'as' => 'admin.corrective-actions.export',
                'uses' => 'Api\Admin\Company\RegisterController@correctActionExport'
            ]);
        });
    });
});

Route::get('/test', function () {
    return view('test.test');
});
Route::get('/test/google', function () {
    return view('test.test_google');
});
