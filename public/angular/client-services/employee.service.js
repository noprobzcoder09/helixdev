(function () {
    'use strict';

    angular
        .module('app')
        .factory('EmployeeService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.searchEmployees = searchEmployees;
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/employee';

        return service;

        function searchEmployees(keywords) {
            return $http.post(service.baseUrl + '/search?keywords=' + keywords);
        }
    }
})();
