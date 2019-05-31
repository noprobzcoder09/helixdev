(function () {
    'use strict';

    angular
        .module('app')
        .factory('InductionService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/induction';
        service.add = add;
        service.view = view;
        service.remove = remove;
        service.update = update;
        service.categoryAdd = categoryAdd;
        service.categoryUpdate = categoryUpdate;
        service.getCategories = getCategories;
        service.categoryDelete = categoryDelete;
        service.search = search;

        return service;

        function add(formData) {
            return $http.post(service.baseUrl + '/add', formData);
        }
        
        function update(id, formData) {
            return $http.post(service.baseUrl + '/' + id + '/update', formData);
        }

        function view(id) {
            return $http.get(service.baseUrl + '/' + id + '/view');
        }

        function remove(id) {
            return $http.delete(service.baseUrl + '/' + id + '/delete');
        }
        
        function categoryAdd(name) {
            return $http.post(service.baseUrl + '/group/add', {name: name});
        }

        function getCategories() {
            return $http.get(service.baseUrl + '/group/lists');
        }

        function categoryUpdate(id, formData) {
            return $http.post(service.baseUrl + '/group/' + id + '/update', formData);
        }

        function categoryDelete(id) {
            return $http.post(service.baseUrl + '/group/' + id + '/delete');
        }


        function search(
            keywords,
            page,
            params
        ) {
            var strParams = '';

            strParams += '?keywords=' + keywords+'&page=' + page;

            if(params) {

                if(params.project)
                {
                    strParams += '&project=' + params.project;
                }

                if(params.admin)
                {
                    strParams += '&admin=' + params.admin;
                }
            }

            return $http.get(service.baseUrl
                + '/search-inductees'
                + strParams
            );
        }

    }
})();