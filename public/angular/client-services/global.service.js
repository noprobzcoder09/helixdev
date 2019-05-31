(function () {
    'use strict';

    angular
        .module('app')
        .factory('GlobalService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        //service.getLocation = getLocation;

        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/';

        return service;

    }
})();
