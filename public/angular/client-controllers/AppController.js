(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', Controller)
        .controller('DropdownCtrl', DropdownCtrl)
        .directive('chosen', chosenCtrl);

    function Controller(
        $scope,
        $state,
        $http
    ) {

        console.log('---------------- APP CONTROLLER -------------------');
        $scope.currentPath = 'dashboard';
        $scope.app = {};
        $scope.app.selectizeConfig = {
            multiple: {
                plugins: ['remove_button'],
                valueField: 'id',
                labelField: 'name'
            },
            single: {
                maxItems:1,
                valueField:'id',
                labelField:'name'
            }
        };

        $scope.path = function(path) {
            $scope.currentPath= path;
        };

        $scope.checkCondition = function() {
            switch($state.current.name) {
                case 'main.ohs.dashboard': {
                    return true;
                }
                case 'main.safety-videos.list': {
                    return true;
                }
                case 'main.safety-videos.view': {
                    return true;
                }
                case 'main.safety-videos.add': {
                    return true;
                }
                case 'main.safety-videos.edit': {
                    return true;
                }
                case 'main.inspections.list': {
                    return true;
                }
            }
            return false;
        };


        $scope.$watch(function() {
            return $state.$current.name
        }, function(newVal, oldVal){
            if(newVal == 'main.home') {
                $scope.showNav = true;
                $scope.myPromise = $http.get('https://jsonplaceholder.typicode.com/posts').then(function(){
                });
            } else {
                $scope.showNav = false;
                $scope.myPromise = $http.get('https://jsonplaceholder.typicode.com/posts').then(function(){
                });
            }
        });

        $scope.showToastr = showToastr;
        $scope.hasValue = hasValue;
        $scope.ajaxMessages = ajaxMessages;

        /**
         * @params ------ response from ajax
         * obj - config, data, headers, status, statusText
         * output - it will display a toaster message
         */
        function ajaxMessages(obj)
        {
            var status = '';

            toastr.remove();


            switch(obj.status)
            {
                case 200: {
                    status = 'success';
                    } break;
                case 400: {
                    status = 'error';
                    } break;
                default: {
                    status = 'error';
                    } break;
            }

            if(obj.data.hasOwnProperty('message'))
            {
                var messages = obj.data.message

                for(var i in messages)
                {
                    for(var x in messages[i])
                    {
                        toastr[status](messages[i][x]);
                    }
                }
            }
        }

        function showToastr(status, message)
        {
            var i;
            toastr.remove();

            if(typeof message == 'object')
            {
                for (i in message)
                {
                    if (message.hasOwnProperty(i))
                    {
                        if(message[i].hasOwnProperty('type'))
                        {
                            status = message[i].type;
                            toastr[status](message[i].message);
                        } else {
                            toastr[status](message[i]);
                        }
                    }
                }
            } else {
                toastr[status](message);
            }
        }

        function hasValue(val)
        {
            if(typeof val == 'undefined') {
                return false;
            }

            if(val == '') {
                return false;
            }
            return true;
        }
    }


    function DropdownCtrl($scope, $log){
        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }

    function chosenCtrl($timeout) {
        var linker = function(scope, element, attr) {
            scope.$watch('states', function() {
                $timeout(function() {
                    element.trigger('chosen:updated');
                }, 1000, false);
            }, true);
            $timeout(function() {
                element.chosen();
            }, 1000, false);
        };
        return {
            restrict : 'A',
            link     : linker
        };
    }

})();
