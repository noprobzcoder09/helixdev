(function () {
    'use strict';

    angular
        .module('app')
        .factory('ChemicalService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/chemical';
        service.getPPEList = getPPEList;
        service.add = add;
        service.remove = remove;
        service.list = list;
        service.view = view;
        service.update = update;

        return service;

        function getPPEList() {
            return $http.get(service.baseUrl + '/ppe/lists');
        }

        function add(formData) {``
            return $http.post(service.baseUrl + '/add', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function list() {
            return $http.get(service.baseUrl + '/lists');
        }

        function view(id, paramsObj)
        {

            var extraParams = '';

            if(typeof paramsObj != 'undefined')
            {
                console.log('hhhhhhhhhhhhhhhhhhhhhhhhh');
            }

            return $http.get(service.baseUrl + '/' + id + '/view'+extraParams);
        }

        function remove(id) {
            return $http.delete(service.baseUrl + '/' + id + '/delete');
        }

        function update(id, formData)
        {
            return $http.post(service.baseUrl + '/' + id + '/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }
    }
})();
