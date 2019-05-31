(function () {
    'use strict';

    angular
        .module('app')
        .controller('InductionController', Controller);

    function Controller(
        $localStorage,
        $state,
        $stateParams,
        $scope,
        InductionService
    ) {
        var induction = this;
        induction.complete = complete;
        induction.categories = [];
        induction.view = {};
        induction.questions = [];
        induction.isPassed = false;
        induction.isDone = false;

        induction.data_certificate = {};

        initController();

        function initController()
        {
            console.log('induction controller....');
            switch($state.current.name) {
                case 'main.inductions.list': {
                    induction.promise = InductionService.
                    getCategories().then(function(res)
                    {
                        induction.categories = res.data.induction_groups.data;
                        induction.completedInductions = res.data.completed_inductions.data;
                    });
                    }break;
                case 'main.inductions.view': {
                    induction.promise = InductionService.getInduction(
                        $stateParams.id
                    ).then(function(res){
                        induction.view = res.data.induction.data;
                    });
                    }break;
                case 'main.inductions.questions': {
                    induction.promise = InductionService.getInduction(
                        $stateParams.id
                    ).then(function(res){
                        induction.view = res.data.induction.data;
                        induction.questions = induction.view.questions;

                        induction.data_certificate = {
                            'current_user' : $localStorage.currentUser,
                            'sref': 'main.inductions.list',
                            'video' : res.data.induction.data,
                            'title' : 'INDUCTION VIDEO'
                        };
                    });
                }break;
            }
        }

        function complete()
        {
            var obtainedScore = 0;
            var totalScore = induction.questions.length;
            var passingPercentage = 80;
            var percentage= 0;

            for(var i in induction.questions)
            {
                var question = induction.questions[i];
                if(question.userAnswer && question.answer == question.userAnswer) {
                    obtainedScore++;
                }
            }
            percentage = (obtainedScore * 100) / totalScore;
            console.log('USER ANSWERS: ' + obtainedScore);
            console.log('TOTAL SCORE: ' + totalScore);
            console.log('PERCENTAGE: ' + percentage);

            if(percentage >= passingPercentage) {
                induction.isPassed = true;
            }

            InductionService.completeVideo(
                induction.view.id,
                {isPassed: induction.isPassed}
            ).then(function(res){
                induction.data_certificate.video_complete = res.data.video_complete;
                induction.data_certificate.pdf_url = '/pdf/induction-complete/' + res.data.video_complete_id
            });
            induction.isDone = true;
        }
    }
})();
