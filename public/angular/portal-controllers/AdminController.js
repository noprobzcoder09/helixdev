(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminController', AdminController)
        .controller('AdminCrewsController', AdminCrewsController)
        .controller('AdminResourcesController', AdminResourcesController)
        .controller('AdminProjectsController', AdminProjectsController);

    function AdminController(
        $state,
        $stateParams,
        $localStorage
    ) {

        var admin = this;

        init();

        function init()
        {
            admin.company = $localStorage.currentUser.company;
        }


    }

    function AdminCrewsController(
        GroupService,
        ProjectService
    ) {

        var admin = this;
        admin.add = add;
        admin.update = update;
        admin.edit = edit;

        admin.list = [];
        admin.projects = [];
        admin.view = {};

        init();

        function init()
        {
            GroupService.searchGroups().then(function(res) {
                console.log(res);
                admin.list = res.data.groups.data;
                ProjectService.getList().then(function(res) {
                    admin.projects = res.data.projects.data;
                });
            });
        }

        function add()
        {
            GroupService.add(
                admin.new
            ).then(function(res) {
                admin.list.unshift(res.data.new_group.data);
            });
        }

        function update()
        {
            admin.view.project = admin.view.project_id;
            GroupService.update(
                admin.view.id,
                admin.view
            ).then(function(res) {
                for(var i in admin.list)
                {
                    if(admin.list[i].id == admin.view.id)
                    {
                        admin.list[i] = res.data.updated_group.data;
                    }
                }
            });
        }

        function edit(item)
        {
            admin.view = item;
        }
    }

    function AdminProjectsController(
        ProjectService
    ) {
        var project = this;
        project.add = add;
        project.update = update;
        project.edit = edit;

        project.view = {};
        project.new = {};

        project.list = [];

        console.log('AdminProjectsController');

        init();

        function init()
        {
            ProjectService.getList().then(function(res) {
                project.list = res.data.projects.data;
            });
        }

        function add()
        {
            ProjectService.add(
                project.new
            ).then(function(res) {
                project.list.push(res.data.project.data);
            });
        }

        function update()
        {
            ProjectService.update(
                project.view.id,
                project.view
            ).then(function(res) {

            });
        }

        function edit(p)
        {
            project.view = p;
            console.log(project.view)
        }
    }

    function AdminResourcesController(
        ResourceService,
        $state,
        limitFile,
        mFile
    ) {

        var resource = this;
        resource.add = add;
        resource.update = update;
        resource.remove = remove;
        resource.initAdd = initAdd;
        resource.initEdit = initEdit;

        resource.new = {};
        resource.categories = [];
        resource.selectedCategory = '';
        resource.promise = false;
        resource.mFile = mFile;

        init();

        function init()
        {
            resource.promise = ResourceService.getCategories().then(function(res) {
                console.log(res);
                resource.categories = res.data.categories.data;
            });
        }

        function initAdd(category)
        {
            resource.new = {};
            resource.selectedCategory = category;
        }

        function initEdit(item, category)
        {
            resource.selectedCategory = category;
            resource.view = item;
        }

        function add()
        {
            var formData = new FormData();

            for(var i in resource.new) {
                formData.append(i, resource.new[i]);
            }

            formData.append('category', resource.selectedCategory.id);

            var file = document.getElementById('resource_image').files[0];
            if(typeof file != 'undefined') {

                if(file.size > limitFile.size)
                {
                    $("#resource_image").css({"border" : "1px solid red"});
                    return false;
                } else {
                    formData.append('resource_image', file);
                }
            }

            ResourceService.add(
                formData
            ).then(function(res) {
                for(var i in resource.categories)
                {
                    if (resource.selectedCategory.id == resource.categories[i].id) {
                        resource.categories[i].resources.unshift(res.data.new_resource.data);
                        break;
                    }
                }
                $(".fileinput-filename").text("BROWSE");
            });
        }

        function update()
        {

            var formData = new FormData();

            for(var i in resource.view) {
                formData.append(i, resource.view[i]);
            }

            var file = document.getElementById('resource_update_image').files[0];

            if(typeof file != 'undefined') {
                if(file.size > limitFile.size)
                {
                    $("#resource_update_image").css({"border" : "1px solid red"});
                    return false;
                } else {
                    formData.append('resource_image', file);
                }
            }

            ResourceService.update(
                resource.view.id,
                formData
            ).then(function(res) {
                $state.reload();
            })
        }

        function remove(resource)
        {
          ResourceService.remove(resource.id).then(function(){
             $state.reload();
          });
        }
    }

})();
