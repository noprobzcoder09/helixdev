(function () {
    'use strict';

    angular
        .module('app')
        .factory('SkillRequirementsService', Service);

    function Service($http, baseUrl, $localStorage)
    {
          var service = {};
          service.baseUrl =  baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/roles';
          service.list = list;
          service.skillList = skillList;
          service.addRole = addRole;
          service.getRole = getRole;
          service.removeRole = removeRole;
          service.addSkill = addSkill;
          service.removeSkill = removeSkill;

          return service;

          function list () {
            return $http.get( service.baseUrl );
          }

          function skillList (id) {
            return $http.get( service.baseUrl + '/' + id + '/skills' );
          }

          function getRole ( role ) {
            return $http.get( service.baseUrl + '/' + role );
          }

          function addRole ( role ) {
            return $http.post( service.baseUrl, role );
          }

          function removeRole ( id ) {
            return $http.delete( service.baseUrl + '/' + id );
          }

          function addSkill (role_id, skill_name) {
            return $http.post( service.baseUrl + '/' + role_id + '/skills', skill_name);
          }

          function removeSkill (role_id, skill_id) {
            return $http.delete( service.baseUrl + '/' + role_id + '/skills/' + skill_id );
          }

    }
})();
