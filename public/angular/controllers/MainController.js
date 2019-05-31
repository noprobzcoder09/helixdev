(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', Controller);

    function Controller(
        baseUrl,
        $http,
        GlobalService,
        $localStorage,
        $scope
    ) {
        var main = this;

        init();

        function init()
        {
            console.log('main controller');
            $http.get(baseUrl.helix_admin + '/init').then(function(res){
                GlobalService.setData(res.data.init.data);
            });

            if($localStorage.currentUser) {
                main.currentUser = $localStorage.currentUser.user;
                console.log(main.currentUser);
                $scope.bgLogin = false;
            }
        }

    }
})();