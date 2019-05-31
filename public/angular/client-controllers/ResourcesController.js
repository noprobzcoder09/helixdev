(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourcesController', Controller);

    function Controller(
        ResourceService,
        mFile
    ) {
        var resource = this;
        resource.categories = [];
        resource.initView = initView;
        resource.mFile = mFile;
        init();

        function init()
        {
            ResourceService.getCategories().then(function(res){
                resource.categories = res.data.categories.data;
            });
        }

        function initView(item, category)
        {
            resource.view = item;
            resource.category = category;
        }
    }
})();