(function () {
    'use strict';

    angular
        .module('app')
        .controller('CompanyController', CompanyController)
        .controller('CompanyAddController', CompanyAddController)
        .controller('CompanyEditController', CompanyEditController);

    function CompanyController($http, baseUrl)
    {
        var company = this;
        company.companies = [];

        init();

        function init()
        {
            $http.get(baseUrl.helix_admin + '/company/lists').then(function(res){
                company.companies = res.data.companies.data;
            });
        }

    }

    function CompanyAddController(
        $http, 
        GlobalService, 
        baseUrl,
        $state
    ) {
        var company = this;
        company.save = save;
        company.new = {};
        company.modules = GlobalService.global.modules;

        init();

        function init()
        {

        }

        function save()
        {
            console.log(company.new);
            var filteredModules = [];
            var formData = new FormData();
            var companyLogo = document.getElementById('company_logo').files[0];

            for(var i in company.modules)
            {
                var module = company.modules[i];
                if(module.isChecked) {
                    filteredModules.push(module.key);
                }
            }
            company.new.modules = filteredModules;

            if(typeof companyLogo != 'undefined') {
                formData.append('company_logo', companyLogo);
            }

            for(var i in company.new) {
                formData.append(i, company.new[i]);
            }

            $http.post(baseUrl.helix_admin + '/company/add', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}}).then(function(res) {
               $state.go('main.companies.list');
            });
        }
    }

    function CompanyEditController(
        $http,
        $stateParams,
        $state,
        baseUrl,
        GlobalService
    ) {
        var company = this;
        company.update = update;
        company.view = {};
        company.modules = angular.copy(GlobalService.global.modules);

        init();

        function init()
        {
            $http.get(baseUrl.helix_admin + '/company/' + $stateParams.id + '/view').then(function(res) {
                company.view = res.data.company.data;
                var modules = company.view.modules;

                for(var i in modules) {
                    var module = modules[i];
                    console.log(module);
                    for(var x in company.modules) {
                        if(module.key == company.modules[x].key) {
                            company.modules[x].isChecked = true;
                        }
                    }
                }
            });
        }

        function update()
        {
            console.log(company.new);
            var filteredModules = [];
            var formData = new FormData();
            var companyLogo = document.getElementById('company_logo').files[0];

            for(var i in company.modules)
            {
                var module = company.modules[i];
                if(module.isChecked) {
                    filteredModules.push(module.key);
                }
            }
            company.view.modules = filteredModules;

            if(typeof companyLogo != 'undefined') {
                formData.append('company_logo', companyLogo);
            }

            for(var i in company.view) {
                formData.append(i, company.view[i]);
            }

            console.log(companyLogo);
            console.log(company.view);
            $http.post(baseUrl.helix_admin + '/company/' + company.view.id +'/update', formData, {headers: {'Content-Type': undefined, 'Process-Data':false}}).then(function(res) {
                $state.go('main.companies.list');
            });
        }

    }
})();
