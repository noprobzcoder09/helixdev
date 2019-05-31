(function () {
    'use strict';

    angular
        .module('app')
        .factory('GlobalService', Service);

    function Service() {
        var service = {};
        service.setData = setData;
        service.getModules = getModules;
        service.global = {};
        return service;

        function setData(data)
        {
            console.log('setting global data in global service');
            service.global = data;
            console.log(service.global);
        }

        function getModules()
        {
            return service.global.modules;
        }
    }
})();