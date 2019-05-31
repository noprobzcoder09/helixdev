(function () {
    'use strict';
    
    angular
        .module('app')
        .factory('ChemicalService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/chemical';
        service.clientUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client/chemical/'
        service.groupUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/groups';
        service.searchGroups = searchGroups;
        service.getGroupChemicals = getGroupChemicals;
        service.getChemicalsAssessment = getChemicalsAssessment;
        service.getChemicalImage = getChemicalImage;
        service.getChemical = getChemical;
        service.getLibraries = getLibraries;
        service.addGroup = addGroup;

        service.doneAssessment = doneAssessment;

        return service;
        
        function searchGroups(keywords)
        {
            return $http.get(service.groupUrl + '?k=' + keywords);
        }

        function getGroupChemicals(id)
        {
            return $http.get(service.clientUrl + 'group/' + id + '/list');
        }

        function getLibraries() {
            return $http.get(service.clientUrl + 'libraries');
        }

        function getChemical(id) {
            return $http.get(service.clientUrl + id + '/view');
        }
        
        function getChemicalsAssessment()
        {
            return $http.get(service.clientUrl + 'assessment');
        }

        function getChemicalImage(id)
        {
            return $http.get(service.clientUrl + id + '/image');
        }

        function doneAssessment(id, formData)
        {
            return $http.post(service.clientUrl + id + '/assessment', formData);
        }

        function addGroup(formData) {
            return $http.post(service.clientUrl  + 'add-group', formData);
        }
    }
})();