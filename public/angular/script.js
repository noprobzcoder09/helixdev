var app = angular.module('app', [
    'ui.router',
    'ngCookies',
    'ui.bootstrap',
    'ngStorage'
])
.constant('baseUrl', {
    'helix_admin': 'api/v1/helixadmin'
})
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/companies');
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: '/partials/helix/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
    .state('main.companies', {
        abstract: true,
        views: {
            '': {
                templateUrl: '/partials/helix/admin/companies/main.html'
            }
        }
    })
    .state('main.companies.list', {
        url: 'companies',
        views: {
            'companies-list@main.companies': {
                templateUrl: '/partials/helix/admin/companies/companies.html',
                controller: 'CompanyController',
                controllerAs: 'company'
            }
        }
    })
    .state('main.companies.add', {
        url: 'companies/add',
        views: {
            'companies-add@main.companies': {
                templateUrl: '/partials/helix/admin/companies/add.html',
                controller: 'CompanyAddController',
                controllerAs: 'company'
            }
        }
    })
    .state('main.companies-edit', {
        url: 'companies/:id/edit',
        templateUrl: '/partials/helix/admin/companies/edit.html',
        controller: 'CompanyEditController',
        controllerAs: 'company'
    })
    .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: '/partials/helix/login.html',
        controllerAs: 'vm'
    });
})
.run(function ($rootScope, $http, $location, $localStorage) {

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

});
