
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlertIndexController', AlertIndexController)
        .controller('AlertHistoryController', AlertHistoryController);

    function AlertIndexController(
        MessagingService,
        $state,
        $stateParams,
        $localStorage,
        $scope,
        $rootScope,
        $filter,
        mFile
    ) {

        let alert = this;

        //messaging.change = change;
        alert.preview = preview;
        alert.send = send;
        alert.isImageUrl = isImageUrl;
        alert.data = [];
        alert.messages = [];
        init();

        function init(){
            switch($state.current.name){
                case 'main.alert.index' :{
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

                case 'main.alert.preview' :{
                  alert.data = $localStorage.alert;
                  alert.data.isImage = true;
                  console.log($localStorage.alert);

                  if(alert.data.file) {
                    if( angular.equals(alert.data.file, {}) ){
                      $state.go('main.alert.index');
                    }

                    var reader = new FileReader();

                    if(alert.data.file.type == 'application/pdf') {
                      alert.data.isImage = false;
                    } else {
                      reader.onload = function(){
                        var dataURL = reader.result;
                        var output = document.getElementById('output');
                        output.src = dataURL;
                      };
                      reader.readAsDataURL(alert.data.file);
                    }
                  }
                  break;
                }

                case 'main.alert.view': {

                    MessagingService.view($stateParams.id).then(function(res){

                       alert.data = res.data.message;
                       alert.empRoles = JSON.parse( JSON.parse( res.data.message.alert[0].employee_roles ) );
                       alert.method = JSON.parse( JSON.parse( res.data.message.alert[0].method ) );

                       console.log(alert.data);

                    }).catch(function(res) {
                        $scope.showToastr('error', res.data.message);
                    });
                    break;
                }

            }


        }

        function preview(event){

            let employeeRoles = $filter('filter')($scope.employeeRoleLists, {checked: true});
            let deliveryMethods = $filter('filter')($scope.deliveryMethodLists, {checked: true});
            let individualRecipient = $scope.individualRecipient;
            let subject = ( $scope.subject ) ? $scope.subject : '';
            let shortText = ( $scope.shortText ) ? $scope.shortText : '';
            let body = ( $scope.body ) ? $scope.body : '';
            let file = ( $scope.file ) ? $scope.file : '';

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

            if( errors.length > 0 ){
                $scope.showToastr('error', errors);
            }else{
                //send to preview page

                //console.log(subject);
                //console.log($scope.file);

                //console.log( document.getElementById('file_attachment').files[0] );

                //alert.attachment.push({object: document.getElementById('file_attachment').files[0]});
               /* $scope.test = document.getElementById('file_attachment').files[0];
                JSON.stringify();*/
                let attachment_file = ( typeof( document.getElementById('file_attachment').files[0] ) !='undefined' ) ?   document.getElementById('file_attachment').files[0] : '';

                //console.log(document.getElementById('file_attachment').files[0]);

                let obj = {
                    employeeRoles: employeeRoles,
                    deliveryMethods: deliveryMethods,
                    individualRecipient: individualRecipient,
                    subject: subject,
                    shortText : shortText,
                    body : body,
                    file : attachment_file,
                }

                //console.log(obj);

                $localStorage.alert = obj;
                $state.go('main.alert.preview');
            }

        }

        function send()
        {
            let individual = [];
            let methods = [];
            let empRoles = [];

            //individual recepient
            if($localStorage.alert.individualRecipient.length > 0){

                angular.forEach($localStorage.alert.individualRecipient, function(value, key) {
                  this.push(value.id);
                }, individual);

            }

            //delivery methods
            if($localStorage.alert.deliveryMethods.length > 0){

                angular.forEach($localStorage.alert.deliveryMethods, function(value, key) {
                  this.push(value.id);
                }, methods);

            }

            //employee role
            if($localStorage.alert.employeeRoles.length > 0){

                angular.forEach($localStorage.alert.employeeRoles, function(value, key) {
                  this.push(value.id);
                }, empRoles);

            }

            let formData = new FormData();

            formData.append('subject',$localStorage.alert.subject);
            formData.append('short_text',$localStorage.alert.shortText);
            formData.append('body',$localStorage.alert.body);
            formData.append('employee_role_id',JSON.stringify( empRoles ) );
            formData.append('individual',JSON.stringify( individual ) );
            formData.append('method', JSON.stringify( methods ) );
            formData.append('type', 1);
            formData.append('file',$localStorage.alert.file);


            MessagingService.send(formData).then(function(res){
                $localStorage.alert = {};
                $scope.showToastr('success', res.data.messages);
                $state.go('main.alert.index');
            });
        }

        function isImageUrl(url)
        {
            console.log(url);
            if(mFile.check.isImageUrl(url))
            {
                console.log('is image');
                return true;
            }
            return false;
        }
    }

    function AlertHistoryController (
        MessagingService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {

        let alert = this;

        init();

        function init(){
            /* messaging history lists */
            MessagingService.history(1).then(function(res){
                console.log(res.data);
                $scope.totalPage = res.data.messages.total
                $scope.messages = res.data.messages.data;
            });
        }
    }
})();
