(function () {
    'use strict';

    angular
        .module('app')
        .factory('GroupService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;
        service.searchGroups = searchGroups;
        service.add = add;
        service.update = update;
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/groups';

        return service;

        function searchGroups(keywords, projectId) {
            var url = service.baseUrl + '?k=' + keywords;

            if(projectId) {
                url += '&project_id=' + projectId;
            }

            return $http.get(url);
        }

        function add(formData) {
            return $http.post(service.baseUrl + '/add', formData);
        }

        function update(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/update', formData);
        }
    }
})();
