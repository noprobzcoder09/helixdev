(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserController', Controller);

    function Controller(
      $localStorage,
      $state,
      $scope,
      EmployeeService
    ) {

        var user = this;
        user.view = {};

        init();

        function init()
        {
          user.view = $localStorage.currentUser.user;
          user.view.current_state = $localStorage.currentUser.states;
        }
    }
})();
