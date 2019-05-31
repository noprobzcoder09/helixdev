(function () {
    'use strict';
    
    angular
        .module('app')
        .factory('SafetyVideoService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/safety-video';

        service.getVideos = getVideos;
        service.getVideo = getVideo;
        service.completeVideo = completeVideo;

        return service;
        
        function getVideos() {
            return $http.get(service.baseUrl + '/lists')
        }

        function getVideo(id) {
            return $http.get(service.baseUrl + '/' + id + '/view');
        }

        /* to complete the video questions and generate a certificate */
        function completeVideo(id, data) {
            return $http.post(service.baseUrl + '/' + id + '/complete', data);
        }
    }
})();