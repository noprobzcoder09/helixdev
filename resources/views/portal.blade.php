<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js" ng-app="app">
<head>
    <title>Helix Portal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"> -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">
    <link href="{{ mix('css/all.css') }}" rel="stylesheet">
    <link href="{{ mix('css/portal.css') }}" rel="stylesheet">
    <link href="{{ mix('css/media.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.css">
    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <style>
        .loader {
            padding-left: 20%;
            padding-top: 40%;
        }
    </style>
    <script src="{{ mix('js/core.js') }}"></script>
    <script src="{{ mix('js/plugins.js') }}"></script>
    <script src="{{ mix('js/main.js') }}"></script>
    <link rel="stylesheet" href="http://mbenford.github.io/ngTagsInput/css/ng-tags-input.min.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js"></script>
    <script src="https://cdn.embed.ly/jquery.embedly-3.1.1.min.js"></script>
    <script src="http://mbenford.github.io/ngTagsInput/js/ng-tags-input.min.js"></script>
    <script src="http://bcabanes.github.io/angular-image-cropper/node_modules/angular-image-cropper/dist/angular-image-cropper.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.js"></script>
    <script src="http://cdn.jsdelivr.net/angular.chartjs/latest/angular-chart.min.js"></script>
    <script src="/angular/portal-script.js"></script>
</head>
    <body class="@{{ (bgLogin) ? 'b-login' : '' }}">

        <div class="main-container @{{ (bgLogin) ? 'bg-login' : '' }}" ng-controller="AppController">
            <ui-view></ui-view>
        </div>
        <script src="/angular/modules/angular-selectize.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"></script>
        <!-- inject -->
        <script src="/angular/templates/multiple-autocomplete-templates/templates.js"></script>
        <script src="/angular/directives/multiple-autocomplete-field/multiple-autocomplete-field.js"></script>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.js"></script>
        <!-- end inject -->
        <script src="/angular/portal-controllers/AppController.js"></script>
        <script src="/angular/portal-controllers/LoginController.js"></script>
        <script src="/angular/portal-controllers/MainController.js"></script>
        <script src="/angular/portal-controllers/SubConController.js"></script>
        <script src="/angular/portal-controllers/SafetyVideoController.js"></script>
        <script src="/angular/portal-controllers/InspectionsController.js"></script>
        <script src="/angular/portal-controllers/HRControllers.js"></script>
        <script src="/angular/portal-controllers/RegistersController.js"></script>
        <script src="/angular/portal-controllers/ChemicalsController.js"></script>
        <script src="/angular/portal-controllers/MessagingController.js"></script>
        <script src="/angular/portal-controllers/AlertController.js"></script>
        <script src="/angular/portal-controllers/ERPController.js"></script>
        <script src="/angular/portal-controllers/GoldenRulesController.js"></script>
        <script src="/angular/portal-controllers/AdminController.js"></script>
        <script src="/angular/portal-controllers/SkillRequirementsController.js"></script>
        <script src="/angular/portal-controllers/SkillGapController.js"></script>
        <script src="/angular/portal-controllers/ProfileController.js"></script>
        <script src="/angular/portal-services/auth.service.js"></script>
        <script src="/angular/portal-services/sub-contractor.service.js"></script>
        <script src="/angular/portal-services/company.service.js"></script>
        <script src="/angular/portal-services/safety-video.service.js"></script>
        <script src="/angular/portal-services/employee.service.js"></script>
        <script src="/angular/portal-services/greenhat.service.js"></script>
        <script src="/angular/portal-services/skill-requirements.service.js"></script>
        <script src="/angular/portal-services/skill-gap.service.js"></script>
        <script src="/angular/portal-services/induction.service.js"></script>
        <script src="/angular/portal-services/inspections.service.js"></script>
        <script src="/angular/portal-services/observation.service.js"></script>
        <script src="/angular/portal-services/chemical.service.js"></script>
        <script src="/angular/portal-services/messaging.service.js"></script>
        <script src="/angular/portal-services/group.service.js"></script>
        <script src="/angular/portal-services/register.service.js"></script>
        <script src="/angular/portal-services/erp.service.js"></script>
        <script src="/angular/portal-services/project.service.js"></script>
        <script src="/angular/portal-services/golden-rule.service.js"></script>
        <script src="/angular/portal-services/resource.service.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW-e0vqOviHNtQX2KE7uTo2fCH6wtc18A"></script>
        <script>
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
                    });
                });
            })( jQuery );
        </script>
    </body>
</html>
