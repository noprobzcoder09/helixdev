(function () {
    'use strict';

    angular
        .module('app')
        .controller('SubConController', Controller)
        .controller('SubConEditController', SubConEditController);

    function Controller(
        $state,
        result,
        SubConService,
        CompanyService,
        $stateParams,
        $scope,
        limitFile,
        $localStorage
    ) {
        var subcon = this;
        subcon.add = add;
        subcon.remove = remove;
        subcon.checkDoc = checkDoc;
        subcon.checkDocView = checkDocView;
        subcon.removeDoc = removeDoc;
        subcon.uploadDocs = uploadDocs;
        subcon.setDocs = setDocs;
        subcon.getLogo = getLogo;
        subcon.hasDocs = hasDocs;
        subcon.exportCsv = exportCsv;

        subcon.fileLimit = false;

        subcon.formData = new FormData();
        subcon.lists = [];
        subcon.view = false;
        subcon.required_docs = [];
        subcon.modalErrors = [];

        if(result) {
            subcon.lists = result.data.subcontractors.data;
        }

        init();

        function init()
        {
            $("#idExportCsv").on('click', function(event)
            {
                subcon.modalErrors = [];
                if(!subcon.filter_from_date) {
                    subcon.modalErrors.push('From Date is required.');
                }

                if(!subcon.filter_to_date) {
                    subcon.modalErrors.push('To Date is required.');
                }
                console.log(subcon.modalErrors);
                if(subcon.modalErrors.length > 0) {
                    return false;
                }

                event.preventDefault();
                //window.location = "http://www.google.com";
                console.log('llf');
            });

            subcon.states = CompanyService.states;
            subcon.required_docs = CompanyService.getRequiredDocs();
            console.log(subcon.required_docs)
            switch($state.current.name) {
                case 'main.sub-contractor.list': {
                } break;
                case 'main.sub-contractor.add': {
                } break;
                case 'main.sub-contractor.view': {
                    SubConService.view(
                        $stateParams.id
                    ).then(function(res) {
                        subcon.view = res.data.sub_contractor.data;
                        console.log(subcon.view);
                    });
                } break;
            }
        }


        function exportCsv()
        {
            subcon.modalErrors = [];
            if(!subcon.filter_from_date) {
                subcon.modalErrors.push('From Date is required.');
            }

            if(!subcon.filter_to_date) {
                subcon.modalErrors.push('To Date is required.');
            }

            console.log(subcon.modalErrors);

            if(subcon.modalErrors.length > 0) {
                return false;
            }

            subcon.filter_from_date = subcon.filter_from_date.replace(/\//g, '-');
            subcon.filter_to_date = subcon.filter_to_date.replace(/\//g, '-');

            var location = 'export/company/' +
                $localStorage.currentUser.company.id_hash +
                '/csv/subcontractor' +
                '?from=' +
                subcon.filter_from_date +
                '&to=' + subcon.filter_to_date;
            window.location = location;
        }

        function add()
        {

            var subcon_logo = document.getElementById('company_logo').files[0];

            if(typeof subcon_logo != 'undefined') {
                subcon.formData.append('company_logo', subcon_logo);
            }

            for(var i in subcon.new) {
                subcon.formData.append(i, subcon.new[i]);
            }

            SubConService.add(subcon.formData).then(function(res) {
                $state.go('main.sub-contractor.list');
            }).catch(function(res, status) {
                $scope.showToastr('error', res.data.message);
            });
        }

        function setDocs()
        {
            var docs = $("input[id^='required_doc']");

            $("input[id^='required_doc']").each(function(es)
            {
                var file = document.getElementById(docs[es].id).files[0];
                if(typeof file != 'undefined')
                {
                    if (file.size > limitFile.size)
                    {
                        $(".label_" + docs[es].id).addClass('error-doc');
                        subcon.fileLimit = true;

                    } else {
                        subcon.formData.append(docs[es].id, file);
                        subcon.fileLimit = false;
                        if($(".label_" + docs[es].id).hasClass('error-doc')) {
                          $(".label_" + docs[es].id).removeClass('error-doc');
                        }
                    }
                }
            });

            for(var key of subcon.formData.keys()) {
                console.log(key);
            }
        }

        function remove()
        {
            SubConService.remove(subcon.view.id).then(function(res) {
                $state.go('main.sub-contractor.list');
            }).catch(function(res) {});
        }

        function checkDoc(doc)
        {
            if(subcon.formData.has("required_doc_" + doc)) {
                return true;
            }

            return false;
        }

        function checkDocView(doc)
        {
            if(subcon.view) {
                for (var i in subcon.view.docs) {
                    if (doc == subcon.view.docs[i].type) {
                        return true;
                    }
                }
            }
        }

        function removeDoc(id) {
            console.log(id);
            document.getElementById(id).value = null;
            $("."+"label_"+id).html("");
            subcon.formData.delete(id);
        }

        function uploadDocs()
        {
            console.log('updates');

            var formData = new FormData();
            var docs = $("input[id^='required_doc']");

            $("input[id^='required_doc']").each(function(es)
            {
                var file = document.getElementById(docs[es].id).files[0];
                if(typeof file != 'undefined')
                {
                    console.log('has file');
                    if (file.size > limitFile.size)
                    {
                        console.log('has bigger files...');
                        console.log(docs[es].id);
                        $("#container_" + docs[es].id).css({"border" : "1px solid red"});
                    } else {
                        formData.append(docs[es].id, file);
                    }
                }
            });

            SubConService.uploadDocs(
                subcon.view.id,
                formData
            ).then(function(res) {

                subcon.view.docs = res.data.docs.data;
                console.log(subcon.view.docs);
                console.log("test");
                $state.go('main.sub-contractor.view');
            });
        }

        function getLogo()
        {
            if(subcon.view.logo && subcon.view.logo.length > 0) {
                return subcon.view.logo;
            }

            return $scope.app.helix_logo;
        }

        function hasDocs()
        {

            if(subcon.view.docs && subcon.view.docs.length > 0) {
                return true;
            }

            return false;
        }
    }

    function SubConEditController(
        $state,
        $stateParams,
        SubConService,
        $scope,
        CompanyService
    ) {

        var subcon = this;

        subcon.getLogo = getLogo;
        subcon.update = update;
        subcon.view = {};

        init();

        function init()
        {
            subcon.states = CompanyService.states;

            subcon.config = {
                create: true,
                valueField: 'id',
                labelField: 'name',
                maxItems: 1,
                onChange: function(value) {
                }
            };
            SubConService.view($stateParams.id).then(function(res) {
                subcon.view = res.data.sub_contractor.data;
            });
        }

        function getLogo()
        {
            if(subcon.view.logo && subcon.view.logo.length > 0) {
                return subcon.view.logo;
            }

            return $scope.app.helix_logo;
        }

        function update()
        {
            var formData = new FormData();
            var file = document.getElementById('company_logo').files[0];

            if(typeof file != 'undefined') {
                formData.append('company_logo', file);
            }

            for(var i in subcon.view) {
                formData.append(i, subcon.view[i]);
            }

            SubConService.update(
                $stateParams.id,
                formData
            ).then(function(res) {
                $state.go('main.sub-contractor.view', {id: $stateParams.id});
            });
        }
    }
})();
