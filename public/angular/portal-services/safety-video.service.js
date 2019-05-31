(function () {
    'use strict';
    
    angular
        .module('app')
        .factory('SafetyVideoService', Service);

    function Service($http, baseUrl, $localStorage)
    {
        var service = {};
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/safety-video';
        service.setVideos = setVideos;
        service.getVideos = getVideos;
        service.getVideo = getVideo;
        service.update = update;
        service.add = add;
        service.remove = remove;
        service.addQuestion = addQuestion;
        service.deleteQuestion = deleteQuestion;
        service.videos = [];
    
        return service;

        function setVideos(data)
        {
            service.videos = data;
        }

        function add(newVideo) {
            return $http.post(service.baseUrl + '/add', newVideo);
        }

        function remove(id) {
            return $http.delete(service.baseUrl + '/' + id);
        }

        function getVideos() {
            return service.videos;
        }

        function getVideo(id) {
            return $http.get(service.baseUrl + '/' + id + '/view');
        }

        function update(id, video) {
            return $http.post(service.baseUrl + '/' + id + '/update', video)
        }

        function addQuestion(id, question) {
            return $http.post(service.baseUrl + '/' + id + '/add-question', question);
        }

        function deleteQuestion(id, questionId) {
            console.log(id);
            return $http.post(service.baseUrl + '/' + id + '/question/' + questionId + '/delete');
        }
    }
})();