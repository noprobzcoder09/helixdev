(function () {
    'use strict';

    angular
        .module('app')
        .controller('ErpHomeController', ErpHomeController);

    function ErpHomeController(
        ErpService
    ) {
        var erp = this;
        erp.categories = {};

        init();
        
        function init()
        {
            console.log('erp');
            ErpService.getCategories().then(function(res){
                erp.categories = res.data.categories.data;
            });
        }
    }
})();
