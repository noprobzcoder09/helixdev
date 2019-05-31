(function () {
    'use strict';

    angular
        .module('app')
        .factory('EmployeeService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/safety-video';
        service.addEmployee = addEmployee;
        service.viewEmployee = viewEmployee;
        service.updateEmployee = updateEmployee;
        service.updateProfile = updateProfile;
        service.getInductees = getInductees;
        service.loginDetails = loginDetails;
        service.uploadDocs = uploadDocs;
        service.getWorkerCompletedInductions = getWorkerCompletedInductions;
        service.search = search;
        service.searchPagination = searchPagination;
        service.sendLoginDetails = sendLoginDetails;
        service.updateAdmin = updateAdmin;
        service.roleList = roleList;
        service.skillList = skillList;
        service.addRole = addRole;
        service.addRoleMultiple = addRoleMultiple;
        service.addSkillMultiple = addSkillMultiple;
        service.logs = logs;

        return service;

        function logs(id, params) {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/logs' + params);
        }

        function roleList(id) {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/roles');
        }

        function skillList(id, role_id) {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/roles/' + role_id + '/skills');
        }

        function addRole(id, role_id) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/roles', role_id);
        }

        function addRoleMultiple(id, role_ids) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/roles', role_ids);
        }

        function addSkillMultiple(id, role_ids, skill_id) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/roles/' + role_ids + '/skills', skill_id);
        }

        function addEmployee(form)
        {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/add', form, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function updateEmployee(id, form)
        {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/update', form, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function updateProfile(id, form)
        {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/profile/update', form, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function viewEmployee(id)
        {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/view');
        }

        function getInductees()
        {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/induction/inductees');
        }

        function loginDetails(id)
        {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/login-details');
        }

        function uploadDocs(id, formData)
        {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/docs', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function getWorkerCompletedInductions(id) {
            return $http.get(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/completed-inductions');
        }

        function search(keywords) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash +  '/employee/search?keywords=' + keywords);
        }

        function searchPagination(keywords, params) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash +  '/employee/searchPagination?keywords=' + keywords + params);
        }

        function sendLoginDetails(id) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/send-details');
        }

        function updateAdmin(id, isAdmin) {
            return $http.post(baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee/' + id + '/update-admin', {isAdmin: isAdmin});
        }
    }
})();
