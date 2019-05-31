(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', Controller)
        .controller('DropdownCtrl', DropdownCtrl)
        .controller('ImageCtrl', ImageCtrl)
        .directive('chosen', chosenCtrl)
        .directive('colorbox', colorboxCtrl);

    function Controller($scope, $state)
    {
        $scope.currentPath = 'dashboard';
        $scope.app = {};
        $scope.app.helix_logo = '../../img/Helix-Solutions-bw.png';

        $scope.path = function(path) {
            $scope.currentPath= path;
        };

        $scope.app.checkCurrentPagination = function(page, currentPage)
        {
            if(page == currentPage) {
                return true
            }
            return false;
        };

        $scope.app.checkAdminHighlight = function()
        {
            switch($state.current.name) {
                case 'main.admin.dashboard':
                {
                    return true;
                }
                case 'main.admin.crew-list':
                {
                    return true;
                }
                case 'main.admin.project-list':
                {
                    return true;
                }
                case 'main.admin.resources':
                {
                    return true;
                }
            }
            return false;
        };

        $scope.checkCondition = function()
        {
            switch($state.current.name)
            {
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
                case 'main.inspections.view': {
                    return true;
                    }
                case 'main.register.observations': {
                    return true;
                    }
                case 'main.register.inspections': {
                    return true;
                    }
                case 'main.register.inspection-summary': {
                    return true;
                    }
                case 'main.register.inspection-entry': {
                    return true;
                    }
                case 'main.register.observation-entry': {
                    return true;
                    }
                case 'main.chemical.list': {
                    return true;
                    }
                case 'main.chemical.add': {
                    return true;
                    }
                case 'main.chemical.view': {
                    return true;
                    }
                case 'main.chemical.assessment-list' : {
                    return true;
                    }
                case 'main.chemical.assessment-open' : {
                    return true;
                }
                case 'main.register.observation-edit': {
                    return true;
                    }
                case 'main.register.corrective-actions': {
                    return true;
                    }
                case 'main.erp.list': {
                    return true;
                    }
                case 'main.golden-rules.list': {
                    return true;
                    }
                case 'main.messaging.index': {
                    return true;
                    }
                case 'main.messaging.preview': {
                    return true;
                    }
                case 'main.messaging.history': {
                    return true;
                    }
                case 'main.messaging.view': {
                    return true;
                    }
                case 'main.alert.index': {
                    return true;
                    }
                case 'main.alert.history': {
                    return true;
                    }
                case 'main.alert.view': {
                    return true;
                    }
                case 'main.online-training.list': {
                    return true;
                    }
            }
            return false;
        };

        $scope.showToastr = showToastr;
        $scope.hasValue = hasValue;
        
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
            console.log('true');
            return true;
        }

        var focusElement = function() {
            self.element[0].focus();
        };

        $scope.$on('uib:datepicker.focus', focusElement);
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
            scope.$watch('inspectionsList.itemCategories', function() {
                $timeout(function() {
                    element.trigger('chosen:updated');
                }, 0, false);
            }, true);

            scope.$watch('inspectionsView.itemCategories', function() {
                $timeout(function() {
                    element.trigger('chosen:updated');
                }, 0, false);
            }, true);

            scope.$watch(attr.ngChosen, function() {
                $timeout(function() {
                    element.trigger('chosen:updated');
                }, 0, false);
            }, true);
            $timeout(function() {
                element.chosen();
            }, 0, false);
        };
        return {
            restrict : 'A',
            link     : linker
        };
    }

    function colorboxCtrl($compile, $rootScope) {
      return {
        restrict: 'AC',
        link: function (scope, element, attrs) {
          $(element).colorbox({rel:'test-cbox'});
        }
      }
    }

    function ImageCtrl($scope){
        var vm = this;

        vm.cropperApi;

        vm.getCropperApi = function(api) {
            api.zoomIn(0);
            api.zoomOut(0);
            api.rotate(0);
            api.fit();
            vm.resultImage = api.crop();
        };

        vm.cropperApi = function(cropperApi) {
            cropperApi.fit();
            vm.resultImage = cropperApi.crop();
            $scope.$apply(); // Apply the changes.
        };

        vm.updateResultImage = function(base64) {
            vm.resultImage = base64;
            $scope.$apply(); // Apply the changes.
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

})();
