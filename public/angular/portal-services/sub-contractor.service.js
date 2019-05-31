(function () {
    'use strict';

    angular
        .module('app')
        .factory('SubConService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.getList = getList;
        service.add = add;
        service.update = update;
        service.view = view;
        service.remove = remove;
        service.uploadDocs = uploadDocs;

        service.baseUrl = baseUrl.portal + '/company/'  + $localStorage.currentUser.company.id_hash + '/subcontractor';
        service.list = {};


        return service;

        function getList()
        {
            return $http.get(service.baseUrl + '/lists');
        }

        function add(formData)
        {
            return $http.post(service.baseUrl + '/add', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function view(id) {
            return $http.get(service.baseUrl + '/' + id + '/view');
        }

        function remove(id) {
            return $http.delete(service.baseUrl + '/' + id + '/delete');
        }

        function uploadDocs(id, formData)
        {
            return $http.post(service.baseUrl + '/' + id + '/docs', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function update(id, formData)
        {
            return $http.post(service.baseUrl + '/' + id + '/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

    }
})();
