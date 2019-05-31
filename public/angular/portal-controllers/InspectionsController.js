(function () {
    'use strict';

    angular
        .module('app')
        .controller('InspectionsListController', InspectionsListController)
        .controller('InspectionsViewController', InspectionsViewController)
        .controller('InspectionsSummaryController', InspectionsSummaryController);

    function InspectionsListController(
        InspectionsService,
        $state,
        $scope
    ) {

        var inspectionsList = this;

        inspectionsList.add = add;
        inspectionsList.select = select;
        inspectionsList.update = update;

        inspectionsList.view = {};
        inspectionsList.categories = [];
        inspectionsList.itemCategories = [];
        inspectionsList.inspection_options = [];
        inspectionsList.list = [];
        inspectionsList.new = {};
        inspectionsList.new.items = [{}];

        init();

        function init()
        {
            InspectionsService.getCategories().then(function(res)
            {
                inspectionsList.categories = res.data.categories.data;
                inspectionsList.itemCategories = res.data.item_categories.data;
                inspectionsList.inspection_options = res.data.inspection_options.data;
                inspectionsList.list = res.data.inspections.data;
            });
        }

        function select(ins)
        {
            inspectionsList.view = ins;
        }

        function update()
        {
            InspectionsService.updateInspection(
                inspectionsList.view.id,
                inspectionsList.view
            ).then(function(res) {
                $state.reload();
            });
        }

        function add()
        {
            for(var x in inspectionsList.new.items) {
                inspectionsList.new.items[x].inspection_item_category_id = inspectionsList.itemCategorySelected.id
            }

            InspectionsService.addInspection(inspectionsList.new).then(function(res) {
                var id = res.data.new_inspection_id.data;
                $state.go('main.inspections.view', {id:id, isFinalize:1});
            }).catch( function(res) {
                $scope.showToastr('error', res.data.message);
            });
        }

        $scope.$watch('inspectionsList.itemCategorySelected', function(newVal, oldVal)
        {
            if($scope.hasValue(newVal) && $scope.hasValue(newVal.add)) {
                var category = prompt("Enter New Sub-category");
                if(category != null) {
                    InspectionsService.addItemCategory({name: category}).then(function(res){
                        var newCategory = res.data.new_item_category.data;
                        inspectionsList.itemCategorySelected = newCategory;
                        inspectionsList.itemCategories.unshift(newCategory);
                    });
                } else {
                    inspectionsList.itemCategorySelected = {};
                }
            }
        });
    }

    function InspectionsViewController (
        InspectionsService,
        $state,
        $stateParams,
        $localStorage,
        $location,
        $scope
    ) {

        var inspectionsView = this;

        inspectionsView.addTrigger = addTrigger;
        inspectionsView.add = add;
        inspectionsView.remove = remove;
        inspectionsView.viewItem = viewItem;
        inspectionsView.deleteItem = deleteItem;
        inspectionsView.updateItem = updateItem;

        inspectionsView.popup = 0;
        inspectionsView.list = {};
        inspectionsView.items = [];
        inspectionsView.itemCategories = [];
        inspectionsView.inspection_options = [];
        inspectionsView.update = {};
        inspectionsView.update.items = [{}];
        inspectionsView.itemData = {};
        inspectionsView.isFinalize = false;
        inspectionsView.newItem = {};

        init();

        function init()
        {
            if($state.params.isFinalize)
            {
                inspectionsView.isFinalize = true;
            }

            InspectionsService.getCategories().then(function(res) {
                inspectionsView.itemCategories = res.data.item_categories.data;
                inspectionsView.inspection_options = res.data.inspection_options.data;
            });

            InspectionsService.getInspectionList($stateParams.id).then(function(res)
            {
                inspectionsView.list = res.data.inspection.data;
                inspectionsView.items = res.data.inspection.data.items;
            }).catch(function(res){});
        }

        function addTrigger()
        {
            inspectionsView.popup = 1;
            inspectionsView.itemData = {}
        }

        function add()
        {

            inspectionsView.newItem.inspection_item_category_id = inspectionsView.newItem.itemCategorySelected.id;

            InspectionsService.addInspectionItem(
                $stateParams.id,
                inspectionsView.newItem
            ).then(function(res) {
                $state.reload($state.$current.self.name);
            }).catch( function(res) {
                $scope.showToastr('error', res.data.message);
            });
        }

        function remove()
        {
            InspectionsService.removeInspection(
                $stateParams.id
            ).then(function() {
                $state.go('main.inspections.list');
            });
        }

        function viewItem(item)
        {
            console.log(item);
            if(item.not_applicable == 1) {
                item.not_applicable = true
            }
            delete inspectionsView.itemData;
            inspectionsView.itemData = angular.copy(item);
            inspectionsView.popup = 2;
        }

        function deleteItem(item)
        {
            InspectionsService.deleteItem(
                $stateParams.id,
                item.id
            ).then(function(res) {
                $state.reload('main.inspections.view', {id: $stateParams.id});
            })
        }

        function updateItem(item)
        {
            
            var formData = new FormData();

            for(var i in item) {
                formData.append(i, item[i]);
            }

            InspectionsService.updateInspectionItem(
                $stateParams.id,
                inspectionsView.itemData.id,
                formData
            ).then(function(res) {
                $state.reload($state.$current.self.name);
            });
        }

        $scope.$watch('inspectionsView.itemCategorySelected', function(newVal, oldVal)
        {
            console.log('llf');
            console.log(newVal);
            if($scope.hasValue(newVal) && $scope.hasValue(newVal.add) || newVal == 'Other/Add') {
                var category = prompt("Enter a New Sub-category");
                if(category != null) {
                    InspectionsService.addItemCategory({name: category}).then(function(res){
                        var newCategory = res.data.new_item_category.data;
                        inspectionsView.itemCategorySelected = newCategory;
                        inspectionsView.itemCategories.unshift(newCategory);
                    });
                } else {
                    inspectionsView.itemCategorySelected = {};
                }
            }
        });
    }

    function InspectionsSummaryController (
        InspectionsService,
        $state,
        $stateParams,
        $localStorage,
        $scope
    ) {

        var inspectionsSummary = this;

        inspectionsSummary.list = {};
        inspectionsSummary.items = [];
        inspectionsSummary.items.option_btn = [];

        inspectionsSummary.itemCategories = [];
        inspectionsSummary.inspection_options_btn = [];
        inspectionsSummary.inspection_options = [];

        init();

        function init() {
            InspectionsService.getCategories().then(function(res) {
                inspectionsSummary.itemCategories = res.data.item_categories.data;
                inspectionsSummary.inspection_options = res.data.inspection_options.data;
                inspectionsSummary.inspection_options_btn = res.data.inspection_options_btn.data;
                console.log(inspectionsSummary.inspection_options_btn);
            });

            InspectionsService.getInspectionList($stateParams.id).then(function(res){

                inspectionsSummary.list = res.data.inspection.data;
                inspectionsSummary.items = res.data.inspection.data.items;

                for(var x in inspectionsSummary.items) {
                    inspectionsSummary.items.option_btn = inspectionsSummary.inspection_options_btn[inspectionsSummary.items[x].options];
                }
            }).catch(function(res){

            } );
        }

        function summary() {

        }
    }
})();
