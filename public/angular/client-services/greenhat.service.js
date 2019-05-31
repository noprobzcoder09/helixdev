(function () {
	'use strict';

	angular
		.module('app')
		.factory('GreenhatService', Service);

	function Service($http, $localStorage, baseUrl) {

		var service = {};

		service.submitFeedback = submitFeedback;
		service.checkFeedback = checkFeedback;
		service.baseUrl = baseUrl.client + '/company/' + $localStorage.currentUser.company.id_hash + '/client';
		
		return service;

		
		function submitFeedback(formData) {			
			return $http.post(service.baseUrl + '/greenhat/feedback/save', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
		}


		function checkFeedback(formData){
			return $http.post(service.baseUrl + '/greenhat/feedback/check', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
		}

	}
})();
