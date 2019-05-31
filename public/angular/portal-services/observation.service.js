(function () {
    'use strict';

    angular
        .module('app')
        .factory('ObservationService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash;
        service.getRegister = getRegister;
        service.getObservation = getObservation;
        service.update = update;

        return service;

        function getRegister()
        {
            return $http.get(service.baseUrl + '/register/observations');
        }

        function getObservation(id)
        {
            return $http.get(service.baseUrl + '/observation/' + id + '/view');
        }

        function update(id, formData) {
            return $http.post(service.baseUrl + '/observation/' + id + '/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }
    }
})();