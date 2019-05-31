(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChemicalSelectController', ChemicalSelectController)
        .controller('ChemicalViewController', ChemicalViewController)
        .controller('ChemicalLibraryController', ChemicalLibraryController)
        .controller('ChemicalAssessmentController', ChemicalAssessmentController)
        .controller('ChemicalViewAssessmentController', ChemicalViewAssessmentController)
        .controller('ChemicalViewAssessmentDetailsController', ChemicalViewAssessmentDetailsController);

    function ChemicalSelectController(
        ChemicalService,
        $scope
    ) {

        var chemical =  this;

        chemical.addGroup = addGroup;

        chemical.groups = [];
        chemical.selectedGroupId = false;
        chemical.list = [];
        init();

        function init()
        {
            chemical.config = {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                maxItems: 1,
                onType: function(value)
                {
                    ChemicalService.searchGroups(value)
                        .then(function(res) {
                        chemical.groups = res.data.groups.data;
                    });
                }
            };
        }

        function addGroup()
        {
            var newGroup = prompt("Enter a new group");

            if(newGroup != null)
            {
                ChemicalService.addGroup(
                    {'name' : newGroup}
                ).then(function(res) {
                    console.log(res);
                    var newGroup = res.data.new_group.data;
                    chemical.groups.push(newGroup);
                    chemical.selectedGroupId = newGroup.id;
                })
            }
        }

        $scope.$watch('selectedGroupId', function(newVal, oldVal)
        {
            console.log(newVal);
            if(typeof newVal === 'undefined') {
                console.log('selectedGroupId is undefiend');
                chemical.selectedGroupId = false;
            } else {
                chemical.selectedGroupId = newVal;
                ChemicalService.getGroupChemicals(
                    chemical.selectedGroupId
                ).then(function(res) {
                    chemical.list = res.data.group.data.chemicals;
                })
            }
        });
    }

    function ChemicalViewController(
        $stateParams,
        ChemicalService,
        $scope
    ) {

        var chemical = this;

        chemical.view = {};
        chemical.checkAssessment = checkAssessment;
        init();

        function init() {
            console.log('view');
            ChemicalService.getChemical(
                $stateParams.id
            ).then(function(res) {
                chemical.view = res.data.chemical.data;
                console.log(chemical.view);
            });

        }

        function checkAssessment()
        {
            if($scope.hasValue(chemical.view.forms)) {
                return "YES";
            }

            return "";
        }
    }

    function ChemicalLibraryController(
        ChemicalService
    ) {
        var chemical = this;

        chemical.libraries = [];
        init();

        function init()
        {
            console.log('init');

            ChemicalService.getLibraries().then(function(res) {
                console.log(res);
                chemical.libraries = res.data.libraries.data;
            });
        }
    }

    function ChemicalAssessmentController(
        ChemicalService,
        $scope,
        $state
    ) {

        var chemical = this;
        var tempForms = {};
        chemical.currentPage = 1;
        chemical.groups = [];
        chemical.currentForm = {};
        chemical.assessmentForms = [];
        chemical.nextPage = nextPage;
        chemical.prevPage = prevPage;
        chemical.doneAssessment = doneAssessment;
        chemical.image_url;

        init();

        function init()
        {

            ChemicalService.getChemicalsAssessment().then(function(res)
            {
              console.log(res);
                chemical.list = res.data.chemicals.data;
                getChemical(chemical.list, $state.params.chemical);
                tempForms = res.data.assessment.data.assessment_form;
            });
        }

        function getChemical(list, id)
        {
            for(var i in list) {
                if(list[i].id == id) {
                    chemical.selected_chemical = list[i];
                    break;
                }
            }
        }

        function nextPage()
        {
            if(chemical.currentPage == 1) {
                for(var i in chemical.currentForm)
                {
                    var field = chemical.currentForm[i].name;
                    var value = chemical.currentForm[i].value;
                    if(chemical.assessmentForms.display.hasOwnProperty(field)) {
                        chemical.assessmentForms.display[field] = value;
                    }
                }
            }

            if(chemical.currentPage == 2) {
                var strNatureHazards = '';
                for(var i in chemical.currentForm.nature_of_the_hazard)
                {
                    var field = chemical.currentForm.nature_of_the_hazard[i];
                    if(field.isChecked) {
                        strNatureHazards += field.label;
                        if(i < chemical.currentForm.nature_of_the_hazard.length - 1) {
                            strNatureHazards += ', ';
                        }
                    }
                }

                chemical.assessmentForms.display.hazard = strNatureHazards
            }

            if(chemical.currentPage == 3) {
                var strRoutes = '';
                for(var i in chemical.currentForm.routes_of_exposure)
                {
                    var field = chemical.currentForm.routes_of_exposure[i];
                    console.log(field);
                    if(field.isChecked)
                    {
                        strRoutes += field.label;
                        if(i < chemical.currentForm.routes_of_exposure.length - 1) {
                            strRoutes += ', ';
                        }
                    }
                }
                chemical.assessmentForms.display.route = strRoutes;

                for(var i in chemical.currentForm.monitoring_required)
                {
                    chemical.assessmentForms.display.monitor = 'No';
                    var field = chemical.currentForm.routes_of_exposure[i];
                    if(field.isChecked)
                    {
                        chemical.assessmentForms.display.monitor = 'Yes';
                        break;
                    }
                }

                var hasConclusion = false;
                var strConclusions = '';
                for(var i in chemical.currentForm.conclusion)
                {
                    var field = chemical.currentForm.conclusion[i];

                    console.log(field.isChecked);

                    if(field.isChecked)
                    {
                        hasConclusion = true;
                        strConclusions += field.label;
                        if(i < chemical.currentForm.conclusion.length - 1) {
                            strConclusions += ', ';
                        }
                    }
                }

                chemical.assessmentForms.display.conclusion = strConclusions;

                if(!hasConclusion) {
                    chemical.assessmentForms.display.conclusion = 'none';
                }

            }

            if(chemical.currentPage == 4) {
              console.log(chemical.currentForm);
                chemical.assessmentForms.display.adequate_controls = 'No';
                for(var i in chemical.currentForm.adequate_controls)
                {
                    var field = chemical.currentForm.adequate_controls[i];
                    if(field.isChecked) {
                        chemical.assessmentForms.display.adequate_controls = 'Yes';
                        break;
                    }
                }
            }

            if(chemical.currentPage == 5) {
                console.log(chemical.currentForm);
                chemical.assessmentForms.display.by = chemical.currentForm.by;
                chemical.assessmentForms.display.risk = chemical.assessmentForms.selected_matrix.detail;
                chemical.assessmentForms.display.likelihood = chemical.assessmentForms.selected_matrix.impact.detail;
            }

            if(chemical.currentPage == 6) {
                chemical.assessmentForms.display.actions = chemical.currentForm.current_controls.value;
            }

            if(chemical.currentPage < 7) {
                chemical.currentPage++;
            }

            if(chemical.currentPage == 7)
            {
                ChemicalService.getChemicalImage(chemical.selected_chemical).then(function(res)
                {
                    console.log('image');
                    // chemical.selected_chemical.image_url = res.data.image.data;
                    chemical.image_url = res.data.image.data;
                    console.log(chemical.image_url);
                });
            }

            getForm('page_' + chemical.currentPage);
        }

        function prevPage()
        {
            if(chemical.currentPage > 1) {
                chemical.currentPage--;
            }
            else {
              $state.go('main.chemicals.select-group');
            }

            console.log(chemical.currentPage);
            getForm('page_' + chemical.currentPage);
        }

        function getForm(page)
        {
            chemical.currentForm = chemical.assessmentForms[page];
        }

        function doneAssessment() {
            console.log(chemical.selected_chemical);
            ChemicalService.doneAssessment(
                chemical.selected_chemical,
                chemical.assessmentForms
            ).then(function(res) {
                $state.go('main.chemicals.select-group');
            });
        }

        $scope.$watch('chemical.selected_chemical', function(newVal, oldVal) {
            if(newVal) {
                console.log(newVal);
                chemical.selected_chemical = newVal;
                chemical.assessmentForms = angular.copy(tempForms);
                console.log(chemical.assessmentForms);
                getForm('page_' + chemical.currentPage);
            }
        });

        $scope.$watch('chemical.selected_matrix', function(newVal, oldVal) {
            if(newVal) {
                console.log(newVal);
            }
        });
    }

    function ChemicalViewAssessmentController(
        ChemicalService,
        $stateParams,
        $state
    ) {
        var chemical = this;

        chemical.view = {};

        init();

        function init()
        {
            if(!$stateParams.chemical)
            {
                $state.go('main.chemicals.view', {id: $stateParams.id})
            }

            chemical.view = $stateParams.chemical;
            console.log(chemical.view);
            for(var i in chemical.view.assessments)
            {
              var assessment = chemical.view.assessments[i];
              assessment.form = JSON.parse(assessment.form);
            }
        }
    }

    function ChemicalViewAssessmentDetailsController(
        ChemicalService,
        $stateParams,
        $state
    ) {
        var chemical = this;
        chemical.view = {};
        chemical.view2 = {};

        init();

        function init()
        {

          if(!$stateParams.chemical)
          {
              $state.go('main.chemicals.assessment', {id: $stateParams.id});
              return false;
          }

          ChemicalService.getChemical(
              $stateParams.id
          ).then(function(res) {
              chemical.view2 = res.data.chemical.data;
          });

          chemical.view = $stateParams.chemical;
          chemical.view.form = $stateParams.form;
        }
    }

})();
