(function () {
    'use strict';

    angular

    .module('app', [
        'ui.router',
        'ngStorage',
        'ui.bootstrap',
        'imageCropper',
        'ngTagsInput',
        'selectize',
        'chart.js',
        'cgBusy'
    ])
    .config(config)
    .run(run)
    .constant('baseUrl', {
        'portal': 'api/v1/admin'
    })
    .constant('limitFile', {
        'size': '10485760', /* 10485760 - 10MB */ /* 2097152 - 2MB */
        'message': 'cannot exceed 10MB limit'
    })
    .constant('mFile', {
        'default' : {
            'size': '10485760', /* 10485760 - 10MB */ /* 2097152 - 2MB */
            'message': 'cannot exceed 10MB limit'
        },
        'check' : {
            'isPdfUrl' : function(url) {
                console.log('the url is');
                console.log(url);
                var m = url.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/);

                if(m[3] == 'pdf') {
                    return true;
                }
                return false;
            },
            'isImageUrl' : function checkUrl(url){
                if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(url))
                {
                    console.log('llxx');
                    return true;
                }
                console.log('llfffffffffffff');
                return false;
            }
        }

    })
    .filter('inspectionProper', ['CompanyService', function(CompanyService){
        return function(key){
            var keys = CompanyService.getOptionKeys();
            return keys[key]
        }
    }])
    .filter('html', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .filter('strReplace', function () {
        return function (input, from, to) {
            input = input || '';
            from = from || '';
            to = to || '';
            return input.replace(new RegExp(from, 'g'), to);
        };
    })
    .filter('moment', function() {
        return function(dateString, format) {
            return moment(dateString).format(format);
        };
    })
    .filter('unsafe', function($sce) {
        return $sce.trustAsHtml;
    })
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .directive('colorboxItem', function () {
        return function (scope, element, attrs) {
            setTimeout(
                function() {
                    $(element).colorbox({scalePhotos: true}); },
                3000
            );
        } ;
    });
    function config($stateProvider, $urlRouterProvider)
    {

        $urlRouterProvider.otherwise("dashboard");

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/partials/portal/dashboard/main.html',
                controller: 'MainController',
                controllerAs: 'main',
                resolve: {
                    result: function($http, CompanyService, baseUrl, $localStorage)
                    {
                        var baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash;
                        return $http.get(baseUrl + '/init').then(function(res) {
                            CompanyService.setInit(res.data.init.data);
                        });
                    }
                }
            })
            .state('main.dashboard', {
                url: 'dashboard',
                templateUrl: '/partials/portal/dashboard/dashboard.html',
                controller: function() {

                }
            })
            .state('main.sub-contractor', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/sub-contractor/main.html'
                    }
                }
            })
            .state('main.sub-contractor.list', {
                url: 'sub-contractor',
                views: {
                    'subcon-list@main.sub-contractor': {
                        templateUrl: '/partials/portal/dashboard/sub-contractor/list.html',
                        controller: 'SubConController',
                        controllerAs: 'subcon'
                    }
                },
                resolve: {
                    result: function(SubConService) {
                        return SubConService.getList();
                    }
                }
            })
            .state('main.sub-contractor.add', {
                url: 'sub-contractor/add',
                views: {
                    'subcon-add@main.sub-contractor': {
                        templateUrl: '/partials/portal/dashboard/sub-contractor/add.html',
                        controller: 'SubConController',
                        controllerAs: 'subcon'
                    }
                },
                resolve: {
                    result: function() {
                        return false;
                    }
                }
            })
            .state('main.sub-contractor.view', {
                url: 'sub-contractor/:id/view',
                views: {
                    'subcon-view@main.sub-contractor': {
                        templateUrl: '/partials/portal/dashboard/sub-contractor/view.html',
                        controller: 'SubConController',
                        controllerAs: 'subcon'
                    }
                }
            })
            .state('main.sub-contractor.edit', {
                url: 'sub-contractor/:id/edit',
                views: {
                    'subcon-edit@main.sub-contractor': {
                        templateUrl: '/partials/portal/dashboard/sub-contractor/edit.html',
                        controller: 'SubConEditController',
                        controllerAs: 'subcon'
                    }
                }
            })
            .state('main.hr', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/hr/main.html'
                    }
                }
            })
            .state('main.hr.user_management', {
                url: 'hr/user-management',
                views: {
                    'hr-user_management-list@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/user-management.html',
                        controller: 'HRUserManagementController',
                        controllerAs: 'hrWorkforce'
                    }
                }
            })
            .state('main.hr.workforce', {
                url: 'hr/workforce',
                views: {
                    'hr-workforce@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/workforce.html',
                        controller: 'HRWorkforceController',
                        controllerAs: 'hrWorkforce'
                    }
                }
            })
            .state('main.hr.workforce-worker', {
                url: 'hr/workforce/:id/worker',
                views: {
                    'hr-workforce-worker@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/view.html?v='+Math.floor(Math.random() * 11000) + 1,
                        controller: 'HROpenworkerController',
                        controllerAs: 'hrOpenworker'
                    }
                }
            })
            .state('main.hr.workforce-worker-skills', {
                url: 'hr/workforce/:id/worker/skills',
                views: {
                    'hr-workforce-worker-skills@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/skills.html',
                        controller: 'HROpenworkerSkillsController',
                        controllerAs: 'hrOpenworkerSkills'
                    }
                }
            })
            .state('main.hr.workforce-worker-skills-edit', {
                url: 'hr/workforce/:id/worker/skills/edit',
                views: {
                    'hr-workforce-worker-skills@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/skills-edit.html',
                        controller: 'HROpenworkerSkillsController',
                        controllerAs: 'hrOpenworkerSkills'
                    }
                }
            })
            .state('main.hr.workforce-skills-details', {
                url: 'hr/workforce/:id/worker/skills/:role_id/details',
                views: {
                    'hr-workforce-skills-details@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/skills-detail.html',
                        controller: 'HROpenworkerSkillsDetailController',
                        controllerAs: 'skillsDetail'
                    }
                }
            })
            .state('main.hr.workforce-worker-inductions', {
                url: 'hr/workforce/:id/worker/inductions',
                views: {
                    'hr-workforce-worker@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/completed-inductions.html',
                        controller: 'HRInductionViewWorkerCompletedInductions',
                        controllerAs: 'hrOpenWorker'
                    }
                }
            })
            .state('main.hr.workforce-login-details', {
                url: 'hr/workforce/:id/login-details',
                views: {
                    'hr-workforce-login-details@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/login.html',
                        controller: 'HREmployeeController',
                        controllerAs: 'hrEmployee'
                    }
                }
            })
            .state('main.hr.workforce-greenhat-program', {
                url: 'hr/workforce/:id/greenhat-program',
                views: {
                    'hr-workforce-greenhat-program@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/greenhat-program.html',
                        controller: 'GRProgramController',
                        controllerAs: 'grProgram'
                    }
                }
            })
            .state('main.hr.workforce-greenhat-signoff', {
                url: 'hr/workforce/:id/greenhat-signoff',
                views: {
                    'hr-workforce-greenhat-signoff@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/greenhat-signoff.html',
                        controller: 'GRProgramController',
                        controllerAs: 'grProgram'
                    }
                }
            })
            .state('main.hr.workforce-greenhat-kickoff', {
                url: 'hr/workforce/:id/greenhat-kickoff',
                views: {
                    'hr-workforce-greenhat-kickoff@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/greenhat-kickoff.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-greenhat-register', {
                // url: 'hr/workforce/:id/greenhat-kickoff',
                url: 'hr/greenhat-register',
                views: {
                    'hr-greenhat-register@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/greenhat-register.html',
                        controller: 'GRProgramController',
                        controllerAs: 'grProgram'
                    }
                }
            })
            .state('main.hr.workforce-greenhat-corrective-action', {
                url: 'hr/greenhat-corrective-action',
                views: {
                    'hr-greenhat-corrective-action@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/greenhat-corrective-action.html',
                        controller: 'GRProgramController',
                        controllerAs: 'grProgram'
                    }
                }
            })
            //
            .state('main.hr.workforce-direct-supervisor', {
                url: 'hr/workforce/:id/direct-supervisor',
                views: {
                    'hr-workforce-direct-supervisor@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/direct-supervisor.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-hr-followup', {
                url: 'hr/workforce/:id/hr-followup',
                views: {
                    'hr-workforce-hr-followup@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/hr-followup.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-plant-department', {
                url: 'hr/workforce/:id/plant-department',
                views: {
                    'hr-workforce-plant-department@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/plant-department.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-ohs-followup', {
                url: 'hr/workforce/:id/ohs-followup',
                views: {
                    'hr-workforce-ohs-followup@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/ohs-followup.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-construction-management', {
                url: 'hr/workforce/:id/construction-management',
                views: {
                    'hr-workforce-construction-management@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/construction-management.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.workforce-environmental-followup', {
                url: 'hr/workforce/:id/environmental-followup',
                views: {
                    'hr-workforce-environmental-followup@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/environmental-followup.html',
                        controller: 'FeedbackController',
                        controllerAs: 'feedback'
                    }
                }
            })
            .state('main.hr.edit-workforce-worker', {
                url: 'hr/workforce/:id/worker/edit',
                views: {
                    'hr-workforce-worker@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/openworker/edit.html',
                        controller: 'HREditWorkerController',
                        controllerAs: 'hrEditWorker'
                    }
                }
            })
            .state('main.hr.dashboard', {
                url: 'hr',
                views: {
                    'hr-dashboard@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/dashboard.html',
                        controller: 'HRMainController',
                        controllerAs: 'hrMain'
                    }
                }
            })
            .state('main.hr.onboard', {
                url: 'hr/onboard',
                views: {
                    'hr-onboard@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/onboard.html',
                        controller: 'HROnBoardController',
                        controllerAs: 'hrOnboard'
                    }
                }
            })
            .state('main.hr.employee', {
                url: 'hr/employee/:id',
                views: {
                    'hr-employee@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/employee.html',
                        controller: 'HROnBoardController',
                        controllerAs: 'hrOnboard'
                    }
                }
            })
            .state('main.hr.induction', {
                url: 'hr/induction',
                views: {
                    'hr-induction@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/induction.html',
                        controller: 'HRInductionController',
                        controllerAs: 'hrInduction'
                    }
                }
            })
            .state('main.hr.induction-list', {
                url: 'hr/induction/list',
                views: {
                    'hr-induction-list@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/induction.list.html',
                        controller: 'HRInductionController',
                        controllerAs: 'hrInduction'
                    }
                }
            })
            .state('main.hr.induction-add', {
                url: 'hr/induction/add',
                views: {
                    'hr-induction-add@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/induction.add.html',
                        controller: 'HRInductionAddController',
                        controllerAs: 'hrInduction'
                    }
                }
            })
            .state('main.hr.induction-edit', {
                url: 'hr/induction/:id/edit',
                views: {
                    'hr-induction-edit@main.hr': {
                        templateUrl: '/partials/portal/dashboard/hr/induction.edit.html',
                        controller: 'HRInductionEditController',
                        controllerAs: 'hrInduction'
                    }
                }
            })
            .state('main.ohs', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/main.html'
                    }
                }
            })
            .state('main.ohs.dashboard', {
                url: 'ohs',
                views: {
                    'ohs-dashboard@main.ohs': {
                        templateUrl: '/partials/portal/dashboard/ohs/dashboard.html',
                        controller: function($localStorage) {
                            console.log('init');
                            console.log($localStorage);
                            var ohs = this;
                            ohs.hasModule = hasModule;

                            init();

                            function init()
                            {
                                ohs.company = $localStorage.currentUser.company;
                                console.log(ohs.company);

                            }

                            function hasModule(module)
                            {
                                console.log(module);
                                if(ohs.company.modules_str.indexOf(module) >= 0) {
                                    console.log('has ' + module);
                                    return true;
                                }

                                return false;
                            }
                        },
                        controllerAs: 'ohs'
                    }
                }
            })
            .state('main.safety-videos', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/safety-videos/main.html'
                    }
                }
            })
            .state('main.safety-videos.list', {
                url: 'safety-videos',
                views: {
                    'safety-vid-list@main.safety-videos': {
                        templateUrl: '/partials/portal/dashboard/ohs/safety-videos/lists.html',
                        controller: 'SafetyVideoController',
                        controllerAs: 'safety'
                    }
                },
                resolve: {
                    result: function ($http, $localStorage, SafetyVideoService, baseUrl) {
                        var baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/safety-video/lists';
                        return $http.get(baseUrl).then(function(res) {
                            SafetyVideoService.setVideos(res.data.videos.data);
                        });
                    }
                }
            })
            .state('main.online-training', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/online-training/main.html'
                    }
                }
            })
            .state('main.online-training.list', {
                url: 'online-training',
                views: {
                    'online-training-list@main.online-training': {
                        templateUrl: '/partials/portal/dashboard/ohs/online-training/lists.html',
                        controller: 'OnlineTrainingController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('main.safety-videos.view', {
                url: 'safety-videos/:id/view',
                views: {
                    'safety-vid-view@main.safety-videos': {
                        templateUrl: '/partials/portal/dashboard/ohs/safety-videos/view.html',
                        controller: 'SafetyVideoController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.safety-videos.add', {
                url: 'safety-videos/add',
                views: {
                    'safety-vid-add@main.safety-videos': {
                        templateUrl: '/partials/portal/dashboard/ohs/safety-videos/add.html',
                        controller: 'SafetyVideoController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.safety-videos.edit', {
                url: 'safety-videos/:id/edit',
                views: {
                    'safety-vid-edit@main.safety-videos': {
                        templateUrl: '/partials/portal/dashboard/ohs/safety-videos/edit.html',
                        controller: 'SafetyVideoController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.inspections', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/inspections/main.html'
                    }
                }
            })
            .state('main.inspections.list', {
                url: 'inspections',
                views: {
                    'inspections-list@main.inspections': {
                        templateUrl: '/partials/portal/dashboard/ohs/inspections/list.html',
                        controller: 'InspectionsListController',
                        controllerAs: 'inspectionsList'
                    }
                }
            })
            .state('main.inspections.view', {
                url: 'inspections/:id/view',
                params: {
                    isFinalize: null
                },
                views: {
                    'inspections-view@main.inspections': {
                        templateUrl: '/partials/portal/dashboard/ohs/inspections/view.html',
                        controller: 'InspectionsViewController',
                        controllerAs: 'inspectionsView'
                    }
                }
            })
            .state('main.inspections.summary', {
                url: 'inspections/:id/summary',
                views: {
                    'inspections-summary@main.inspections': {
                        templateUrl: '/partials/portal/dashboard/ohs/inspections/summary.html',
                        controller: 'InspectionsSummaryController',
                        controllerAs: 'inspectionsSummary'
                    }
                }
            })
            .state('main.register', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/main.html'
                    }
                }
            })
            .state('main.register.observations', {
                url: 'register/observations',
                views: {
                    'register-observations@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/observations.html',
                        controller: 'RegisterObservationsController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.register.observation-entry', {
                url: 'register/observation/:id/entry',
                views: {
                    'register-observation-entry@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/observation.entry.html',
                        controller: 'RegisterObservationEntryController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.register.observation-edit', {
                url: 'register/observation/:id/edit',
                views: {
                    'register-observation-edit@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/observation.edit.html',
                        controller: 'RegisterObservationEditController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.register.inspections', {
                url: 'register/inspections',
                views: {
                    'register-inspections@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/inspections.html',
                        controller: 'RegisterInspectionsController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.register.inspection-summary', {
                url: 'register/inspection/:id/summary',
                views: {
                    'register-inspection-summary@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/inspection.summary.html',
                        controller: 'RegisterInspectionSummaryController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.register.inspection-entry', {
                url: 'register/inspection/:id/item/:itemId/entry',
                views: {
                    'register-inspection-entry@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/inspection.entry.html',
                        controller: 'RegisterInspectionEntryController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.register.corrective-actions', {
                url: 'register/corrective-actions',
                views: {
                    'register-corrective-actions@main.register': {
                        templateUrl: '/partials/portal/dashboard/ohs/registers/corrective-actions.html',
                        controller: 'RegisterCorrectiveActionsController',
                        controllerAs: 'corrective'
                    }
                }
            })
            .state('main.chemical', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/main.html'
                    }
                }
            })
            .state('main.chemical.list', {
                url: 'chemical/list',
                views: {
                    'chemical-list@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/list.html',
                        controller: 'ChemicalListController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemical.add', {
                url: 'chemical/add',
                views: {
                    'chemical-add@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/add.html',
                        controller: 'ChemicalAddController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemical.edit', {
                url: 'chemical/:id/edit',
                views: {
                    'chemical-edit@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/edit.html',
                        controller: 'ChemicalEditController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemical.assessment-list', {
                url: 'chemical/:id/assessment',
                views: {
                    'chemical-assessment-list@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/assessment-list.html',
                        controller: 'ChemicalAssessmentsController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemical.assessment-open', {
                url: 'chemical/:id/assessment/open',
                views: {
                    'chemical-assessment-open@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/assessment-open.html',
                        controller: 'ChemicalAssessmentController',
                        controllerAs: 'chemical'
                    }
                },
                params: { chemical: false, assessment: false}
            })
            .state('main.alert', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/alerts/main.html'
                    }
                }
            })
            .state('main.alert.index', {
                url:'alert',
                views: {
                    'alert-index@main.alert': {
                        templateUrl: '/partials/portal/dashboard/ohs/alerts/alert-index.html',
                        controller: 'AlertIndexController',
                        controllerAs: 'alert'
                    }
                }
            })
            .state('main.alert.preview', {
                url:'alert/preview',
                views: {
                    'alert-preview@main.alert': {
                        templateUrl: '/partials/portal/dashboard/ohs/alerts/alert-preview.html',
                        controller: 'AlertIndexController',
                        controllerAs: 'alert'
                    }
                }
            })
            .state('main.alert.history', {
                url:'alert/history',
                views: {
                    'alert-history@main.alert': {
                        templateUrl: '/partials/portal/dashboard/ohs/alerts/alert-history.html',
                        controller: 'AlertHistoryController',
                        controllerAs: 'alert'
                    }
                }
            })
            .state('main.alert.view', {
                url:'alert/:id/view',
                views: {
                    'alert-view@main.alert': {
                        templateUrl: '/partials/portal/dashboard/ohs/alerts/alert-view.html',
                        controller: 'AlertIndexController',
                        controllerAs: 'alert'
                    }
                }
            })
            .state('main.chemical.view', {
                url: 'chemical/:id/view',
                views: {
                    'chemical-view@main.chemical': {
                        templateUrl: '/partials/portal/dashboard/ohs/chemicals/view.html',
                        controller: 'ChemicalViewController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.skill-requirements', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/skill-requirements/main.html'
                    }
                }
            })
            .state('main.skill-requirements.skills', {
                url: 'skill-requirements/:id/skills',
                views: {
                    'skill-requirements-skills@main.skill-requirements': {
                        templateUrl: '/partials/portal/dashboard/ohs/skill-requirements/skills.html',
                        controller: 'SkillRequirementsController',
                        controllerAs: 'skillReq'
                    }
                }
            })
            .state('main.skill-requirements.list', {
                url: 'skill-requirements',
                views: {
                    'skill-requirements-list@main.skill-requirements': {
                        templateUrl: '/partials/portal/dashboard/ohs/skill-requirements/list.html',
                        controller: 'SkillRequirementsController',
                        controllerAs: 'skillReq'
                    }
                }
            })
            .state('main.skill-gap', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/skill-gap/main.html'
                    }
                }
            })
            .state('main.skill-gap.list', {
                url: 'skill-gap',
                views: {
                    'skillgap-list@main.skill-gap': {
                        templateUrl: '/partials/portal/dashboard/ohs/skill-gap/list.html',
                        controller: 'SkillGapController',
                        controllerAs: 'skillGap'
                    }
                }
            })
            .state('main.messaging', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/main.html'
                    }
                }
            })
            .state('main.messaging.index', {
                url:'messaging',
                views: {
                    'messaging-index@main.messaging': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/messaging-index.html',
                        controller: 'MessagingIndexController',
                        controllerAs: 'messaging'
                    }
                }
            })
            .state('main.messaging.preview', {
                url:'messaging/preview',
                views: {
                    'messaging-preview@main.messaging': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/messaging-preview.html',
                        controller: 'MessagingIndexController',
                        controllerAs: 'messaging'
                    }
                }
            })
            .state('main.messaging.history', {
                url:'messaging/history',
                views: {
                    'messaging-history@main.messaging': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/messaging-history.html',
                        controller: 'MessagingHistoryController',
                        controllerAs: 'messaging'
                    }
                }
            })
            .state('main.messaging.view', {
                url:'messaging/:id/view',
                views: {
                    'messaging-view@main.messaging': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/messaging-view.html',
                        controller: 'MessagingIndexController',
                        controllerAs: 'messaging'
                    }
                }
            })
            .state('main.messaging.groupRecipient', {
                url:'messaging/group-recipient',
                views: {
                    'messaging-group-recipient@main.messaging': {
                        templateUrl: '/partials/portal/dashboard/ohs/messaging/messaging-group-recipient.html',
                        controller: 'MessagingGroupRecipientController',
                        controllerAs: 'messagingGroupRecipient'
                    }
                }
            })
            .state('main.erp', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/erp/main.html'
                    }
                }
            })
            .state('main.erp.list', {
                url: 'erp/list',
                views: {
                    'erp-list@main.erp': {
                        templateUrl: '/partials/portal/dashboard/ohs/erp/list.html',
                        controller: 'ErpListController',
                        controllerAs: 'erp'
                    }
                }
            })
            .state('main.golden-rules', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/ohs/golden-rules/main.html'
                    }
                }
            })
            .state('main.golden-rules.list', {
                url: 'golden-rules/list',
                views: {
                    'golden-rules-list@main.golden-rules': {
                        templateUrl: '/partials/portal/dashboard/ohs/golden-rules/list.html',
                        controller: 'GoldenRulesController',
                        controllerAs: 'rules'
                    }
                }
            })
            .state('main.admin', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/admin/main.html'
                    }
                }
            })
            .state('main.admin.dashboard', {
                url: 'admin',
                views: {
                    'admin-dashboard@main.admin': {
                        templateUrl: '/partials/portal/dashboard/admin/dashboard.html',
                        controller: 'AdminController',
                        controllerAs: 'admin'
                    }
                }
            })
            .state('main.admin.crew-list', {
                url: 'admin/crews',
                views: {
                    'admin-crews@main.admin': {
                        templateUrl: '/partials/portal/dashboard/admin/crews.html',
                        controller: 'AdminCrewsController',
                        controllerAs: 'admin'
                    }
                }
            })
            .state('main.admin.project-list', {
                url: 'admin/projects',
                views: {
                    'admin-projects@main.admin': {
                        templateUrl: '/partials/portal/dashboard/admin/projects.html',
                        controller: 'AdminProjectsController',
                        controllerAs: 'project'
                    }
                }
            })
            .state('main.admin.resources', {
                url: 'admin/resources',
                views: {
                    'admin-resources@main.admin': {
                        templateUrl: '/partials/portal/dashboard/admin/resources.html',
                        controller: 'AdminResourcesController',
                        controllerAs: 'resource'
                    }
                }
            })
            .state('main.reports', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/reports/main.html'
                    }
                }
            })
            .state('main.reports.index', {
                url: 'reports',
                views: {
                    'reports-index@main.reports' : {
                        templateUrl: '/partials/portal/dashboard/reports/index.html',
                        controller: function() {
                            console.log('reports')
                        }
                    }
                }
            })
            .state('main.profile', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/portal/dashboard/profile/main.html'
                    }
                }
            })
            .state('main.profile.edit', {
                url: 'profile/edit',
                views: {
                    'profile-edit@main.profile' : {
                        templateUrl: '/partials/portal/dashboard/profile/edit.html',
                        controller: 'ProfileEditController',
                        controllerAs: 'profile'
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: '/partials/portal/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
            // .state('logout', {
            //     url: '/login',
            //     templateUrl: '/partials/portal/login.html',
            //     controller: 'LogoutController',
            //     controllerAs: 'vm'
            // });
    }

    function run(
        $rootScope,
        $http,
        $location,
        $localStorage
    ) {
        /* keep user logged in after page refresh */
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.access_token;
        }

        /* redirect to login page if not logged in and trying to access a restricted page */
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }
})();
