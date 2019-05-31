(function () {
    'use strict';

    angular
        .module('app')
        .factory('GroupService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.searchGroups = searchGroups;
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/groups';

        return service;

        function searchGroups(keywords) {
            return $http.get(service.baseUrl + '?k=' + keywords);
        }
    }
})();
