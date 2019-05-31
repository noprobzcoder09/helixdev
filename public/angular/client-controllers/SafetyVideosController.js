(function () {
    'use strict';

    angular
        .module('app')
        .controller('SafetyVideosController', Controller);

    function Controller(
        $localStorage,
        $state,
        $scope,
        $stateParams,
        SafetyVideoService
    ) {
        var safety = this;
        safety.complete = complete;

        safety.view = {};
        safety.videos = [];
        safety.questions = [];
        safety.isDone = false;
        safety.isPassed = false;
        safety.data_certificate = {};

        $scope.isLoading = true;
        $scope.getData = false;

        initController();
;
        function initController()
        {
            console.log($localStorage);
            switch($state.current.name) {

                case 'main.safety-videos.list' :
                {
                    safety.promise = SafetyVideoService.getVideos().then(function(res) {
                        safety.videos = res.data.videos.data;
                        console.log(safety.videos);
                    });

                    } break;
                case 'main.safety-videos.view':
                {
                    safety.promise = SafetyVideoService.getVideo(
                        $stateParams.id
                    ).then(function(res) {
                        safety.view = res.data.video.data;
                        safety.questions = res.data.video.data.questions;
                    });

                    } break;
                case 'main.safety-videos.questions':
                {

                    safety.promise = SafetyVideoService.getVideo(
                        $stateParams.id
                    ).then(function(res) {
                        safety.view = res.data.video.data;
                        safety.questions = res.data.video.data.questions;

                        safety.data_certificate = {
                            'current_user' : $localStorage.currentUser,
                            'sref': 'main.safety-videos.list',
                            'video' : res.data.video.data,
                            'title' : 'SAFETY VIDEO'
                        };
                    });

                    } break;
            }
        }

        function complete()
        {
            var obtainedScore = 0;
            var totalScore = safety.questions.length;
            var passingPercentage = 80;
            var percentage= 0;

            for(var i in safety.questions)
            {
                var question = safety.questions[i];
                if(question.userAnswer && question.answer == question.userAnswer) {
                    obtainedScore++;
                }
            }
            percentage = (obtainedScore * 100) / totalScore;
            console.log('USER ANSWERS: ' + obtainedScore);
            console.log('TOTAL SCORE: ' + totalScore);
            console.log('PERCENTAGE: ' + percentage);

            if(percentage >= passingPercentage) {
                safety.isPassed = true;
            }

            SafetyVideoService.completeVideo(
                safety.view.id,
                {isPassed: safety.isPassed}
            ).then(function(res){
                safety.data_certificate.video_complete = res.data.video_complete;
                safety.data_certificate.pdf_url = 'pdf/video-complete/' + res.data.video_complete_id;
            });
            safety.isDone = true;
        }
    }
})();
