(function () {
	'use-strict';

	angular
		.module('app')
		.controller('ProfileEditController', ProfileEditController);

	function ProfileEditController(
		$localStorage,
		$state,
		$scope,
		EmployeeService
	) {

		var profile = this;

		profile.update = update;
		profile.user = {};

		init();

		function init()
		{
			console.log('ProfileEditController');
			console.log($localStorage);

			if(!$localStorage.hasOwnProperty('currentUser') || jQuery.isEmptyObject($localStorage.currentUser))
			{
				$state.go('main.dashboard');
				return false;
			}

			if(!$localStorage.hasOwnProperty('states') && $localStorage.states.length <= 0) {
				$state.go('main.dashboard');
				return false;
			}

			profile.user = $localStorage.currentUser.user;
			profile.states = $localStorage.states;
			profile.statesConfig = {
				valueField: 'id',
				labelField: 'name',
				searchField: ['name'],
				maxItems: 1,
				onChange: function(value){
					console.log('onChange', value)
				}
			};
		}

		function update()
		{

			var formData = new FormData();

			for(var i in profile.user)
			{
				formData.append(i, profile.user[i]);
			}

			var file = document.getElementById('avatar').files[0];
	
			if(typeof file != 'undefined') {
				formData.append('avatar', file);
			}

			EmployeeService.updateProfile(
				profile.user.id,
				formData
			).then(function() {
				$scope.showToastr('success', 'You have successfully updated your profile');
			}).catch(function(){
				$scope.showToastr('success', 'Update failed');

			});
		}
	}
})();
