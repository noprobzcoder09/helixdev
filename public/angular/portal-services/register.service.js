(function () {
    'use strict';

    angular
        .module('app')
        .factory('RegisterService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};

        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/register';
        service.getCorrectiveActions = getCorrectiveActions;
        service.getInspections = getInspections;
        service.getObservations = getObservations;
        service.getSkillGaps = getSkillGaps;
        service.getVideoCompletedTrainings = getVideoCompletedTrainings;
        
        return service;

        function getCorrectiveActions(params)
        {
            if(typeof params === 'undefined')
            {
                params = '';
            }

            return $http.get(service.baseUrl + '/corrective-actions' + params);
        }

        function getInspections()
        {
            return $http.get(service.baseUrl + '/inspections');

        }

        function getObservations()
        {
            return $http.get(service.baseUrl + '/observations');
        }

        function getSkillGaps()
        {
            return $http.get(service.baseUrl + '/skill-gaps');
        }

        function getVideoCompletedTrainings(keywords)
        {
            return $http.get(service.baseUrl + '/completed-trainings?keywords='+keywords);
        }
    }
})();
