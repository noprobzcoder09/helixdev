<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js" ng-app="app" ng-controller="AppController">
<head>
    <title>{{ env('APP_NAME') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">

    <link href="{{ mix('css/all.css') }}" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.css" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/media.css') }}" rel="stylesheet">

    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>

    <script src="{{ mix('js/core.js') }}"></script> 
    <script src="{{ mix('js/plugins.js') }}"></script>
    <script src="{{ mix('js/main.js') }}"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular-cookies.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js"></script>

    <script src="/angular/script.js"></script>
</head>
<body>
    <div class="main-container">
        <ui-view></ui-view>
    </div>
	<script src="/angular/controllers/MainController.js"></script>
	<script src="/angular/controllers/AppController.js"></script>
    <script src="/angular/controllers/CompanyController.js"></script>
    <script src="/angular/controllers/LoginController.js"></script>
    <script src="/angular/services/Auth.js"></script>
	<script src="/angular/services/GlobalService.js"></script>
</body>
</html>