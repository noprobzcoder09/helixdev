(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', Controller)
        .controller('HomeController', HomeController);

    function Controller(
        $localStorage,
        $state, $scope
    ) {
        var main = this;

        init();
        
        function init()
        {
            if($localStorage.currentUser) {
                main.currentUser = $localStorage.currentUser;
                $scope.bgLogin = false;
            }
        }
    }

    function HomeController(
        AlertService,
        $localStorage
    ) {
        var home = this;
        var pageClass = "home";

        init();

        function init()
        {

           AlertService.getUserAlerts($localStorage.currentUser.user.user_id).then(function(res) {
               home.alerts = res.data.alerts.data;
               console.log(home.alerts);
           });
        }
    }
})();