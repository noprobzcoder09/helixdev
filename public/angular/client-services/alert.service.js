(function () {
    'use strict';

    angular
        .module('app')
        .factory('AlertService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client/alert';
        service.getUserAlerts = getUserAlerts;
        service.getNotifications = getNotifications;
        return service;

        function getUserAlerts(userId) {
            return $http.get(service.baseUrl + '/user/' + userId);
        }

        function getNotifications(id){

            return $http.get(baseUrl.client + '/user/' + id + '/get-notifications');
        }
    }
})();