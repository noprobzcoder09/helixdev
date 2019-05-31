(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', Controller)
        .controller('OverallStatistics', OverallStatistics)
        .controller('SubconStatistics', SubconStatistics)
        .controller('HRStatistics', HRStatistics)
        .controller('OHSStatistics', OHSStatistics);

    function Controller(
        $localStorage,
        $scope,
        RegisterService
    ) {
        var main = this;
        main.charts = {};

        initController();

        function initController()
        {
            if($localStorage.currentUser) {
                main.currentUser = $localStorage.currentUser;
                $scope.bgLogin = false;
            }

            RegisterService.getCorrectiveActions().then(function(res)
            {
                main.charts.corrective_actions = res.data.charts.data;
            });

            RegisterService.getInspections().then(function(res)
            {
                main.charts.inspections = res.data.charts.data;
            });

            RegisterService.getObservations().then(function(res)
            {
                main.charts.observations = res.data.charts.data;
                main.charts.observations.bar_graph.colors = ['#FF5252'];
                console.log(main);
            });

            RegisterService.getSkillGaps().then(function(res)
            {
                main.charts.skill_gaps = res.data.charts.data;
            });
        }
    }

    function OverallStatistics($scope) {
        $scope.colors = ['#45b7cd', '#ff6384'];
        $scope.labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [30, 10, 20, 25, 35, 20, 30, 40, 35, 50, 15, 40],
            [5, 15, 28, 10, 15, 25, 18, 15, 39, 35, 11, 22]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        $scope.options = {
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    scaleShowLabels : false,
                    ticks: {
                        beginAtZero: true
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

    function SubconStatistics($scope){
        // $scope.colors = ['#f1a296'];
        $scope.colors = [{
            backgroundColor      :"#F1A296",
            hoverBackgroundColor :"#F1A296",
            borderColor          :"#F1A296",
            hoverBorderColor     :"#F1A296"
        }];
        $scope.labels = ["2011", "2012", "2013", "2014", "2015", "2016"];
        $scope.data = [
            [23, 26, 32, 30, 31, 35]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

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
                        beginAtZero: true
                    },
                    display: true,
                    gridLines: {
                        display: true
                    },
                }]
            }
        };
    }

    function HRStatistics($scope){
        // $scope.colors = ['#7EE4BE'];
        $scope.colors = [{
            backgroundColor      :"#7EE4BE",
            hoverBackgroundColor :"#7EE4BE",
            borderColor          :"#7EE4BE",
            hoverBorderColor     :"#7EE4BE"
        }];
        $scope.labels = ["2011", "2012", "2013", "2014", "2015", "2016"];
        $scope.data = [
            [23, 26, 32, 30, 31, 35]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

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
                        beginAtZero: true
                    },
                    display: true,
                    gridLines: {
                        display: true
                    },
                }]
            }
        };
    }

    function OHSStatistics($scope){
        // $scope.colors = ['#83D0EE'];
        $scope.colors = [{
            backgroundColor      :"#83D0EE",
            hoverBackgroundColor :"#83D0EE",
            borderColor          :"#83D0EE",
            hoverBorderColor     :"#83D0EE"
        }];
        $scope.labels = ["2011", "2012", "2013", "2014", "2015", "2016"];
        $scope.data = [
            [23, 26, 32, 30, 31, 35]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

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
                        beginAtZero: true
                    },
                    display: true,
                    gridLines: {
                        display: true
                    },
                }]
            }
        };
    }

})();