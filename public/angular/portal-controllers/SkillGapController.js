(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillGapController', Controller)
        .controller('SampleChart', SampleChart);

    function Controller(
        SkillGapService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {
      var skillGap = this;
      skillGap.list = [];
      skillGap.chart = {};
      skillGap.pie = {};
      skillGap.exportCsv = exportCsv;
      skillGap.modalErrors = [];
      skillGap.exportType = '';

      skillGap.chart.colors = [{
          backgroundColor      :"#157CC4",
          hoverBackgroundColor :"#157CC4",
          borderColor          :"#157CC4",
          hoverBorderColor     :"#157CC4"
      }];
      skillGap.pie.labels = ['SKILLS GAP', 'SKILLED'];
      skillGap.chart.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      skillGap.chart.options = {
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

      init();

      function init() {
        SkillGapService.list().then(function(res) {
          var data = [];

          skillGap.list = res.data.analytics.data.employees;

          skillGap.pie.data = [res.data.analytics.data.graph.skills_gap, res.data.analytics.data.graph.skilled];

          angular.forEach(res.data.analytics.data.graph.monthly_skilled, function(value, key) {
    					this.push(value);
    			}, data);
          skillGap.chart.data = data;
          console.log(skillGap.chart.data);
        });
      }


      function exportCsv() {
        skillGap.modalErrors = [];
        if(!skillGap.filter_from_date) {
            skillGap.modalErrors.push('From Date is required.');
        }

        if(!skillGap.filter_to_date) {
            skillGap.modalErrors.push('To Date is required.');
        }

        console.log(skillGap.modalErrors);

        if(skillGap.modalErrors.length > 0) {
            return false;
        }

        skillGap.filter_from_date = skillGap.filter_from_date.replace(/\//g, '-');
        skillGap.filter_to_date = skillGap.filter_to_date.replace(/\//g, '-');

        var target = skillGap.exportType == 'employee' ? 'skillsgap-by-employee' : 'skillsgap-by-month';

        var location = 'export/company/' +
          $localStorage.currentUser.company.id_hash +
          '/csv/' + target +
          '?from=' +
          skillGap.filter_from_date +
          '&to=' + skillGap.filter_to_date;

        window.location = location;
      }
    }

    function SampleChart($scope, $controller){
        $scope.colors = [{
            backgroundColor      :"#157CC4",
            hoverBackgroundColor :"#157CC4",
            borderColor          :"#157CC4",
            hoverBorderColor     :"#157CC4"
        }];
        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.data = [
            [0, 18, 24, 37, 28, 35, 25, 31, 37, 21, 21, 27]
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


})();
