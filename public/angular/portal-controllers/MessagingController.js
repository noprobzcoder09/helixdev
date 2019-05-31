(function () {
    'use strict';

    angular
        .module('app')        
        .controller('MessagingIndexController', MessagingIndexController)
        .controller('MessagingHistoryController', MessagingHistoryController)
        .controller('MessagingGroupRecipientController', MessagingGroupRecipientController)
        .filter('unique', unique);


    function unique(){
        return function(collection, keyname) {
            // we define our output and keys array;
            var output = [],
                keys = [];

            // we utilize angular's foreach function
            // this takes in our original collection and an iterator function
            angular.forEach(collection, function(item) {
                // we check to see whether our object exists
                var key = item[keyname];
                // if it's not already part of our keys array
                if(keys.indexOf(key) === -1) {
                    // add it to our keys array
                    keys.push(key);
                    // push this item to our final output array
                    output.push(item);
                }
            });
            // return our array which should be devoid of
            // any duplicates
            return output;
        };
    }


    function MessagingIndexController(
        MessagingService,
        $state,
        $stateParams,
        $localStorage,
        $scope,
        $rootScope,
        $filter
    ) {

        let messaging = this;

        //messaging.change = change;
        messaging.preview = preview;
        messaging.send = send;   
        

        init();
       
        function init(){
            //console.log($state.current.name);
            switch($state.current.name){
                case 'main.messaging.index' :{
                    
                    $scope.employeeRoleLists = [
                        {
                            id: 3,
                            desc: 'SEND TO SUPERVISORS',
                            name: 'SUPERVISOR',
                            value: 1,
                            checked: false,
                        },
                        {
                            id: 4,
                            desc: 'SEND TO LEADING HANDS',
                            name: 'LEADING HANDS',
                            value: 1,
                            checked: false,
                        },
                        {
                            id: 5,
                            desc: 'SEND TO MANAGEMENT TEAM',
                            name: 'MANAGEMENT TEAM ',
                            value: 1,
                            checked: false,
                        },
                    ];

                    $scope.deliveryMethodLists = [
                        {
                            id: 1,
                            desc: 'SEND via SMS',
                            name: 'SMS',
                            value: 1,
                            checked: false,
                        },
                        {
                            id: 2,
                            desc: 'SEND via Email',
                            name: 'Email',
                            value: 2,
                            checked: false,
                        },
                        {
                            id: 3,
                            desc: 'SEND via Portal',
                            name: 'Portal',
                            value: 3,
                            checked: false,
                        },
                    ];

                    //auto complete lists
                    MessagingService.getEmployees().then(function(res){
                        //console.log(res);
                        $scope.employeeLists = res.data.employees.data;
                    });


                    break;
                }

                case 'main.messaging.preview' :{

                    messaging.data = $localStorage.message;  
                    break;
                } 

                case 'main.messaging.view': {
                    MessagingService.view($stateParams.id).then(function(res){
                       //console.log(res);
                       messaging.data = res.data.message;
                       messaging.empRoles = JSON.parse( JSON.parse( res.data.message.alert[0].employee_roles ) );
                       messaging.method = JSON.parse( JSON.parse( res.data.message.alert[0].method ) );
                    }).catch(function(res) {
                        $scope.showToastr('error', res.data.message);
                    });
                    break;
                }

            }
        }

        function preview()
        {

            let employeeRoles = $filter('filter')($scope.employeeRoleLists, {checked: true});
            let deliveryMethods = $filter('filter')($scope.deliveryMethodLists, {checked: true});
            let individualRecipient = $scope.individualRecipient;
            let subject = ( $scope.subject ) ? $scope.subject : '';
            let body = ( $scope.body ) ? $scope.body : '';

            //console.log($scope.individualRecipient);

            let errors = [];

            /*if( employeeRoles.length == 0 ){
                errors.push('It requires at least 1 employee role.');
            }*/

            if( deliveryMethods.length == 0 ){
                errors.push('It requires at least 1 delivery method.');
            }

            if( subject == '' ){
                errors.push('It requires a subject.');
            }

            if( body == '' ){
                errors.push('It requires body.');
            }

            if(individualRecipient.length <= 0 && employeeRoles.length <= 0) {
                errors.push('It must have at least 1 recipient.');
            }

            if( errors.length > 0 ) {
                $scope.showToastr('error', errors);
            } else {

                //send to preview page
                let obj = {
                    'employeeRoles': employeeRoles,
                    'deliveryMethods': deliveryMethods,
                    'individualRecipient': individualRecipient,
                    'subject': subject,
                    'body' : body,
                };

                $localStorage.message = obj;
                $state.go('main.messaging.preview');
            }
           
        }

        function send()
        {
            let individual = [];
            let methods = [];
            let empRoles = [];


            //individual recepient
            if($localStorage.message.individualRecipient.length > 0)
            {
                angular.forEach($localStorage.message.individualRecipient, function(value, key) {
                  this.push(value.id);
                }, individual);
            }

            //delivery methods
            if($localStorage.message.deliveryMethods.length > 0){

                angular.forEach($localStorage.message.deliveryMethods, function(value, key) {
                  this.push(value.id);
                }, methods);
                                
            }

            //employee role
            if($localStorage.message.employeeRoles.length > 0){
                angular.forEach($localStorage.message.employeeRoles, function(value, key) {
                  this.push(value.id);
                }, empRoles);
            }

            /*let formData = {
                subject: $localStorage.message.subject,
                body: $localStorage.message.body,
                employee_role_id: empRoles,
                individual: individual,
                method: methods,
                type: 1//alert
            }*/

            let formData = new FormData();

            formData.append('subject',$localStorage.message.subject);
            formData.append('body',$localStorage.message.body);
            formData.append('employee_role_id',JSON.stringify( empRoles ) );
            formData.append('individual',JSON.stringify( individual ) );
            formData.append('method', JSON.stringify( methods ) );
            formData.append('type', 2);
            

            let send = MessagingService.send(formData).then(function(res){
                //console.log(res);
                $localStorage.message = {};
                $scope.showToastr('success', ['Your message successfully sent.']);
                $state.go('main.messaging.index');
                
            }).catch(function(res) {
                $scope.showToastr('error', res.data.message);
            });

        }
    }

    function MessagingHistoryController (
        MessagingService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {
        
        let messaging = this;

        init();

        function init(){

            //messaging history lists
            MessagingService.history(2).then(function(res){
                $scope.totalPage = res.data.messages.total
                $scope.messages = res.data.messages.data;
            });
        }
    }


    function MessagingGroupRecipientController (
        MessagingService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {

        let messagingGroupRecipient = this;
        messagingGroupRecipient.add = add;
        messagingGroupRecipient.readyDelete = readyDelete;
        messagingGroupRecipient.remove = remove;
        messagingGroupRecipient.data = [];
        messagingGroupRecipient.supervisors = [];
        messagingGroupRecipient.leadingHands = [];
        messagingGroupRecipient.managementTeam = [];
        messagingGroupRecipient.forDeletion = 0;


        init();

        //todo
        //update auto complete lists every user selected or was added

        function init(){

            //auto complete lists
            MessagingService.getEmployees().then(function(res){
                //console.log(res);
                $scope.employeeLists = res.data.employees.data;
            });

            //get group recipient lists
            MessagingService.getGroupRecipients().then(function(res){
                //messagingGroupRecipient.data = res.recipients;

                //regroup data based on employee role id
                if(res.data.recipients.length > 0){
                    for(var loop=0; loop < res.data.recipients.length;loop++){

                       var pushData = res.data.recipients[loop];


                        switch( res.data.recipients[loop].employee_role_id ){
                            case 3:
                                messagingGroupRecipient.supervisors.push(pushData);
                                break;

                            case 4:
                                messagingGroupRecipient.leadingHands.push(pushData);
                                break;

                            case 5:
                                messagingGroupRecipient.managementTeam.push(pushData);
                                break;

                            default:
                                break;
                        }

                    }
                }

                //console.log(messagingGroupRecipient.supervisors);

            });
        }

        function add(){
            let formData = new FormData();

            let recipients = [];

            for(let loop=0; loop < $scope.individualRecipient.length; loop++){
                recipients.push($scope.individualRecipient[loop].id);
            }

            //console.log(recipients);return false;

            formData.append('recipients',JSON.stringify(recipients));
            formData.append('role_id',$scope.role);

            MessagingService.addGroupRecipient(formData, function(res){
                //console.log(res);

                if( res.result ){
                    if( res.recipients.length > 0 ){
                        for(var loop = 0; loop < res.recipients.length; loop++){

                            var pushData = res.recipients[loop];

                            console.log(parseInt(res.recipients[loop].employee_role_id));

                            switch( parseInt(res.recipients[loop].employee_role_id) ){
                                case 3:
                                    //console.log(pushData);
                                    messagingGroupRecipient.supervisors.push(pushData);
                                    break;


                                case 4:
                                    messagingGroupRecipient.leadingHands.push(pushData);
                                    break;

                                case 5:
                                    messagingGroupRecipient.managementTeam.push(pushData);


                                default:
                                    break;
                            }
                        }

                    }

                }
            });
        }

        function readyDelete(id){
            messagingGroupRecipient.forDeletion = parseInt(id);
        }


        function remove(){
           console.log(messagingGroupRecipient.forDeletion);

            MessagingService.deleteGroupRecipient(messagingGroupRecipient.forDeletion).then(function(res){
                console.log(res);
                if( res.data.result ){
                    angular.element(document).find('#table-row-'+messagingGroupRecipient.forDeletion).remove();
                }
            });
        }



    }


})();