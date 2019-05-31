(function () {
    'use strict';

    angular
        .module('app')
        .factory('MessagingService', Service);

    function Service($http, baseUrl, $localStorage)
    {

    	let service = {};
        
        service.baseUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/message';
        service.employeeListUrl = baseUrl.portal + '/company/' + $localStorage.currentUser.company.id_hash + '/employee';
        service.history = history;
        service.getEmployees = getEmployees;
        service.send = send;
        service.view = view;
        service.addGroupRecipient = addGroupRecipient;
        service.getGroupRecipients = getGroupRecipients;
        service.deleteGroupRecipient = deleteGroupRecipient;

        return service;

        function history(type)
        {
            return $http.get(service.baseUrl + '/' + type + '/history');
        }
        
        function getEmployees(){
           return $http.get(service.employeeListUrl + '/lists'); 
        }     

        function send(formData){
            return $http.post(service.baseUrl + '/send', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}});
        }

        function view(id){
        	return $http.get(service.baseUrl + '/' +id+ '/view'); 
        }

        function addGroupRecipient(data, callback){
            $http.post(service.baseUrl + '/group-recipient/add', data, {headers: {'Content-Type': undefined, 'Process-Data':false}})
                .success(function (res) {
                    //return res;
                    if (res.result) {
                        callback(res);
                    } else {
                        callback(false);
                    }
                });

            return true;
        }

        function getGroupRecipients(){
            return $http.get(service.baseUrl + '/group-recipient/lists');
        }

        function deleteGroupRecipient(id){
            return $http.get(service.baseUrl + '/group-recipient/'+id+'/delete');
        }
        
    }
})();
