(function () {
    'use strict';

    angular
        .module('app')
        .factory('ObservationService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client/observation';

        service.start = start;
        service.action = action;
        service.getObservation = getObservation;
        service.summary = summary;
        service.verify = verify;
        service.assignments = assignments;
        service.list = list;

        return service;

        function start(formData) {
            return $http.post(service.baseUrl + '/start', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function action(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/action', formData);
        }

        function assignments(obj)
        {
            return $http.get(service.baseUrl + '/assignments');
        }

        function list(obj)
        {
            return $http.get(service.baseUrl + '/list');
        }

        function getObservation(id, formData) {
            return $http.get(service.baseUrl + '/' + id + '/view', formData);
        }

        function summary(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/summary', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function verify(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/verify', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }
    }
})();