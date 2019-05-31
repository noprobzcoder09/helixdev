(function () {
	'use strict';

	angular
		.module('app')
		.factory('GreenhatService', GService);

	function GService($http, baseUrl) {

		var greenhatservices = {};

		greenhatservices.getDropdowns = getDropdowns;
		greenhatservices.getGreenhatData = getGreenhatData;
		greenhatservices.saveProgram = saveProgram;
		greenhatservices.sendKickOff = sendKickOff;
		greenhatservices.checkFeedback = checkFeedback;
		greenhatservices.submitFeedback = submitFeedback;
		greenhatservices.getRegisteredService = getRegisteredService;
		greenhatservices.getCorrectiveActionService = getCorrectiveActionService;
		greenhatservices.getProgramSignoff = getProgramSignoff;

		return greenhatservices;

		function getDropdowns() {
			return $http.get(baseUrl.portal + '/greenhat-dropdowns');
		}

		function getGreenhatData(user_id, company_id) {
			return $http.get(baseUrl.portal + '/get-greenhat-data/' + user_id + '/' + company_id);
		}

		function saveProgram(data) {
			return $http.post(
					baseUrl.portal + '/greenhat/program/save',
					data,
					{
						headers: {'Content-Type': undefined, 'Process-Data':false}
					}
				);
		}

		function sendKickOff(user_id, company_id) {
			return $http.post(
				baseUrl.portal + '/send-kickoff',
				{
					user_id,
					company_id
				}, 
				{
					headers: {'Content-Type': undefined, 'Process-Data':false}
				}
			);
		}

		function checkFeedback(employee, user_id, dept) {
			return $http.get(baseUrl.portal + '/check-feedback/' + employee + '/' + user_id + '/' + dept);
		};

		function submitFeedback(dynamic, comment, id, review_info) {
			return $http.post(
					baseUrl.portal + '/greenhat/feedback/save',
					{dynamic : dynamic, comment : comment, id : id, review_info : review_info},
					{
						headers: {'Content-Type' : undefined, 'Process-Data' : false}
					}
				);
		}

		function getRegisteredService() {
			return $http.get(baseUrl.portal + '/greenhat/registered');
		}


		function getCorrectiveActionService() {
			return $http.get(baseUrl.portal + '/greenhat/corrective-actions');
		}


		function getProgramSignoff(id){
			return $http.get(baseUrl.portal + '/greenhat/program/employee/'+id+'/reviews');	
		}



	}
})();
