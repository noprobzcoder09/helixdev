(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillRequirementsController', Controller);

    function Controller(
        SkillRequirementsService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {

      var skillReq = this;
      skillReq.add = add;
      skillReq.remove = remove;
      skillReq.addSkill = addSkill;
      skillReq.removeSkill = removeSkill;

      skillReq.new = {};
      skillReq.lists = [];
      skillReq.skillLists = [];
      skillReq.skillName = {};
      skillReq.role = {};

      init();

      function init() {

        switch ($state.current.name) {
          case 'main.skill-requirements.skills':
          
            SkillRequirementsService.getRole($stateParams.id).then(function(res) {
              skillReq.role = res.data.roles.data;
              skillReq.skillList = res.data.roles.data.skills;
            });

            // SkillRequirementsService.skillList($stateParams.id).then(function(res) {
            //   skillReq.skillList = res.data.skills.data;
            // });
            break;

          default:
            SkillRequirementsService.list().then(function(res) {
              skillReq.lists = res.data.roles.data;
              console.log(skillReq.lists);
            });
            break;
        }
      }

      function add () {
        console.log(skillReq.new);
        SkillRequirementsService.addRole(skillReq.new).then(function(res) {
          console.log(res);
          skillReq.lists.push(res.data.roles.data);
        });
      }

      function remove () {
        console.log(skillReq.lists);
        var prompt = confirm('Confirm delete this role?');

        if ( ! prompt) return;

        SkillRequirementsService.removeRole($stateParams.id).then(function(res) {
          $state.go('main.skill-requirements.list');
        });
      }

      function addSkill () {
        console.log(skillReq.skillName);
        SkillRequirementsService.addSkill($stateParams.id, skillReq.skillName).then(function(res) {
          skillReq.skillList.push(res.data.roles.data);
        });
      }

      function removeSkill ( id ) {
        SkillRequirementsService.removeSkill($stateParams.id, id).then(function(res) {
          $state.reload('main.skill-requirements.skills', {id: $stateParams.id});
        });
      }

    }
})();
