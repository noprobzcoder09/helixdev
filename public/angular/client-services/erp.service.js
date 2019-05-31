(function () {
    'use strict';

    angular
        .module('app')
        .factory('ErpService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client/emergency';

        service.getCategories = getCategories;

        function getCategories()
        {
            return $http.get(service.baseUrl + '/categories');
        }


        return service;
        
    }
})();