(function () {
    'use strict';

    angular
        .module('app')
        .controller('SafetyVideoController', Controller);

    function Controller(
        SafetyVideoService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {
        var safety = this;
        safety.remove = remove;
        safety.update = update;

        safety.videos = [];
        safety.view = {};
        safety.edit = {};
        safety.new_question = {};

        safety.company_id = $localStorage.currentUser.company.id_hash;
        safety.isAddNewQuestion = false;
        safety.editQuestions = [];
        
        var idCounter = 0;

        init();

        function init()
        {
            switch($state.current.name)
            {
                case 'main.safety-videos.list' :
                {
                    safety.videos = SafetyVideoService.getVideos();
                    } break;
                case 'main.safety-videos.view' :
                {
                    SafetyVideoService.getVideo($stateParams.id).then(function(res) {
                        safety.view = res.data.video.data;
                        safety.questions = res.data.video.data.questions;
                    });
                    } break;
                case 'main.safety-videos.edit' :
                {
                    SafetyVideoService.getVideo($stateParams.id).then(function(res) {
                        safety.edit = res.data.video.data;

                        if(safety.edit.enable_questions == 1) {
                            safety.isAddNewQuestion = true;
                        } else {
                            safety.edit.enable_questions = false;
                        }

                        var questions = safety.edit.questions;
                        for(var i in questions)
                        {
                            questions[i].sid = idCounter++;
                            questions[i].option1 = '';
                            questions[i].option2 = '';
                            questions[i].option3 = '';
                            questions[i].option4 = '';
                            questions[i].option5 = '';

                            var count = 1;
                            for(var x in questions[i].options)
                            {
                                var value = questions[i].options[x].value;
                                questions[i]['option'+count] = value;
                                count++;
                            }

                            safety.editQuestions.push(questions[i]);
                        }
                    });
                    console.log('eedddiitittt');
                    console.log(safety.editQuestions);
                }
            }
        }
        
        /**** edit video area ***/
        safety.addEditQuestion = addEditQuestion;
        safety.checkOptions1 = checkOptions1;
        safety.removeEditQuestion = removeEditQuestion;

        function update()
        {
            safety.edit.questions = safety.editQuestions;
            safety.edit.enable_questions = safety.isAddNewQuestion;
            SafetyVideoService.update(safety.edit.id, safety.edit).then(function(res) {
                console.log(res);
                $state.go('main.safety-videos.view', {id:res.data.video.data.id});
            }).catch(function(res) {

            });
        }
        
        function remove()
        {
            SafetyVideoService.remove(
                safety.view.id
            ).then(function(res) {
                $state.go('main.safety-videos.list');
            });
        }
        
        function addEditQuestion()
        {
            safety.editQuestions.push({'sid': idCounter++, 'question': '', 'options':[], 'answer':''});
        }

        function removeEditQuestion(question)
        {

            if($scope.hasValue(question.id))
            {
                /* delete question into database */

                SafetyVideoService.deleteQuestion(safety.edit.id, question.id).then(function(res) {
                    var idx = safety.editQuestions.indexOf(question);
                    safety.editQuestions.splice(idx, 1);
                }).catch(function(res){});
            } else {
                for(var i in safety.editQuestions)
                {
                    if(safety.editQuestions[i].sid == question.sid)
                    {
                        var idx = safety.editQuestions.indexOf(safety.editQuestions[i]);
                        safety.editQuestions.splice(idx, 1);
                        break;
                    }
                }
            }
        }

        /* check question options if its valid */
        function checkOptions1(sid)
        {
            console.log('checkoptions1');
            for(var i in safety.editQuestions)
            {
                if(safety.editQuestions[i].sid == sid) {
                    console.log(safety.editQuestions[i]);
                    safety.editQuestions[i].options = [];
                    if($scope.hasValue(safety.editQuestions[i].option1)) {
                        safety.editQuestions[i].options.push({option: 'OPTION 1', value: safety.editQuestions[i].option1});
                    }
                    if($scope.hasValue(safety.editQuestions[i].option2)) {
                        safety.editQuestions[i].options.push({option: 'OPTION 2', value: safety.editQuestions[i].option2});
                    }
                    if($scope.hasValue(safety.editQuestions[i].option3)) {
                        safety.editQuestions[i].options.push({option: 'OPTION 3', value: safety.editQuestions[i].option3});
                    }
                    if($scope.hasValue(safety.editQuestions[i].option4)) {
                        safety.editQuestions[i].options.push({option: 'OPTION 4', value: safety.editQuestions[i].option4});
                    }
                    if($scope.hasValue(safety.editQuestions[i].option5)) {
                        safety.editQuestions[i].options.push({option: 'OPTION 5', value: safety.editQuestions[i].option5});
                    }
                }
            }
        }

        /***** add new safety video area ******/
        safety.new = {};

        safety.add = add;
        safety.addQuestionItem = addQuestionItem;
        safety.removeQuestion = removeQuestion;
        safety.checkQuestionOptions = checkOptions2;

        safety.questions = [{'sid': idCounter, 'question': '', 'options':[], 'answer':''}];

        function add()
        {

            safety.new.enable_questions = safety.isAddNewQuestion;
            safety.new.questions = safety.questions;

            SafetyVideoService.add(safety.new).then(function(res) {
                $state.go('main.safety-videos.view', {id:res.data.video.data.id});
            }).catch(function(res) {

            });
        }

        /* add a question */
        function addQuestionItem()
        {
            safety.questions.push({'sId': idCounter++, 'question': '', 'options':[], 'answer':''});
        }

        /* remove a question */
        function removeQuestion(id)
        {
            for(var i in safety.questions) {
                if(safety.questions[i].sid == id) {
                    var idx = safety.questions.indexOf(safety.questions[i]);
                    safety.questions.splice(idx, 1);
                    break;
                }
            }
        }

        /* check question options if its valid */
        function checkOptions2(sid)
        {
            for(var i in safety.questions) {
                if(safety.questions[i].sid == sid) {
                    safety.questions[i].options = [];
                    if($scope.hasValue(safety.questions[i].option1)) {
                        safety.questions[i].options.push({option: 'OPTION 1', value: safety.questions[i].option1});
                    }
                    if($scope.hasValue(safety.questions[i].option2)) {
                        safety.questions[i].options.push({option: 'OPTION 2', value: safety.questions[i].option2});
                    }
                    if($scope.hasValue(safety.questions[i].option3)) {
                        safety.questions[i].options.push({option: 'OPTION 3', value: safety.questions[i].option3});
                    }
                    if($scope.hasValue(safety.questions[i].option4)) {
                        safety.questions[i].options.push({option: 'OPTION 4', value: safety.questions[i].option4});
                    }
                    if($scope.hasValue(safety.questions[i].option5)) {
                        safety.questions[i].options.push({option: 'OPTION 5', value: safety.questions[i].option5});
                    }
                }
            }
        }
    }
})();