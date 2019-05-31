(function () {
    'use strict';

    angular
        .module('app')
        .factory('InspectionsService', Service);

    function Service($http, baseUrl, $localStorage)
    {

        var service = this;
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/inspection';
        service.registerUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/register/inspections';

        service.addInspection = addInspection;
        service.updateInspection = updateInspection;

        service.getCategories = getCategories;
        service.addItemCategory = addItemCategory;
        service.addInspectionItem = addInspectionItem;
        service.getInspectionList = getInspectionList;
        service.getRegister = getRegister;
        service.getInspection = getInspection;
        service.getInspectionItem = getInspectionItem;
        service.updateInspectionItem = updateInspectionItem;
        service.removeInspection = removeInspection;
        service.deleteItem = deleteItem;

        return service;

        function addInspection(formData) {
            return $http.post(service.baseUrl + '/add', formData);
        }

        function updateInspection(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/update', formData);
        }

        function addInspectionItem(id, formData)
        {
            console.log(formData);
            return $http.post(service.baseUrl + '/' + id + '/item/add', formData);
        }

        function updateInspectionItem(id, itemId, formData) {
            return $http.post(service.baseUrl + '/' + id + '/item/' + itemId + '/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function addItemCategory(formData) {
            return $http.post(service.baseUrl +  '/item-category/add', formData);
        }

        function getCategories() {
            return $http.get(service.baseUrl + '/categories');
        }

        function getInspectionList(iId) {
            return $http.get(service.baseUrl + '/' + iId + '/view');
        }

        function getInspection(id) {
            return $http.get(service.baseUrl  + '/' + id + '/view');
        }

        function getInspectionItem(id, itemId) {
            return $http.get(service.baseUrl  + '/' + id + '/item/' + itemId + '/view');
        }

        function getRegister()
        {
            return $http.get(service.registerUrl);
        }

        function removeInspection(id) {
            return $http.post(service.baseUrl  + '/' + id  + '/delete');
        }

        function deleteItem(id, itemId) {
            return $http.post(service.baseUrl + '/' + id + '/item/' + itemId + '/delete');
        }
    }
})();
