(function () {
    'use strict';

    angular
        .module('app')
        .factory('ErpService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/emergency/';
        service.add = add;
        service.remove = remove;
        service.update = update;
        service.getList = getList;

        function getList()
        {
            return $http.get(service.baseUrl + 'lists');
        }

        function add(formData)
        {
            return $http.post(service.baseUrl + 'add', formData);
        }

        function remove(id)
        {
            return $http.get(service.baseUrl + id + '/delete');
        }

        function update(id, formData)
        {
            return $http.post(service.baseUrl + id + '/update', formData);
        }

        return service;
    }
})();
