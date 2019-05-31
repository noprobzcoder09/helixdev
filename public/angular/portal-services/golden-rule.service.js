(function () {
    'use strict';

    angular
        .module('app')
        .factory('GoldenRuleService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.getList = getList;
        service.add = add;
        service.update = update;
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/golden-rule';

        return service;

        function getList() {
            return $http.get(service.baseUrl + '/lists');
        }

        function add(formData) {
            return $http.post(service.baseUrl + '/add', formData);
        }

        function update(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/update', formData);
        }
    }
})();
