(function () {
    'use strict';
    
    angular
        .module('app')
        .factory('ResourceService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.getCategories = getCategories;
        service.clientUrl = baseUrl.client
            + '/company/'
            + $localStorage.currentUser.company.id_hash
            + '/client/resource/';

        return service;
        
        function getCategories()
        {
            return $http.get(service.clientUrl + 'categories');
        }

    }
})();