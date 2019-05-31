(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', Controller);

    function Controller($location, Auth, $scope)
    {
        console.log('login controller');
        var vm = this;
        vm.login = login;

        initController();

        function initController()
        {
            /* reset login status */
            Auth.Logout();
            $scope.bgLogin = true;
        }

        function login()
        {
            Auth.Login(vm.email, vm.password, function (result)
            {
                if (result === true) {
                    $location.path('/dashboard');
                    $scope.currentPath = 'dashboard';
                    $scope.bgLogin = false;
                } else {
                    toastr['error']('Invalid username or password.');
                }
            });
        }
    }
})();