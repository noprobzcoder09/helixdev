(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProjectService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {

        var service = this;

        service.baseUrl = baseUrl.portal +
            '/company/' + $localStorage.currentUser.company.id_hash +
            '/project';

        service.getList = getList;
        service.add = add;
        service.update = update;
        service.newProject = newProject;

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

        function newProject(project) {
            var config =
            {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                onType: function(value) {
                    console.log(value);
                },
                onChange: function(value) {
                    console.log(value);
                }
            };

            return {
                id: project.id,
                project: project,
                config: config,
                crews: [],
                selected_crews: []
            };
        }
    }
})();
