(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', Controller);

    function Controller($location, $localStorage, AuthService, $scope) {
        var vm = this;
        vm.login = login;

        initController();

        function initController() {
            /* reset login status */
            AuthService.Logout();
            $scope.bgLogin = true;
        };

        function login() {
            AuthService.Login(vm.email, vm.password, function (result) {
                console.log(result);
                if (result === true) {
                    $location.path('/dashboard');
                    $scope.currentPath = 'dashboard';
                    $scope.bgLogin = false;
                    toastr['success']('Welcome '+$localStorage.currentUser.user.first_name+' '+$localStorage.currentUser.user.last_name);
                } else {
                    toastr['error']('Invalid username or password.');
                }
            });
        };
    }
})();