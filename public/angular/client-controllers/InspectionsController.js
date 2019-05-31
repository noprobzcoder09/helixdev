(function () {
    'use strict';

    angular
        .module('app')
        .controller('InspectionHomeController', InspectionHomeController)
        .controller('InspectionSetupController', InspectionSetupController)
        .controller('InspectionEntryController', InspectionEntryController)
        .controller('InspectionSummaryController', InspectionSummaryController)
        .controller('InspectionActionController', InspectionActionController);

    function InspectionHomeController(
        InspectionService,
        GroupService
    ) {
        var inspections = this;
        inspections.categories = [];
        inspections.outstanding_inspections = [];

        init();

        function init() {

            inspections.promise = InspectionService.getHome().then(function(res) {
                console.log(res);
                inspections.categories = res.data.categories.data;
                inspections.outstanding_inspections = res.data.outstanding_inspections.data;
                console.log(inspections.categories);
            });
        }
    }

    function InspectionSetupController(
        $state,
        $stateParams,
        InspectionService,
        GroupService,
        $scope
    ) {

        var inspection = this;
        inspection.setup = {};
        inspection.view = {};
        inspection.startPage = 1;
        inspection.groups = [];
        inspection.start = start;
        inspection.searchGroup = searchGroup;
        inspection.getGeoLocation = getGeoLocation;
        inspection.searchItem = [];
        inspection.config = {};
        init();

        function init()
        {

            inspection.config =
            {
                plugins: ['remove_button'],
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                onType: function(value) {
                    GroupService.searchGroups(value).then(function(res) {
                        inspection.searchItem = res.data.groups.data;
                        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                            $scope.$apply();
                        }
                    });
                }
            };

            inspection.promise = InspectionService.getInspection($stateParams.id, inspection.startPage).then(function(res)
            {
                var data = res.data.pagination.data.data;
                inspection.view = res.data.inspection.data;
            });

        }

        function getGeoLocation()
        {
            var x = document.getElementById("lat-long");
            var y = document.getElementById("addr");

            getLocation();

            function getLocation() 
            {
                if (navigator.geolocation) {
                    //navigator.geolocation.getCurrentPosition(showPosition);
                    x.innerHTML = '-27.3812533, 152.7130149';
                    y.innerHTML = 'Brisbane, Queensland, Australia';
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }

            function showPosition(position) {
                $("#inspectionLoader").css("display","none");
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': new google.maps.LatLng(position.coords.latitude, position.coords.longitude) }, function(results, status){
                    x.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
                    y.innerHTML = results[0].formatted_address;
                });
            }
        }

        function start()
        {
            inspection.setup.lat_long = $('#lat-long').text();
            inspection.setup.google_address = $('#addr').text();
            
            InspectionService.startSetup(
                $stateParams.id,
                inspection.setup
            ).then(function(res) {
                var newInsp = res.data.inspection.data;
                $state.go('main.inspections.entry', {
                    id: newInsp.id,
                    page: inspection.startPage
                });
            }).catch(function(res) {
                $scope.ajaxMessages(res);
            });
        }

        function searchGroup(keywords)
        {
            GroupService.search(
                keywords
            ).then(function(res) {
                inspection.groups = res.data.groups.data;
            });
        }
    }

    /* remz */
    function InspectionEntryController(
        $state,
        $stateParams,
        InspectionService,
        EmployeeService,
        $scope
    ) {
        var inspection = this;
        inspection.nextPage = nextPage;
        inspection.prevPage = prevPage;
        inspection.goPage = goPage;
        inspection.searchEmployees = searchEmployees;

        inspection.currentPage = $stateParams.page;
        inspection.pagination = {};
        inspection.pageItem = {};
        inspection.view = {};
        inspection.buttons = [];
        inspection.employees = [];
        inspection.link = {};
        init();

        function init()
        {

            inspection.config =
            {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                maxItems: 1,
                onType: function(value)
                {
                    console.log(value);
                    EmployeeService.searchEmployees(
                        value
                    ).then(function(res) {
                        console.log(res);
                    });
                }
            };

            console.log('InspectionEntryController');

            inspection.promise = EmployeeService.searchEmployees('').then(function(res) {
                inspection.employees = res.data.employees.data;
            });

            InspectionService.getInspection(
                $stateParams.id,
                inspection.currentPage
            ).then(function (res) {
                /* get inspection item */
                var pageItems = res.data.pagination.data.data;
                if (pageItems.length > 0 && pageItems.length == 1) {
                    inspection.view = res.data.inspection.data;
                    inspection.pageItem = pageItems[0];
                    inspection.pagination = res.data.pagination.data;

                    /* get buttons */
                    inspection.buttons = inspection.view.buttons[inspection.pageItem.options];
                    inspection.pageInfo = inspection.pagination.current_page + '/' + inspection.pagination.last_page;

                    console.log(res);
                } else {
                    $state.go('main.inspections.home');
                }
            });
        }

        function nextPage()
        {
            var formData = new FormData();
            var file = document.getElementById('idInspectionPhoto').files[0];
            
            if(typeof file != 'undefined') {
                formData.append('inspection_photo', file);
            }
            for(var i in inspection.pageItem)
            {
                if(inspection.pageItem[i] != null) {
                    formData.append(i, inspection.pageItem[i]);
                }
            }

            formData.append('inspection_link', JSON.stringify({'id': $state.params.id, 'item_id': inspection.pageItem.id}));

            InspectionService.updateInspectionItem(
                inspection.view.id,
                inspection.pageItem.id,
                formData
            ).then(function(res) {
                if(inspection.pagination.next_page_url == null) {
                    $state.go('main.inspections.summary', {id: inspection.view.id, lastPage:$stateParams.page});
                    return true;
                }
                inspection.goPage(inspection.pagination.next_page_url);
            }).catch(function(res) {
                $scope.ajaxMessages(res);
            });
        }

        function prevPage() {
            if(inspection.pagination.prev_page_url == null) {
                $state.go('main.inspections.setup', {id: inspection.view.id});
                return true;
            }
            inspection.goPage(inspection.pagination.prev_page_url);
        }

        function goPage(url)
        {
            InspectionService.goToPageUrl(url).then(function (res) {
                console.log(res);
                inspection.pagination = res.data.pagination.data;
                $state.go('main.inspections.entry', {
                    id: inspection.view.id,
                    page: inspection.pagination.from
                });
            });
        }

        function searchEmployees(keywords) {
            EmployeeService.searchEmployees(keywords).then(function(res) {
                inspection.employees = res.data.employees.data;
            });
        }
    }
    /* end remz */
    /* remz */

    function InspectionSummaryController(
        $state,
        $stateParams,
        InspectionService
    ) {
        var inspection = this;
        inspection.getTypeIcon = getTypeIcon;
        inspection.summary = summary;

        inspection.view = {};
        inspection.lastPage = $stateParams.lastPage;

        init();

        function init()
        {
            InspectionService.getInspection(
                $stateParams.id, 0
            ).then(function(res) {
                inspection.view = res.data.inspection.data;
                inspection.items = res.data.pagination.data.data;
            });
        }

        function getTypeIcon(item)
        {
            switch(item.answer) {
                case 1: { return 'fa fa-check' } break;
                case 2: { return 'fa fa-times' } break;
            }

            return false;
        }

        function summary()
        {
            InspectionService.summary(inspection.view.id).then(function(res) {
                $state.go('main.inspections.home');
            });
        }
    }

    function InspectionActionController(
        $scope,
        $state,
        $stateParams,
        InspectionService
    ) {

        var inspection = this;
        inspection.view = {};
        inspection.pageItem = {};

        inspection.done = done;
        init();

        function init()
        {
            inspection.promise = InspectionService.getInspection($stateParams.id, 1, $stateParams.itemId ).then(function(res) {

                inspection.view = res.data.inspection.data;
                inspection.pageItem = res.data.inspection_item.data;
                inspection.pagination = res.data.pagination.data;
                inspection.buttons = inspection.view.buttons[inspection.pageItem.options];
                inspection.pageInfo = inspection.pagination.current_page + '/' + inspection.pagination.last_page;
            });
        }

        function done()
        {
            var formData = new FormData();
            var file = document.getElementById('idInspectionPhoto').files[0];
            inspection.pageItem.isDone = true;
            if(typeof file != 'undefined') {
                formData.append('inspection_photo', file);
            }
            for(var i in inspection.pageItem) {
                if(inspection.pageItem[i] != null) {
                    formData.append(i, inspection.pageItem[i]);
                }
            }
            InspectionService.updateInspectionItem(inspection.view.id, formData).then(function(res)
            {
                $state.go('main.inspections.home');
            });
        }
    }

})();
