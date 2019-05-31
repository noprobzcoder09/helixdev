(function () {
    'use strict';

    angular
        .module('app')
        .factory('InductionService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/induction';
        service.getCategories = getCategories;
        service.getInduction = getInduction;
        service.completeVideo = completeVideo;

        return service;

        function getCategories() {
            return $http.get(service.baseUrl + '/client-list');
        }
        
        function getInduction(id) {
            return $http.get(service.baseUrl + '/' + id + '/view');
        }

        /* to complete the induction video questions and generate a certificate */
        function completeVideo(id, data) {
            return $http.post(service.baseUrl + '/' + id + '/complete', data);
        }
    }
})();