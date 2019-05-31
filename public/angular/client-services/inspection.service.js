(function () {
    'use strict';

    angular
        .module('app')
        .factory('InspectionService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client/inspection';
        service.getHome = getHome;
        service.getInspection = getInspection;
        service.startSetup = startSetup;
        service.goToPageUrl = goToPageUrl;
        service.updateInspectionItem = updateInspectionItem;
        service.getRegister = getRegister;
        service.summary = summary;
        service.updateInspectionItem = updateInspectionItem;

        return service;

        function getHome() {
            return $http.get(service.baseUrl + '/home');
        }

        function updateInspectionItem(id, itemId, formData) {
            return $http.post(service.baseUrl + '/' + itemId + '/update-item', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }
        
        function startSetup(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/setup', formData);
        }

        function getInspection(id, page, itemId) {
            var params = '';
            params += '?page=' + page;

            if(itemId) {
                params += '&item=' + itemId;
            }
            return $http.get(service.baseUrl + '/' + id + '/view' + params);
        }

        function goToPageUrl(url) {
            return $http.get(url);
        }

        function getRegister() {
            return $http.post(service.baseUrl + '/' + id + '/update-item', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});

        }

        function summary(id) {
            return $http.post(service.baseUrl + '/' + id + '/summary');
        }
        
    }
})();