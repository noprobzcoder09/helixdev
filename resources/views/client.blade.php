<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js" ng-app="app" ng-controller="AppController">
    <head>
        <title>{{ env('APP_NAME') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
        <link href="{{ mix('css/all.css') }}" rel="stylesheet">
        <link href="{{ mix('css/client.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.css">
        <script>
            window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token(),]); ?>
        </script>


        <style>
            .loader {
                padding-left: 20%;
                padding-top: 40%;
            }
        </style>
    </head>
    <body class="@{{ (bgLogin) ? 'b-login' : '' }}">
        <div class="main-container @{{ (bgLogin) ? 'bg-login' : '' }}" >
            <ui-view></ui-view>
        </div>

        <script src="{{ mix('js/core.js') }}"></script>
        <script src="{{ mix('js/plugins.js') }}"></script>
        <script src="{{ mix('js/client.js') }}"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js"></script>
        <script src="/js/jquery-embedly.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-animate.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-aria.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-messages.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW-e0vqOviHNtQX2KE7uTo2fCH6wtc18A"></script>

        <script type="text/javascript">
            var App = {url: '{{url("/")}}'};
        </script>

        <script src="/angular/client-script.js"></script>

        <script src="/angular/client-controllers/AppController.js"></script>
        <script src="/angular/client-controllers/LoginController.js"></script>
        <script src="/angular/client-controllers/MainController.js"></script>
        <script src="/angular/client-controllers/SafetyVideosController.js"></script>
        <script src="/angular/client-controllers/InductionsController.js"></script>
        <script src="/angular/client-controllers/InspectionsController.js"></script>
        <script src="/angular/client-controllers/ObservationsController.js"></script>
        <script src="/angular/client-controllers/ResourcesController.js"></script>
        <script src="/angular/client-controllers/AlertsController.js"></script>
        <script src="/angular/client-controllers/ChemicalsController.js"></script>
        <script src="/angular/client-controllers/ErpController.js"></script>
        <script src="/angular/client-controllers/WorkforceController.js"></script>
        <script src="/angular/client-controllers/GreenhatController.js"></script>

        <script src="/angular/client-services/greenhat.service.js"></script>
        <script src="/angular/client-services/auth.service.js"></script>
        <script src="/angular/client-services/alert.service.js"></script>
        <script src="/angular/client-services/safety-video.service.js"></script>
        <script src="/angular/client-services/induction.service.js"></script>
        <script src="/angular/client-services/inspection.service.js"></script>
        <script src="/angular/client-services/observation.service.js"></script>
        <script src="/angular/client-services/group.service.js"></script>

        <script src="/angular/client-services/global.service.js"></script>
        <script src="/angular/client-services/employee.service.js"></script>
        <script src="/angular/client-services/chemical.service.js"></script>
        <script src="/angular/client-services/alert.service.js"></script>
        <script src="/angular/client-services/erp.service.js"></script>
        <script src="/angular/client-services/resource.service.js"></script>

        <script src="/angular/modules/angular-selectize.js"></script>

        <script type="text/javascript">
            (function( $ ) {
                $(document).ready(function() {

                    $(document).on('focus', '.formClient input', function(){
                        $(this).next().addClass('input-filled');
                    }).on('blur', '.formClient input', function(){
                        if( $(this).val() !== '' ){
                            $(this).next().addClass('input-filled');
                        } else {
                            $(this).next().removeClass('input-filled');
                        }
                    });

                    $(document).on('focus', '.formLogin .input--kaede', function(){
                        $(this).addClass('input--filled');
                    }).on('blur', '.formLogin .input--kaede', function(){
                        if( $(this).find('input').val() !== '' ){
                            $(this).addClass('input--filled');
                        } else {
                            $(this).removeClass('input--filled');
                        }
                    })
                });
            })( jQuery );
        </script>
    </body>
</html>
