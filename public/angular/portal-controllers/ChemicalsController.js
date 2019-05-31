(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChemicalListController', ChemicalListController)
        .controller('ChemicalAddController', ChemicalAddController)
        .controller('ChemicalViewController', ChemicalViewController)
        .controller('ChemicalEditController', ChemicalEditController)
        .controller('ChemicalAssessmentsController', ChemicalAssessmentsController)
        .controller('ChemicalAssessmentController', ChemicalAssessmentController);

    function ChemicalListController(
        ChemicalService
    ) {
        var chemical = this;
        chemical.list = [];
        init();

        function init() {
            console.log('ChemicalListController');
            ChemicalService.list().then(function(res) {
                chemical.list = res.data.chemicals.data.data;
                console.log(chemical.list);
            });
        }
    }

    function ChemicalAddController(
        ChemicalService,
        GroupService,
        $state,
        $scope,
        limitFile
    ) {
        var chemical = this;
        chemical.ppes = [];
        chemical.selected_ppes = [];
        chemical.new = {};

        chemical.selectPPE = selectPPE;
        chemical.save = save;
        chemical.groups = [];
        chemical.selectedGroups = [];

        init();

        function init()
        {
            chemical.config = {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                onChange: function(value){
                    console.log('onChange', value)
                    chemical.selectedGroups = value;
                },
                onType: function(value) {
                    GroupService.searchGroups(value).then(function(res)
                    {
                        chemical.groups = res.data.groups.data;

                         console.log(chemical.groups);
                    });
                }
            };
            ChemicalService.getPPEList().then(function(res) {
                chemical.ppes = res.data.chemical_ppes.data;
            });
        }

        function selectPPE(ppe)
        {
            if(!ppe.isSelect) {
                ppe.isSelect = true;
            } else {
                ppe.isSelect = false;
            }
        }

        function save()
        {
            var formData = new FormData();
            var imgFile = document.getElementById('chemical_image').files[0];
            var msdsFile = document.getElementById('msds').files[0];
            var selectedPpes = [];

            if(typeof imgFile != 'undefined') {
                if(imgFile.size > limitFile.size)
                {

                } else {
                    formData.append('image', imgFile);
                }
            }

            if(typeof msdsFile != 'undefined') {
                if(msdsFile.size > limitFile.size)
                {
                    console.log('no file uploaded');
                    $("#c_msds").css({"border" : "1px solid red"});
                } else {
                    formData.append('msds', msdsFile);
                }
            }

            for(var i in chemical.ppes) {
                if(chemical.ppes[i].isSelect) {
                    selectedPpes.push(chemical.ppes[i].id);
                }
            }

            chemical.new.ppes = selectedPpes;
            chemical.new.groups = chemical.selectedGroups;
            for(var i in chemical.new) {
                if(chemical.new != null) {
                    formData.append(i, chemical.new[i]);
                }
            }

            ChemicalService.add(formData).then(function(res) {
                $state.go('main.chemical.list');
            }).catch(function(res) {
                $scope.showToastr('error', res.data.message);
            });
        }
    }

    function ChemicalViewController(
        $state,
        $stateParams,
        ChemicalService
    ) {
        var chemical = this;
        chemical.view = {};
        chemical.remove = remove;

        init();

        function init() {
            ChemicalService.view($stateParams.id).then(function(res) {
                console.log(res);
                chemical.view = res.data.chemical.data;
                console.log(chemical.view);
            });
        }

        function remove() {
          ChemicalService.remove($stateParams.id).then(function(res) {
              console.log(res);
              if(res.data.result) {
                console.log(res.data.result);
                $state.go('main.chemical.list');
              }
          });
        }
    }

    function ChemicalEditController(
        ChemicalService,
        GroupService,
        $state,
        $stateParams,
        $scope,
        limitFile
    ) {
        var chemical = this;
        chemical.view = {};
        chemical.new = {};
        chemical.ppes = [];

        chemical.checked = checked;
        chemical.update = update;
        chemical.groups = [];
        chemical.selectedGroups = [];

        init();

        function init() {
          var chem_group = [];

          ChemicalService.view($stateParams.id).then(function(res) {
              chemical.view = res.data.chemical.data;
              ChemicalService.getPPEList().then(function(res) {
                  chemical.ppes = res.data.chemical_ppes.data;

                  for(var x in chemical.ppes) {
      							var chem_ppes_id = chemical.ppes[x].id;

      							for(var y in chemical.view.ppes) {

      								if(chem_ppes_id == chemical.view.ppes[y].id) {
      									chemical.ppes[x].checked = true;
      								}
      							}
      						}
              });

              for(var z in chemical.view.chemical_groups) {
                chem_group.push(chemical.view.chemical_groups[z].group.id);
                chemical.groups.push(chemical.view.chemical_groups[z].group);
              }
              chemical.selectedGroups = chem_group;
          });

          chemical.config = {
              plugins: ['remove_button'],
              create: true,
              valueField: 'id',
              labelField: 'name',
              searchField: ['name'],
              onChange: function(value){
                  console.log('onChange', value);
                  chemical.selectedGroups = value;
                  console.log(chemical.selectedGroups);
              },
              onType: function(value) {
                  GroupService.searchGroups(value).then(function(res) {
                    chemical.groups = res.data.groups.data;
                  });
              }
          };
        }

        function checked(ppe) {
            if(!ppe.checked) {
                ppe.checked = true;
            } else {
                ppe.checked = false;
            }
        }

        function update() {

          var formData = new FormData();
          var imgFile = document.getElementById('chemical_image').files[0];
          var msdsFile = document.getElementById('msds').files[0];
          var selectedPpes = [];

          if(typeof imgFile != 'undefined') {
            if(imgFile.size > limitFile.size)
            {
              formData.append('image', false);
            } else {
              formData.append('image', imgFile);
              console.log('image found');
            }
          }

          if(typeof msdsFile != 'undefined') {
              if(msdsFile.size > limitFile.size)
              {
                  $("#c_msds").css({"border" : "1px solid red"});
                  formData.append('msds', false);
              } else {
                  formData.append('msds', msdsFile);
              }
          }

          for(var i in chemical.ppes) {
              if(chemical.ppes[i].checked) {
                  selectedPpes.push(chemical.ppes[i].id);
              }
          }

          chemical.view.ppes = selectedPpes;
          chemical.view.groups = chemical.selectedGroups;

          console.log(chemical.view.groups);
          for(var i in chemical.view) {
              if(chemical.view != null) {
                  formData.append(i, chemical.view[i]);
              }
          }

          ChemicalService.update($stateParams.id, formData).then(function(res) {
              if(res.data.result) {
              $state.go('main.chemical.view', {id:$stateParams.id});
              }else {
                console.log(res.data.result);
              }


          }).catch(function(res) {
              $scope.showToastr('error', res.data.message);
          });
        }
    }

    function ChemicalAssessmentsController(
        $stateParams,
        ChemicalService
    ) {

        var chem = this;
        chem.view = {};

        init();

        function init()
        {
            ChemicalService.view(
                $stateParams.id
            ).then(function(res) {
                chem.view = res.data.chemical.data;
                for(var i in chem.view.assessments)
                {
                    var assessment = chem.view.assessments[i];
                    assessment.form = JSON.parse(assessment.form);
                }

                console.log(chem.view);
            });
        }
    }

    function ChemicalAssessmentController(
        $state,
        $stateParams,
        ChemicalService
    ) {

        var chem = this;
        chem.view = {};

        init();

        function init()
        {

            if(!$stateParams.assessment)
            {
                $state.go('main.chemical.assessment-list', {id: $stateParams.id});
                return false;
            }

            if(!$stateParams.chemical)
            {
                $state.go('main.chemical.assessment-list', {id: $stateParams.id});
                return false;
            }

            chem.view = $stateParams.chemical;
            chem.asm = $stateParams.assessment;

            console.log('detail assessment');
            console.log($stateParams.id);
            console.log($stateParams.assessment);
            console.log($stateParams.chemical);
        }
    }
})();
