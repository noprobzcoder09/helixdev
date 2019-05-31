(function () {
    'use strict';

    angular
        .module('app')
        .factory('SkillGapService', Service);

    function Service($http, baseUrl, $localStorage)
    {
      var service = {};
      service.baseUrl =  baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/analytics';
      service.list = list;

      return service;

      function list (){
        return $http.get( service.baseUrl );
      }
    }
})();
