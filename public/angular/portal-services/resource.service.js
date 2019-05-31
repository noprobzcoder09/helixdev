(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResourceService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.getCategories = getCategories;
        service.add = add;
        service.update = update;
        service.remove = remove;
        service.baseUrl = baseUrl.portal
            + '/company/'
            + $localStorage.currentUser.company.id_hash
            + '/resource';

        return service;

        function getCategories() {
            return $http.get(service.baseUrl + '/categories');
        }

        function add(formData) {
            return $http.post(service.baseUrl + '/add', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function update(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function remove(id) {
            return $http.post(service.baseUrl + '/' + id + '/delete');
        }
    }
})();
