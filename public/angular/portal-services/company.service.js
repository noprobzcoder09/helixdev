(function () {
    'use strict';

    angular
        .module('app')
        .factory('CompanyService', Service);

    function Service(
        $http,
        baseUrl,
        $localStorage
    ) {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company';
        service.setInit = setInit;
        service.getRequiredDocs = getRequiredDocs;
        service.getStates = getStates;
        service.getProjects = getProjects;
        service.getEmployeeRequiredDocs = getEmployeeRequiredDocs;
        service.getOptionKeys = getOptionKeys;
        service.states = [];
        service.required_docs = [];
        service.projects = [];
        service.employee_required_docs = [];
        service.option_keys = [];
        return service;

        function setInit(data)
        {
            service.states = data.states;
            service.required_docs = data.sub_contractor_required_docs;
            service.employee_required_docs =  data.employee_required_docs;
            service.projects = data.projects;
            service.option_keys = data.option_keys;

            if(data.hasOwnProperty('states'))
            {
                $localStorage.states = data.states;
            }
        }

        function getRequiredDocs()
        {
            return service.required_docs;
        }

        function getStates() {
            return service.states;
        }

        function getProjects() {
            return service.projects;
        }

        function getEmployeeRequiredDocs() {
            return service.employee_required_docs;
        }

        function getOptionKeys() {
            return service.option_keys;
        }
    }
})();
