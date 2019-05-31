(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterObservationsController', RegisterObservationsController)
        .controller('RegisterInspectionsController', RegisterInspectionsController)
        .controller('RegisterInspectionSummaryController', RegisterInspectionSummaryController)
        .controller('RegisterInspectionEntryController', RegisterInspectionEntryController)
        .controller('RegisterObservationEntryController', RegisterObservationEntryController)
        .controller('RegisterCorrectiveActionsController', RegisterCorrectiveActionsController)
        .controller('RegisterObservationEditController', RegisterObservationEditController)
        .controller('CorrectiveActionsStatisticsParticipation', CorrectiveActionsStatisticsParticipation)
        .controller('CorrectiveActionsStatisticsResults', CorrectiveActionsStatisticsResults)
        .controller('ObservationsRegisterStatistics', ObservationsRegisterStatistics)
        .controller('ObservationsRegisterResults1', ObservationsRegisterResults1)
        .controller('ObservationsRegisterResults2', ObservationsRegisterResults2)
        .controller('InspectionsRegisterStatistics', InspectionsRegisterStatistics)
        .controller('InspectionsRegisterResults', InspectionsRegisterResults)
        .controller('OnlineTrainingController', OnlineTrainingController);

    function RegisterObservationsController (
        ObservationService,
        $state,
        $localStorage
    ) {
        var observation = this;
        observation.chart = {};
        observation.charts = {};
        observation.list = [];
        observation.modalErrors = [];

        observation.exportCsv = exportCsv;

        init();

        function init()
        {
            ObservationService.getRegister().then(function (res) {
                console.log(res);
                observation.list = res.data.observations.data;
                observation.charts = res.data.charts.data;
            });
        }

        function exportCsv()
        {
            console.log('export');

            observation.modalErrors = [];
            if(!observation.filter_from_date) {
                observation.modalErrors.push('From Date is required.');
            }

            if(!observation.filter_to_date) {
                observation.modalErrors.push('To Date is required.');
            }

            console.log(observation.modalErrors);

            if(observation.modalErrors.length > 0) {
                return false;
            }

            observation.filter_from_date = observation.filter_from_date.replace(/\//g, '-');
            observation.filter_to_date = observation.filter_to_date.replace(/\//g, '-');

            var location = 'export/company/' +
                $localStorage.currentUser.company.id_hash +
                '/csv/observation' +
                '?from=' +
                observation.filter_from_date +
                '&to=' + observation.filter_to_date;
            window.location = location;
        }
    }

    function RegisterObservationEditController (
        ObservationService,
        EmployeeService,
        $stateParams,
        $state,
        $scope
    ) {

        var observation = this;
        observation.view = {};
        observation.employees = [];
        observation.update = update;

        init();

        function init()
        {
            observation.config =
            {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                maxItems: 1,
                onChange: function(value) {
                    console.log('onChange', value);
                    if(value) {
                        observation.view.performed_by_id = value;
                    }
                },
                onType: function(value) {
                    EmployeeService.search(value).then(function(res)
                    {
                        console.log(res);
                        observation.employees = res.data.employees.data;

                        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                            $scope.$apply();
                        }
                    });
                }
            };

            observation.observationByConfig =
            {
                create: true,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                maxItems: 1,
                onChange: function(value) {
                    console.log('onChange', value);
                    if(value) {
                        observation.view.created_by_id = value;
                    }
                },
                onType: function(value) {
                    EmployeeService.search(value).then(function(res)
                    {
                        console.log(res);
                        observation.employees_observation_by = res.data.employees.data;

                        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                            $scope.$apply();
                        }
                    });
                }
            };

            ObservationService.getObservation($stateParams.id).then(function(res)
            {
                console.log(res);
                observation.view = res.data.observation.data;

                if(observation.view.inspector && typeof observation.view.inspector === 'object')
                {
                    observation.employees.push(observation.view.inspector);
                    observation.view.performed_by_id = observation.view.inspector.id;
                }

                if(observation.view.created_by && typeof observation.view.created_by === 'object')
                {
                    observation.employees_observation_by.push(observation.view.created_by);
                    observation.view.created_by_id = observation.view.created_by.id
                }

                setTimeout(function(){
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: {lat: 40.731, lng: -73.997}
                    });
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    geocodeLatLng(geocoder, map, infowindow, observation.view.location);
                }, 1000);
            });
        }

        function update()
        {

            var formData = new FormData();

            formData.append('seen', observation.view.seen);

            formData.append('further_action', observation.view.further_action);
            formData.append('status', observation.view.status);
            formData.append('action_performed', observation.view.action_performed);
            formData.append('description', observation.view.description);
            formData.append('due', observation.view.due);

            if(observation.view.performed_by_id) {
                formData.append('performed_by', observation.view.performed_by_id);
            }

            if(observation.view.created_by_id) {
                formData.append('created_by', observation.view.created_by_id);
            }

            console.log(observation.view);
            ObservationService.update(
                observation.view.id,
                formData
            ).then(function(res) {
                $state.go('main.register.observation-entry', {id: observation.view.id});
            });
        }

        function geocodeLatLng(geocoder, map, infowindow, latLng) {
            var latlngStr = latLng.split(',', 2);
            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log(results);
                        setTimeout(function(){
                            $(".classObservationAddress").text(results[1].formatted_address);
                        }, 200);
                        map.setZoom(11);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        infowindow.setContent(results[1].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }

    function RegisterObservationEntryController (
        ObservationService,
        $stateParams
    ) {

        var observation = this;
        observation.view = {};
        init();

        function init() {
            ObservationService.getObservation($stateParams.id).then(function(res) {
                console.log(res);
                observation.view = res.data.observation.data;

                setTimeout(function(){
                    console.log('llf');
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: {lat: 40.731, lng: -73.997}
                    });
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    geocodeLatLng(geocoder, map, infowindow, observation.view.location);
                }, 1000);
            });
        }

        function geocodeLatLng(geocoder, map, infowindow, latLng) {
            var latlngStr = latLng.split(',', 2);
            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log(results);
                        setTimeout(function(){
                            $(".classObservationAddress").text(results[1].formatted_address);
                        }, 200);
                        map.setZoom(11);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        infowindow.setContent(results[1].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }

    function RegisterInspectionsController (
        InspectionsService,
        $localStorage
    ) {
        var inspection = this;
        inspection.list = [];
        inspection.charts = {};
        inspection.modalErrors = [];

        inspection.exportCsv = exportCsv;
        init();

        function init() {
            InspectionsService.getRegister().then(function(res) {
                inspection.list = res.data.inspections.data;
                inspection.charts = res.data.charts.data;
                console.log(inspection.charts)
            });
        }
        function exportCsv()
        {
            console.log('export');

            inspection.modalErrors = [];
            if(!inspection.filter_from_date) {
                inspection.modalErrors.push('From Date is required.');
            }

            if(!inspection.filter_to_date) {
                inspection.modalErrors.push('To Date is required.');
            }

            console.log(inspection.modalErrors);

            if(inspection.modalErrors.length > 0) {
                return false;
            }

            inspection.filter_from_date = inspection.filter_from_date.replace(/\//g, '-');
            inspection.filter_to_date = inspection.filter_to_date.replace(/\//g, '-');

            var location = 'export/company/' +
                $localStorage.currentUser.company.id_hash +
                '/csv/inspection' +
                '?from=' +
                inspection.filter_from_date +
                '&to=' + inspection.filter_to_date;
            window.location = location;
        }
    }

    function RegisterInspectionSummaryController (
        InspectionsService,
        $stateParams,
        $state
    ) {
        var inspection = this;
        inspection.list = [];
        inspection.view = {};

        init();

        function init() {
            InspectionsService.getInspection($state.params.id).then(function(res) {
                inspection.view = res.data.inspection.data;
                console.log(inspection.view);
            });
        }
    }

    function RegisterInspectionEntryController (
        InspectionsService,
        $stateParams,
        $state,
        EmployeeService
    ) {
        var inspection = this;
        inspection.list = [];
        inspection.view = {};
        inspection.update = update;
        inspection.employees = [];
        init();

        inspection.config = {
            create: true,
            valueField: 'id',
            labelField: 'text',
            onChange: function(value){
                console.log('onChange', value)
                inspection.view.assigned_to = value;
            },
            onType: function(value) {
                EmployeeService.search(value).then(function(res) {
                    console.log(res);
                    var employees = res.data.employees.data;
                    for(var i in employees) {
                        var e = {
                            'id' : employees[i].id,
                            'text' : employees[i].name
                        };

                        inspection.employees.push(e);
                    }
                });
            },
            maxItems: 1,
            required: true,
        };

        function init() {
            InspectionsService.getInspectionItem(
                $state.params.id,
                $state.params.itemId
            ).then(function(res) {
                inspection.view = res.data.inspection_item.data;
                if(inspection.view.employee)
                {
                    var tEmployee = {
                        id: inspection.view.employee.id,
                        text: inspection.view.employee.fullname
                    };
                    inspection.assignTo = tEmployee.id;
                    inspection.employees.push(tEmployee);
                }
            });
        }

        function update() {
            console.log(inspection.view);
            var formData = new FormData();
            var file = document.getElementById('inspectionPhoto').files[0];
            if(typeof file != 'undefined') {
                console.log(file);
                formData.append('inspectionPhoto', file);
            }

            for(var i in inspection.view) {
                formData.append(i, inspection.view[i]);
            }
            InspectionsService.updateInspectionItem(
                inspection.view.inspection_id,
                inspection.view.id,
                formData
            ).then(function(res) {
                $state.go('main.register.inspection-summary', {id: inspection.view.inspection_id});
            });
        }
    }

    function RegisterCorrectiveActionsController(
        $state,
        RegisterService
    ) {

        var corrective         = this;

        corrective.open        = open;
        corrective.nextPage    = nextPage;
        corrective.prevPage    = prevPage;
        corrective.goPage      = goPage;
        corrective.currentPage = 1;
        corrective.pagination  = {};

        init();

        function init()
        {
            action();
        }

        function action(params)
        {
            if(typeof params === 'undefined')
            {
                params = '';
            }

            RegisterService.getCorrectiveActions(
                params
            ).then(function(res) {
                corrective.pagination = res.data.corrective_actions.data;
                corrective.list = corrective.pagination.data;
                corrective.charts = res.data.charts.data;
                console.log(corrective.pagination);
            });
        }

        function nextPage()
        {
            if(corrective.currentPage >=
                corrective.pagination.last_page
            ) {
                return false;
            }

            corrective.currentPage++;
            action('?page='+corrective.currentPage);
        }

        function prevPage()
        {
            if(corrective.currentPage <= 1) {
                return false;
            }

            corrective.currentPage--;
            action('?page='+corrective.currentPage);
        }

        function goPage(page)
        {
            corrective.currentPage = page;
            action('?page='+corrective.currentPage);
        }

        function open(item)
        {
            switch(item.type.text)
            {
                case 'inspection': {
                    $state.go('main.register.inspection-entry', {
                        id: item.inspection_item.inspection_id,
                        itemId: item.inspection_item.id
                    });
                    } break;
                case 'observation':{
                    $state.go('main.register.observation-entry', {
                        id: item.id
                    });
                    } break;
            }
        }

    }

    function OnlineTrainingController(
        RegisterService,
        $timeout
    ) {
        init();
        var vm = this;
        var _timeout;
        vm.search = search;

        function init()
        {
            RegisterService.getVideoCompletedTrainings('').then(function(res){
                console.log(res);
                vm.trainings = res.data.completed_trainings.data.data;
                vm.charts = res.data.charts.data;
            });
            console.log('OnlineTrainingController');
        }

        function search(keywords)
        {
            console.log(keywords);
            if(_timeout) { // if there is already a timeout in process cancel it
                $timeout.cancel(_timeout);
            }
            _timeout = $timeout(function() {
                console.log('filtering');
                RegisterService.getVideoCompletedTrainings(
                    keywords
                ).then(function(res) {
                    vm.trainings = res.data.completed_trainings.data.data;
                });
                _timeout = null;
            }, 500);
        }
    }

    function CorrectiveActionsStatisticsParticipation($scope, $controller){
        $scope.colors = [{
            backgroundColor      :"#157CC4",
            hoverBackgroundColor :"#157CC4",
            borderColor          :"#157CC4",
            hoverBorderColor     :"#157CC4"
        }];
        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.data = [
            [58, 18, 24, 37, 28, 35, 25, 31, 37, 21, 21, 27]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    scaleShowLabels : false,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    },
                    display: true,
                    gridLines: {
                        display: true,
                        offsetGridLines: false
                    },
                }]
            }
        };
    }

    function CorrectiveActionsStatisticsResults($scope, $controller){
        $scope.colors = ["#E97472", "#F29B50", "#63C169", "#83D0EE"];
        $scope.labels = ['OVERDUE - 100', 'IN PROGRESS - 250', 'OPEN - 250', 'CLOSED - 300'];
        $scope.data = [100, 250, 250, 300];
        $scope.options = {
            legend:
            {
                display: true,
                position: 'right',
                // labels: {
                //     fontColor: ["#E97472", "#F29B50", "#63C169", "#63C169"],
                //     generateLabels: function(chart) {
                //         console.log(chart);
                //     }
                // }
            }
        };
        $scope.dataset = {
            borderWidth: 0
        };
    }

    function ObservationsRegisterStatistics($scope, $controller){
        $scope.colors = [{
            backgroundColor      :"#023C6F",
            hoverBackgroundColor :"#023C6F",
            borderColor          :"#023C6F",
            hoverBorderColor     :"#023C6F"
        }];
        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.data = [
            [48, 18, 24, 37, 28, 35, 25, 31, 37, 21, 21, 27]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    scaleShowLabels : false,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    },
                    display: true,
                    gridLines: {
                        display: true,
                        offsetGridLines: false
                    },
                }]
            }
        };
    }

    function ObservationsRegisterResults1($scope, $controller){
        $scope.colors = ["#868E90", "#157CC4"];
        $scope.labels = ['PPE - 2', 'PLANT - 27'];
        $scope.data = [2, 27];
        $scope.options = {
            legend:
            {
                display: true,
                position: 'bottom',
            }
        };
        $scope.dataset = {
            borderWidth: 0
        };
    }

    function ObservationsRegisterResults2($scope, $controller){
        $scope.colors = ["#319A39", "#CF2A27"];
        $scope.labels = ['POSITIVE - 2', 'NEGATIVE - 27'];
        $scope.data = [2, 27];
        $scope.options = {
            legend:
            {
                display: true,
                position: 'bottom',
                // labels: {
                //     fontColor: ["#E97472", "#F29B50", "#63C169", "#63C169"],
                //     generateLabels: function(chart) {
                //         console.log(chart);
                //     }
                // }
            }
        };
        $scope.dataset = {
            borderWidth: 0
        };
    }

    function InspectionsRegisterStatistics($scope, $controller){
        $scope.colors = [{
            backgroundColor      :"#023C6F",
            hoverBackgroundColor :"#023C6F",
            borderColor          :"#023C6F",
            hoverBorderColor     :"#023C6F"
        }];
        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.data = [
            [28, 18, 24, 37, 28, 35, 25, 31, 37, 21, 21, 27]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    scaleShowLabels : false,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    },
                    display: true,
                    gridLines: {
                        display: true,
                        offsetGridLines: false
                    },
                }]
            }
        };
    }

    function InspectionsRegisterResults($scope, $controller){
        $scope.colors = ["#CF2A27", "#319A39"];
        $scope.labels = ['POSITIVE - 2', 'NEGATIVE - 129'];
        $scope.data = [2, 129];
        $scope.options = {
            legend:
            {
                display: true,
                position: 'right',
                // labels: {
                //     fontColor: ["#E97472", "#F29B50", "#63C169", "#63C169"],
                //     generateLabels: function(chart) {
                //         console.log(chart);
                //     }
                // }
            }
        };
        $scope.dataset = {
            borderWidth: 0
        };
    }

})();
