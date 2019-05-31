(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngStorage', 'ui.bootstrap', 'ngMaterial', 'cgBusy', 'selectize'])
        .config(config)
        .run(run)
        .constant('baseUrl', {
            'client': 'api/v1/admin'
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
                        return true;
                    }

                    return false;
                }
            }
        })
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
        .directive('certificate', function() {
            return {
                restrict: 'E',
                scope: {
                    data: '=',
                    accountList: '='
                },
                templateUrl: '/partials/contrib/client_certificate.html'
            };
        });

    function config($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("home");

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/partials/client/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('main.home', {
                url: 'home',
                templateUrl: '/partials/client/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('main.workforce', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/workforce/main.html'
                    }
                }
            })
            .state('main.workforce.user', {
                url: 'user',
                views: {
                    'workforce-user@main.workforce': {
                        templateUrl: '/partials/client/workforce/user.html',
                        controller: 'UserController',
                        controllerAs: 'user'
                    }
                }
            })
            .state('main.inductions', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/inductions/main.html'
                    }
                }
            })
            .state('main.inductions.list', {
                url: 'inductions',
                views: {
                    'induction-list@main.inductions': {
                        templateUrl: '/partials/client/inductions/list.html',
                        controller: 'InductionController',
                        controllerAs: 'induction'
                    }
                }
            })
            .state('main.inductions.view', {
                url: 'inductions/:id',
                views: {
                    'induction-view@main.inductions': {
                        templateUrl: '/partials/client/inductions/view.html',
                        controller: 'InductionController',
                        controllerAs: 'induction'
                    }
                }
            })
            .state('main.inductions.questions', {
                url: 'inductions/:id/questions',
                views: {
                    'induction-questions@main.inductions': {
                        templateUrl: '/partials/client/inductions/questions.html',
                        controller: 'InductionController',
                        controllerAs: 'induction'
                    }
                }
            })
            .state('main.safety-videos', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/safety-videos/main.html'
                    }
                }
            })
            .state('main.safety-videos.list', {
                url: 'safety-videos',
                views: {
                    'safety-list@main.safety-videos': {
                        templateUrl: '/partials/client/safety-videos/list.html',
                        controller: 'SafetyVideosController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.safety-videos.view', {
                url: 'safety-videos/:id',
                views: {
                    'safety-view@main.safety-videos': {
                        templateUrl: '/partials/client/safety-videos/view.html',
                        controller: 'SafetyVideosController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.safety-videos.questions', {
                url: 'safety-videos/:id/questions',
                views: {
                    'safety-questions@main.safety-videos': {
                        templateUrl: '/partials/client/safety-videos/questions.html',
                        controller: 'SafetyVideosController',
                        controllerAs: 'safety'
                    }
                }
            })
            .state('main.inspections', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/inspections/main.html'
                    }
                }
            })
            .state('main.inspections.home', {
                url: 'inspections',
                views: {
                    'inspection-home@main.inspections': {
                        templateUrl: '/partials/client/inspections/home.html',
                        controller: 'InspectionHomeController',
                        controllerAs: 'inspections'
                    }
                }
            })
            .state('main.inspections.setup', {
                url: 'inspections/:id/setup',
                views: {
                    'inspection-setup@main.inspections': {
                        templateUrl: '/partials/client/inspections/setup.html',
                        controller: 'InspectionSetupController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.inspections.entry', {
                url: 'inspections/:id/entry/:page/page',
                views: {
                    'inspection-entry@main.inspections': {
                        templateUrl: '/partials/client/inspections/entry.html',
                        controller: 'InspectionEntryController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.inspections.summary', {
                url: 'inspections/:id/summary/:lastPage',
                views: {
                    'inspection-summary@main.inspections': {
                        templateUrl: '/partials/client/inspections/summary.html',
                        controller: 'InspectionSummaryController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.inspections.action', {
                url: 'inspections/:id/items/:itemId/action',
                views: {
                    'inspection-action@main.inspections': {
                        templateUrl: '/partials/client/inspections/action.html',
                        controller: 'InspectionActionController',
                        controllerAs: 'inspection'
                    }
                }
            })
            .state('main.resources', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/resources/main.html'
                    }
                }
            })
            .state('main.resources.home', {
                url: 'resources',
                views: {
                    'resources-home@main.resources': {
                        templateUrl: '/partials/client/resources/home.html',
                        controller: 'ResourcesController',
                        controllerAs: 'resource'
                    }
                }
            })
            .state('main.alerts', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/alerts/main.html'
                    }
                }
            })
            .state('main.alerts.home', {
                url: 'alerts',
                views: {
                    'alerts-home@main.alerts': {
                        templateUrl: '/partials/client/alerts/home.html',
                        controller: 'AlertsController',
                        controllerAs: 'alerts'
                    }
                }
            })
            .state('main.chemicals', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/chemicals/main.html'
                    }
                }
            })
            .state('main.chemicals.select-group', {
                url: 'chemicals',
                views: {
                    'chemicals-select-group@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/select_group.html',
                        controller: 'ChemicalSelectController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemicals.view', {
                url: 'chemicals/:id/view',
                views: {
                    'chemicals-view@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/view.html',
                        controller: 'ChemicalViewController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemicals.view-assessments', {
                url: 'chemicals/:id/assessments',
                params: {
                    chemical: null
                },
                views: {
                    'chemicals-view-assessments@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/assessment-view.html',
                        controller: 'ChemicalViewAssessmentController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemicals.view-assessments-detail', {
                url: 'chemicals/:id/assessments/detail',
                params: {
                    form: false,
                    chemical: false
                },
                views: {
                    'chemicals-view-assessments-detail@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/assessment-view-detail.html',
                        controller: 'ChemicalViewAssessmentDetailsController',
                        controllerAs: 'chemical'
                    }
                },
            })

            .state('main.chemicals.assessment', {
                url: 'chemicals/assessment',
                params: {
                    chemical: null
                },
                views: {
                    'chemicals-assessment@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/assessment.html',
                        controller: 'ChemicalAssessmentController',
                        controllerAs: 'chemical'
                    }
                }
            })
            .state('main.chemicals.library', {
                url: 'chemicals/library',
                views: {
                    'chemicals-library@main.chemicals': {
                        templateUrl: '/partials/client/chemicals/library.html',
                        controller: 'ChemicalLibraryController',
                        controllerAs: 'chemical'
                    }
                }
            })
            // .state('main.inspections.closeout', {
            //     url: 'inspections/close',
            //     views: {
            //         'inspection-closeout@main.inspections': {
            //             templateUrl: '/partials/client/inspections/closeout.html',
            //             controller: 'InspectionController',
            //             controllerAs: 'inspection'
            //         }
            //     }
            // })
            // .state('main.inspections.entry', {
            //     url: 'inspections/entry',
            //     views: {
            //         'inspection-entry@main.inspections': {
            //             templateUrl: '/partials/client/inspections/closeout.html',
            //             controller: 'InspectionController',
            //             controllerAs: 'inspection'
            //         }
            //     }
            // })

            // .state('main.inspections.summary', {
            //     url: 'inspections/summary',
            //     views: {
            //         'inspection-summary@main.inspections': {
            //             templateUrl: '/partials/client/inspections/summary.html',
            //             controller: 'InspectionController',
            //             controllerAs: 'inspection'
            //         }
            //     }
            // })
            .state('login', {
                url: '/login',
                templateUrl: '/partials/client/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('main.observations', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/observations/main.html'
                    }
                }
            })
            .state('main.observations.home', {
                url: 'observations',
                views: {
                    'observation-start@main.observations': {
                        templateUrl: '/partials/client/observations/start.html',
                        controller: 'ObservationsController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.observations.list', {
                url: 'observations/list',
                views: {
                    'observation-list@main.observations': {
                        templateUrl: '/partials/client/observations/list.html',
                        controller: 'ObservationListController',
                        controllerAs: 'obs'
                    }
                }
            })
            .state('main.observations.categorized', {
                url: 'observations/:id',
                views: {
                    'observation-categorized@main.observations': {
                        templateUrl: '/partials/client/observations/categorized.html',
                        controller: 'ObservationsCategorizedController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.observations.action', {
                url: 'observations/:id/action',
                views: {
                    'observation-action@main.observations': {
                        templateUrl: '/partials/client/observations/action.html',
                        controller: 'ObservationsActionController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.observations.verify', {
                url: 'observations/:id/verify',
                views: {
                    'observation-verify@main.observations': {
                        templateUrl: '/partials/client/observations/verify.html',
                        controller: 'ObservationsVerifyController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.observations.summary', {
                url: 'observations/:id/summary',
                views: {
                    'observation-summary@main.observations': {
                        templateUrl: '/partials/client/observations/summary.html',
                        controller: 'ObservationsSummaryController',
                        controllerAs: 'observation'
                    }
                }
            })
            .state('main.emergency', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/emergencies/main.html'
                    }
                }
            })
            .state('main.emergency.home', {
                url: 'emergency',
                views: {
                    'emergency-home@main.emergency': {
                        templateUrl: '/partials/client/emergencies/home.html',
                        controller: 'ErpHomeController',
                        controllerAs: 'erp'
                    }
                }
            })


            /* greenhat */
            .state('main.greenhat', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/partials/client/greenhat/main.html'
                    }
                }
            })
            

            .state('main.greenhat.workerKickoff', {
                url: 'greenhat/:hashId/worker/kickoff',
                views: {
                    'greenhat-worker-kickoff@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/worker-kickoff.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })


            .state('main.greenhat.directSupervisorReviewer', {
                url: 'greenhat/:hashId/direct-supervisor',
                views: {
                    'direct-supervisor-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/direct-supervisor-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })

            .state('main.greenhat.HRReviewer', {
                url: 'greenhat/:hashId/hr-followup',
                views: {
                    'hr-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/hr-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })


            .state('main.greenhat.constMgtReviewer', {
                url: 'greenhat/:hashId/construction-management',
                views: {
                    'construction-management-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/construction-management-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })

            .state('main.greenhat.plantMgrReviewer', {
                url: 'greenhat/:hashId/plant-manager',
                views: {
                    'plant-manager-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/plant-manager-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })

            .state('main.greenhat.ohsFollowupReviewer', {
                url: 'greenhat/:hashId/ohs-followup',
                views: {
                    'ohs-followup-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/ohs-followup-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            })

            .state('main.greenhat.environmentalFollowupReviewer', {
                url: 'greenhat/:hashId/environmental-followup',
                views: {
                    'environmental-followup-reviewer@main.greenhat': {
                        templateUrl: '/partials/client/greenhat/environmental-followup-reviewer.html',
                        controller: 'GreenhatController',
                        controllerAs: 'greenhat'
                    }
                }
            });

    }

    function run($rootScope, $http, $location, $localStorage)
    {
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
            } else{}
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
