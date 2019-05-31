(function () {
	'use strict';

	angular
		.module('app')
		.controller('HRMainController', HRMainController)
		.controller('HROnBoardController', HROnBoardController)
		.controller('HRInductionController', HRInductionController)
		.controller('HREmployeeController', HREmployeeController)
		.controller('HRUserManagementController', HRUserManagementController)
		.controller('GRProgramController', GRProgramController)
		.controller('FeedbackController', FeedbackController)
		.controller('registeredController', registeredController)
		.controller('correctiveActionController', correctiveActionController)
		.controller('HROpenworkerController', HROpenworkerController)
		.controller('HREditWorkerController', HREditWorkerController)
		.controller('HRWorkforceController', HRWorkforceController)
		.controller('HRInductionAddController', HRInductionAddController)
		.controller('HRInductionEditController', HRInductionEditController)
		.controller('HRInductionViewWorkerCompletedInductions', HRInductionViewWorkerCompletedInductions)
		.controller('HROpenworkerSkillsController', HROpenworkerSkillsController)
		.controller('HROpenworkerSkillsDetailController', HROpenworkerSkillsDetailController);

	function HRMainController(
		$localStorage
	) {
		var hrMain = this;
		hrMain.company = {};

		init();

		function init()
		{
			console.log($localStorage);
			hrMain.company = $localStorage.currentUser.company;
		}
	}

	function HRUserManagementController(
		EmployeeService,
		InductionService,
		$timeout
	) {
		var mgt = this;

		mgt.nextPage = nextPage;
		mgt.prevPage = prevPage;
		mgt.goPage = goPage;
		mgt.search = search;
		mgt.keywords = '';
		mgt.searchParams = {};
		mgt.currentPage = 1;
		mgt.pagination = {};

		var _timeout;
		init();

		function init()
		{
			EmployeeService.searchPagination(
				'',
				'&admin=true'
			).then(function(res) {
				mgt.pagination = res.data.search;
			});
		}

		function nextPage()
		{

			if(mgt.currentPage >= mgt.pagination.last_page) {
				return false;
			}

			mgt.currentPage++;

			EmployeeService.searchPagination(
				'',
				'&admin=true&page='+mgt.currentPage
			).then(function(res) {
				mgt.pagination = res.data.search;
			});
		}

		function prevPage()
		{
			if(mgt.currentPage <= 1) {
				return false;
			}
			mgt.currentPage--;
			EmployeeService.searchPagination(
				'',
				'&admin=true&page='+mgt.currentPage
			).then(function(res) {
				mgt.pagination = res.data.search;
			});
		}

		function goPage(page) {
			console.log(page);
			mgt.currentPage = page;
			EmployeeService.searchPagination(
				'',
				'&admin=true&page='+mgt.currentPage
			).then(function(res) {
				mgt.pagination = res.data.search;
			});
		}

		function search(keywords)
		{
			console.log(keywords);

			if(_timeout) {
				$timeout.cancel(_timeout);
			}

			_timeout = $timeout(function() {
					EmployeeService.searchPagination(
						keywords,
						'&admin=true'
					).then(function(res) {
						mgt.pagination = res.data.search;
					});
				_timeout = null;
			}, 500);
		}
	}

	function HRWorkforceController (
		InductionService,
		$scope,
		ProjectService,
		$state
	) {
		var hrWorkforce = this;
		hrWorkforce.nextPage = nextPage;
		hrWorkforce.prevPage = prevPage;
		hrWorkforce.goPage = goPage;
		hrWorkforce.search = search;
		hrWorkforce.currentPage = 1;
		hrWorkforce.keywords = '';
		hrWorkforce.pagination = {};
		hrWorkforce.projectConfig = {};
		hrWorkforce.projects = [];
		hrWorkforce.searchParams = {};
		init();

		function init() {
			console.log('xxxxxxxxxxxxxxxxx');

			if($state.current.name == 'main.hr.user_management') {
				console.log('search for user admin.........');
				hrWorkforce.searchParams.admin = true;
			} else {
				console.log('search for all user.....');
			}

			hrWorkforce.projectConfig = {
				create: true,
				valueField: 'id',
				labelField: 'name',
				maxItems:1,
				searchField: ['name'],
				onChange: function(value){
					console.log('onChange', value);
					hrWorkforce.keywords = '';
					hrWorkforce.searchParams.project = value;
					InductionService.search(
						'',
						hrWorkforce.currentPage,
						hrWorkforce.searchParams
					).then(function(res){
						hrWorkforce.pagination = res.data.search;
					});
				},
				onType: function(value) {
					console.log(value)
				}
			};

			ProjectService.getList().then(function(res) {
				console.log(res);
				hrWorkforce.projects = res.data.projects.data;
			});
		}

		function nextPage()
		{

			if(hrWorkforce.currentPage >= hrWorkforce.pagination.last_page) {
				return false;
			}

			hrWorkforce.currentPage++;

			InductionService.search(
				'',
				hrWorkforce.currentPage,
				hrWorkforce.searchParams
			).then(function(res) {
				hrWorkforce.pagination = res.data.search;
			});
		}

		function prevPage()
		{
			if(hrWorkforce.currentPage <= 1) {
				return false;
			}
			hrWorkforce.currentPage--;
			InductionService.search(
				'',
				hrWorkforce.currentPage,
				hrWorkforce.searchParams
			).then(function(res) {
				hrWorkforce.pagination = res.data.search;
			});
		}

		function goPage(page)
		{
			hrWorkforce.currentPage = page;
			InductionService.search(
				'',
				hrWorkforce.currentPage,
				hrWorkforce.searchParams
			).then(function(res) {
				hrWorkforce.pagination = res.data.search;
			});
		}

		function search(keywords)
		{
			console.log(hrWorkforce.selectedProject);
			InductionService.search(
				keywords,
				1,
				hrWorkforce.searchParams
			).then(function(res) {
				hrWorkforce.pagination = res.data.search;
			});
		}

		$scope.$watch('hrWorkforce.keywords', function(newVal, oldVal)
		{
			if(newVal.length <= 0) {
				InductionService.search(
					newVal,
					hrWorkforce.currentPage,
					hrWorkforce.searchParams
				).then(function(res) {
					hrWorkforce.pagination = res.data.search;
				});
			}
		});
	}

	function HROpenworkerController (
		EmployeeService,
		CompanyService,
		$stateParams,
		$scope,
		$state,
		limitFile
	) {
		console.log('HROpenworkerController');
		var hrOpenworker = this;
		hrOpenworker.checkDoc = checkDoc;
		hrOpenworker.uploadDocs = uploadDocs;

		hrOpenworker.states = CompanyService.getStates();
		hrOpenworker.projects = CompanyService.getProjects();
		hrOpenworker.employee_required_docs = CompanyService.getEmployeeRequiredDocs();
		hrOpenworker.view = {};
		hrOpenworker.user_docs = {};
		hrOpenworker.fileLimit = false;
		hrOpenworker.log = {};

		init();

		function init()
		{

			EmployeeService.viewEmployee(
				$stateParams.id
			).then(function(res) {
				hrOpenworker.view = res.data.employee.data;
				hrOpenworker.user_docs = res.data.employee.data.docs;
				hrOpenworker.docs = res.data.employee.docs;
				initLogs();
			}).catch(function(res) {
				$scope.showToastr('error', res.data.message);
			});
		}

		function initLogs()
		{
			EmployeeService.logs(
				$stateParams.id,
				''
			).then(function(res) {
				console.log(res);
				//hrOpenworker.log.pagination = res.data.logs.data;
				hrOpenworker.log =
				{
					pagination: res.data.logs.data,
					next : function ()
					{
						if(hrOpenworker.log.pagination.current_page >= hrOpenworker.log.pagination.last_page) {
							return false;
						}

						hrOpenworker.log.pagination.current_page++;

						EmployeeService.logs(
							$stateParams.id,
							'?page='+hrOpenworker.log.pagination.current_page
						).then(function(res) {
							hrOpenworker.log.pagination = res.data.logs.data;
						});
					},

					prev : function ()
					{
						if(hrOpenworker.log.pagination.current_page <= 1) {
							return false;
						}
						hrOpenworker.log.pagination.current_page--;
						EmployeeService.logs(
							$stateParams.id,
							'?page='+hrOpenworker.log.pagination.current_page
						).then(function(res) {
							hrOpenworker.log.pagination = res.data.logs.data;
						});
					},

					go : function (page)
					{
						hrOpenworker.log.pagination.current_page = page;
						EmployeeService.logs(
							$stateParams.id,
							'?page='+hrOpenworker.log.pagination.current_page
						).then(function(res) {
							hrOpenworker.log.pagination = res.data.logs.data;
						});
					}
				};
				console.log(hrOpenworker.log);
			});

		}

		function checkDoc(doc)
		{
			if(hrOpenworker.view) {
				for(var i in hrOpenworker.view.docs) {
					if(doc == hrOpenworker.view.docs[i].type) {
						return true;
					}
				}
			}

			return false;
		}

		function uploadDocs()
		{
			var formData = new FormData();
			var docs = $("input[id^='required_doc']");
			$("input[id^='required_doc']").each(function(es) {
				var file = document.getElementById(docs[es].id).files[0];
				if(typeof file != 'undefined')
				{
					console.log('has file');
					if (file.size > limitFile.size)
					{
						console.log('has bigger files...');
						console.log(docs[es].id);

						hrOpenworker.fileLimit = true;
						$(".label_" + docs[es].id).addClass('error-doc');
					} else {
						hrOpenworker.fileLimit = false;
						formData.append(docs[es].id, file);

						if( $(".label_" + docs[es].id).hasClass('error-doc') ) {
							$(".label_" + docs[es].id).removeClass('error-doc');
						}

					}
				}
			});
			EmployeeService.uploadDocs(hrOpenworker.view.id, formData).then(function(res) {
				hrOpenworker.view.docs = res.data.docs.data;
				hrOpenworker.user_docs = res.data.docs.data;
			});
		}
	}

	function HREditWorkerController (
		EmployeeService,
		CompanyService,
		ProjectService,
		GroupService,
		SubConService,
		$stateParams,
		$state,
		$scope,
		$timeout
	) {

		var hrEditWorker = this;
		var _timeout;
		hrEditWorker.update = update;
		hrEditWorker.selectProject = selectProject;

		hrEditWorker.view = {};
		hrEditWorker.states = CompanyService.getStates();
		hrEditWorker.selectedCrews = [];
		hrEditWorker.selectedProjects = [];
		hrEditWorker.selectizes = [];
		hrEditWorker.subContractors = [];

		hrEditWorker.projectInputs = [];
		hrEditWorker.selectedProjects = [];

		init();

		function init()
		{

			switch($state.current.name) {
				case 'main.hr.workforce-login-details':
				{
					EmployeeService.loginDetails($stateParams.id).then(function(res) {
						hrEditWorker.view = res.data.employee.data;
					}).catch(function(res) {
						$scope.showToastr('error', res.data.message);
					});
				}
					break;

				case 'main.hr.edit-workforce-worker':
					{
						hrEditWorker.states = CompanyService.getStates();
						hrEditWorker.subConfig = {
							create: true,
							valueField: 'id',
							labelField: 'name',
							searchField: ['name'],
							maxItems: 1,
							onChange: function(value){}
						};

						hrEditWorker.crewsConfig =  {
							plugins: ['remove_button'],
							create: true,
							valueField: 'id',
							labelField: 'name',
							searchField: ['name'],
							onChange: function(value){

							},
							onType: function(value) {
								console.log('observing into project id: ' + hrEditWorker.projectObserver);

								if(_timeout) { // if there is already a timeout in process cancel it
									$timeout.cancel(_timeout);
								}
								_timeout = $timeout(function() {
									for(var i in hrEditWorker.projectInputs)
									{
										if(hrEditWorker.projectInputs[i].project.id == hrEditWorker.projectObserver)
										{
											hrEditWorker.projectInputs[i].crews = [];
											console.log('found in ' + hrEditWorker.projectInputs[i].project.name)
											GroupService.searchGroups(
												value,
												hrEditWorker.projectObserver
											).then(function(res) {
												hrEditWorker.projectInputs[i].crews = res.data.groups.data;
											});
										}
									}
									if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
										$scope.$apply();
									}
									_timeout = null;
								}, 500);
							}
						};

						hrEditWorker.statesConfig =  {
							create: true,
							valueField: 'id',
							labelField: 'name',
							searchField: ['name'],
							maxItems: 1,
							onChange: function(value){

							}
						};

						hrEditWorker.projectsConfig =  {
							plugins: ['remove_button'],
							maxItems: 1,
							valueField: 'id',
							labelField: 'name',
							searchField: ['name'],
							sortField: 'name',
							persist: false,
							onChange: function(value){
								console.log(value);
							}
						};

						SubConService.getList().then(function(res) {
							hrEditWorker.subContractors = res.data.subcontractors.data;
						});

						EmployeeService.viewEmployee(
							$stateParams.id
						).then(function(res) {

							ProjectService.getList().then(function(res) {
								hrEditWorker.projects = res.data.projects.data;
							});

							SubConService.getList().then(function(res) {
								hrEditWorker.subContractors = res.data.subcontractors.data;
							});
							hrEditWorker.view = res.data.employee.data;

							for(var i in hrEditWorker.view.projects) {
								var project = hrEditWorker.view.projects[i];
								var input = ProjectService.newProject(project);

								hrEditWorker.selectedProjects.push(project);
								for(var x in hrEditWorker.view.groups)
								{
									var group = hrEditWorker.view.groups[x];
									if(project.id == group.project_id) {
										input.crews.push(group);
										input.selected_crews.push(group.id);
									}
								}

								hrEditWorker.projectInputs.push(input);
							}

							console.log(hrEditWorker.projectInputs);
							/* initialize selected projects */
							if(hrEditWorker.view.subContractor) {
								hrEditWorker.hasSubCon = true;
								hrEditWorker.selectedSubCon = hrEditWorker.view.subContractor.id;
							}

							updateSelectize();
						}).catch(function(res) {
							$scope.showToastr('error', res.data.message);
						});
					}
					break;
			}
		}

		$scope.$watch('hrEditWorker.selectedProject', function(newVal, oldVal)
		{
			if(newVal)
			{
				for(var i in hrEditWorker.projects)
				{
					if(newVal == hrEditWorker.projects[i].id)
					{
						console.log(hrEditWorker.projects[i].name);
						var found = false;

						for(var x in hrEditWorker.selectedProjects)
						{
							var selectedProject = hrEditWorker.selectedProjects[x];

							if(selectedProject.id == newVal) {
								found = true;
								console.log('found');
								break;
							}
						}

						if(!found) {
							hrEditWorker.projectInputs.push(ProjectService.newProject(hrEditWorker.projects[i]))
							hrEditWorker.selectedProjects.push(hrEditWorker.projects[i]);
							updateSelectize();
						}
					}
				}
			}
		});

		function updateSelectize()
		{
			setTimeout(function() {
				console.log('checking selectize222......');
				for(var i in hrEditWorker.projectInputs)
				{
					hrEditWorker.selectizes.push($('#selectProject' + hrEditWorker.projectInputs[i].id).selectize({
						delimiter: ',',
						persist: false,
						place : 'holder',
						maxItems: 5,
						searchField: ['name'],
						labelField: 'name',
						plugins: ['remove_button'],
						onType: function(val) {
							var xId = this.$input[0].id.split("selectProject")[1];
							GroupService.searchGroups(
								val,
								xId
							).then(function(res) {
								if(_timeout) {
									$timeout.cancel(_timeout);
								}
								_timeout = $timeout(function() {
									var $select = $('select#selectProject' + xId).selectize();
									for (i=0; i<res.data.groups.data.length; i++) {
										var selectize = $select[0].selectize;
										selectize.addOption({value: res.data.groups.data[i].id, name: res.data.groups.data[i].name});
									};
									_timeout = null;
								}, 500);
							});
						}
					}));
				}

				for(var i in hrEditWorker.projectInputs)
				{
					var project = hrEditWorker.projectInputs[i].project;
					var crews = hrEditWorker.projectInputs[i].crews;
					var $select = $('select#selectProject' + hrEditWorker.projectInputs[i].id).selectize();
					console.log('select#selectProject' + project.id);
					for(var x in crews)
					{
						var selectize = $select[0].selectize;
						var crew = crews[x];
						selectize.addOption({value: crew.id, name: crew.name});
						selectize.addItem(crew.id);

					}
					selectize.refreshOptions();
				}
			}, 500)
		}

		function selectProject(input)
		{
			console.log('---------------------------------------------');
			console.log('your now searching to ' + input.project.name);
			console.log('---------------------------------------------');
			hrEditWorker.projectObserver = input.project.id;

		}

		function update()
		{

			var selectedProjects = [];
			var selectedCrews = [];
			var formData = new FormData();

			var docs = $("input[id^='avatar']");
			$("input[id^='avatar']").each(function(es) {
				var file = document.getElementById(docs[es].id).files[0];
				if(typeof file != 'undefined') {
					formData.append(docs[es].id, file);
				}
			});

			for(var i in hrEditWorker.view) {
				if(hrEditWorker.view[i] != null) {
					formData.append(i, hrEditWorker.view[i]);
				}
			}

			if(hrEditWorker.hasSubCon && hrEditWorker.selectedSubCon) {
				formData.append('subcontractor_id', hrEditWorker.selectedSubCon);
			}

			for(var i in hrEditWorker.selectizes)
			{
				var pId = hrEditWorker.selectizes[i][0].id.split("selectProject")[1];
				var selectize = hrEditWorker.selectizes[i][0].selectize;
				console.log(pId);
				console.log(selectize.items);

				for(var x in selectize.items)
				{
					selectedCrews.push(selectize.items[x]);
				}
				selectedProjects.push(pId);
			}

			if(selectedProjects.length > 0) {
				formData.append('selected_projects', JSON.stringify(selectedProjects));
			}

			if(selectedCrews.length > 0) {
				formData.append('selected_groups', JSON.stringify(selectedCrews));
			}

			EmployeeService.updateEmployee(
				hrEditWorker.view.id, formData
			).then(function(res) {
				$state.go('main.hr.workforce-worker', {id: hrEditWorker.view.id});
			}).catch(function(res) {
				$scope.showToastr('error', res.data.message);
			});
		}
	}

	function HROnBoardController(
		EmployeeService,
		CompanyService,
		SubConService,
		ProjectService,
		GroupService,
		$stateParams,
		$state,
		$scope,
		$timeout
	) {

		var hrOnboard = this;
		var _timeout;

		hrOnboard.addEmployee = addEmployee;
		hrOnboard.clear2 = clear2;
		hrOnboard.selectProject = selectProject;
		hrOnboard.removeProject = removeProject;

		hrOnboard.view = {};
		hrOnboard.edit = {};
		hrOnboard.states = [];
		hrOnboard.projects = [];
		hrOnboard.projectInputs = [];
		hrOnboard.selectedProjects = [];
		hrOnboard.crews = [];
		hrOnboard.selectedProjectsById = [];
		hrOnboard.selectedCrews = [];
		hrOnboard.new = {};
		hrOnboard.hasSubCon = false;
		hrOnboard.selectedSubCon = false;
		hrOnboard.selectizes = [];
		init();

		function init()
		{
			hrOnboard.states = CompanyService.getStates();
			console.log('onboard init...');
			hrOnboard.config = {
				create: true,
				valueField: 'id',
				labelField: 'name',
				searchField: ['name'],
				maxItems: 1,
				onChange: function(value){
					hrOnboard.selectedSubCon = value;
				}
			};
			hrOnboard.crewsConfig =  {
				plugins: ['remove_button'],
				create: true,
				valueField: 'id',
				labelField: 'name',
				searchField: ['name'],
				onChange: function(value){

				},
				onType: function(value) {
					console.log('observing into project id: ' + hrOnboard.projectObserver);
					for(var i in hrOnboard.projectInputs) {
						if(hrOnboard.projectInputs[i].project.id == hrOnboard.projectObserver)
						{
							GroupService.searchGroups(
								value,
								hrOnboard.projectObserver
							).then(function(res) {
								hrOnboard.projectInputs[i].crews = res.data.groups.data;
							});
						}
					}
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						$scope.$apply();
					}
				}
			};
			hrOnboard.projectsConfig =  {
				plugins: ['remove_button'],
				maxItems: 1,
				valueField: 'id',
				labelField: 'name',
				searchField: ['name'],
				sortField: 'name',
				persist: false,
				onChange: function(value)
				{
					hrOnboard.selectizes = [];
					setTimeout(function() {
						console.log('checking selectize......');
						for(var i in hrOnboard.projectInputs)
						{
							hrOnboard.selectizes.push($('#selectProject' + hrOnboard.projectInputs[i].id).selectize({
								delimiter: ',',
								persist: false,
								place : 'holder',
								maxItems: 5,
								searchField: ['name'],
								labelField: 'name',
								plugins: ['remove_button'],
								onType: function(val) {
									var xId = this.$input[0].id.split("selectProject")[1];
									GroupService.searchGroups(
										val,
										xId
									).then(function(res) {
										//hrEditWorker.projectInputs[i].crews = res.data.groups.data;
										console.log(res);

										if(_timeout) {
											$timeout.cancel(_timeout);
										}
										_timeout = $timeout(function() {
											var $select = $('select#selectProject' + xId).selectize();
											for (i=0; i<res.data.groups.data.length; i++) {
												var selectize = $select[0].selectize;
												selectize.addOption({value: res.data.groups.data[i].id, name: res.data.groups.data[i].name});
											};
											_timeout = null;
										}, 500);
									});
								}
							}));
						}
					}, 500)
				}
			};

			ProjectService.getList().then(function(res) {
				hrOnboard.projects = res.data.projects.data;
				console.log(hrOnboard.projects);
			});

			SubConService.getList().then(function(res) {
				hrOnboard.subContractors = res.data.subcontractors.data;
			});

			if( $state.current.name == 'main.hr.employee' ) {
				EmployeeService.viewEmployee(
					$stateParams.id
				).then(function(res) {
					hrOnboard.view = res.data.employee.data;
				}).catch(function(res) {
					$scope.showToastr('error', res.data.message);
				});
			}
		}

		$scope.$watch('hrOnboard.selectedProject', function(newVal, oldVal)
		{

			if(newVal)
			{
				for(var i in hrOnboard.projects)
				{
					if(newVal == hrOnboard.projects[i].id)
					{
						if(hrOnboard.selectedProjects.indexOf(hrOnboard.projects[i]) < 0) {
							hrOnboard.projectInputs.push(ProjectService.newProject(hrOnboard.projects[i]));
							hrOnboard.selectedProjects.push(hrOnboard.projects[i]);
						}
					}
				}
			}
		});

		function removeProject() {

		}

		function selectProject(input)
		{
			// console.log('---------------------------------------------');
			// console.log('your now searching to ' + input.project.name);
			// console.log('---------------------------------------------');
			hrOnboard.projectObserver = input.project.id;

		}

		function clear2()
		{
			hrOnboard.crews = [];
			console.log('clearx');
			hrOnboard.selectedProject = null;
			// console.log('clewar');
			// var $select = $('#optionNetFlow').selectize();
			// var control = $select[0].selectize;
			// control.clear();
		}

		function addEmployee()
		{

			var selectedProjects = [];
			var selectedCrews = [];
			var formData = new FormData();
			var docs = $("input[id^='avatar']");
			$("input[id^='avatar']").each(function(es) {
				var file = document.getElementById(docs[es].id).files[0];
				if(typeof file != 'undefined') {
					formData.append(docs[es].id, file);
				}
			});

			for(var i in hrOnboard.new) {
				formData.append(i, hrOnboard.new[i]);
			}

			if(hrOnboard.hasSubCon && hrOnboard.selectedSubCon.length > 0) {
				formData.append('subcontractor_id', hrOnboard.selectedSubCon);
			}

			console.log(hrOnboard.selectizes);
			for(var i in hrOnboard.selectizes)
			{
				var pId = hrOnboard.selectizes[i][0].id.split("selectProject")[1];
				var selectize = hrOnboard.selectizes[i][0].selectize;
				console.log(pId);
				console.log(selectize.items);

				for(var x in selectize.items)
				{
					selectedCrews.push(selectize.items[x]);
				}
				selectedProjects.push(pId);
			}

			if(selectedProjects.length > 0) {
				formData.append('selected_projects', JSON.stringify(selectedProjects));
			}

			if(selectedCrews.length > 0) {
				formData.append('selected_groups', JSON.stringify(selectedCrews));
			}

			EmployeeService.addEmployee(formData).then(function(res) {
				$state.go('main.hr.workforce-worker', {id: res.data.user.employee_id});
			}).catch(function(res) {
				$scope.showToastr('error', res.data.message);
			});
		}
	}

	function HREmployeeController(
		EmployeeService,
		CompanyService,
		MessagingService,
		$stateParams,
		$scope
	) {

		var hrEmployee = this;

		hrEmployee.updateAdmin = updateAdmin;
		hrEmployee.sendLoginDetails = sendLoginDetails;
		hrEmployee.sendLoginDetailsSMS = sendLoginDetailsSMS;
		hrEmployee.states = [];
		hrEmployee.view = false;
		hrEmployee.messages = [];
		init();

		function init()
		{
			hrEmployee.states = CompanyService.getStates();
			hrEmployee.projects = CompanyService.getProjects();
			EmployeeService.viewEmployee(
				$stateParams.id
			).then(function(res) {
				hrEmployee.view = res.data.employee.data;
			}).catch(function(res){});
		}

		function updateAdmin()
		{
			console.log('make admin...');

			EmployeeService.updateAdmin(
				hrEmployee.view.id,
				hrEmployee.view.isAdmin
			).then(function(res) {
				console.log(res);
			});
		}

		function sendLoginDetails()
		{
			console.log('send login...');
			EmployeeService.sendLoginDetails(
				hrEmployee.view.id
			).then(function(res) {
				console.log(res);
				for(var i in res.data.messages)
				{
					var m = res.data.messages[i];
					$scope.showToastr(m.type, m.message);
				}
			})
		}

		function sendLoginDetailsSMS()
		{
			console.log('send sms');
			var data = {
				"body" : "test",
				"subject" : "test sms",
				"employee_role_id" : "[1]",
				"type" : 2,
				"method" : "[1]",
				"individual" : "[1]",
				"send_to" : hrEmployee.view.id
			};

			var formData = new FormData();

			for(var i in data) {
				formData.append(i, data[i]);
			}

			formData.append('by_login_details', true);
			MessagingService.send(
				formData
			).then(function(res) {
				for(var i in res.data.messages)
				{
					var m = res.data.messages[i];
					$scope.showToastr(m.type, m.message);
				}
			});
		}
	}

	function GRProgramController (
		EmployeeService,
		CompanyService,
		GreenhatService,
		$stateParams,
		$scope,
		$state
	) {

		var grProgram = this;
		grProgram.states = [];
		grProgram.details = {};
		grProgram.view = false;
		grProgram.dropdown = false;
		grProgram.program_saved = false;

		grProgram.loadDropdowns = loadDropdowns;
		grProgram.saveProgram = saveProgram;
		grProgram.sendKickOff = sendKickOff;
		grProgram.callSend = callSend;

		grProgram.groups = [];
		grProgram.selectedGroups = [];

		grProgram.feedback = {
								worker: null, 
								directSupervisor: null,
								hr: null,
								contsManager: null,
								plantDept: null,
								ohs: null,
								enviro: null,
							};


		init();

		function init() {

			grProgram.states = CompanyService.getStates();
			grProgram.projects = CompanyService.getProjects();
			EmployeeService.viewEmployee($stateParams.id).then(function(res) {
				grProgram.view = res.data.employee.data;

				getGreenhatData();
				// loadDropdowns();
			}).catch(function(res) {
				console.log(res);
			});

			loadDropdowns();

			//switch the state name
			if( typeof $state.current.name !='undefined' && $state.current.name != '' ){
				switch( $state.current.name ){
					case 'main.hr.workforce-greenhat-signoff':
						getProgramSignoff($stateParams.id);
					break;

					default: break;
				}
			}

		}


		function getProgramSignoff(id){
			if( typeof id != 'undefined' && id !='' ){
				GreenhatService.getProgramSignoff(id).then(function(res){
					
					if(typeof res.data.user_feedback.feedback != 'undefined'){
						var workerFeedback = JSON.parse(res.data.user_feedback.feedback);
							grProgram.feedback.worker = workerFeedback;
					}

					if(typeof res.data.program_feedback != 'undefined'){

						angular.forEach(res.data.program_feedback, function(value, key) {
							
							switch(value.feedback_by){
								case 2:
									grProgram.feedback.directSupervisor = JSON.parse(value.feedback);
									break;
								
								case 3: 
									grProgram.feedback.hr = JSON.parse(value.feedback);
									break;	

								case 4: 
									grProgram.feedback.contsManager = JSON.parse(value.feedback);
									break;	

								case 5: 
									grProgram.feedback.plantDept = JSON.parse(value.feedback);
									break;	

								case 6: 
									grProgram.feedback.ohs = JSON.parse(value.feedback);
									break;	

								case 7: 
									grProgram.feedback.enviro = JSON.parse(value.feedback);
									break;	

								
								default:
									break;
							}

						});
						

					}

					


				}).catch(function(res){
					console.log(res);
				});
			}
		}

		function getGreenhatData() {
			GreenhatService.getGreenhatData(grProgram.view.id, grProgram.view.company_id).then(function(res) {
				grProgram.details.supervisor = res.data.supervisor_id;
				grProgram.details.hr = res.data.hr_followup_id;
				grProgram.details.const = res.data.const_mgmt_id;
				grProgram.details.plant = res.data.plant_dept_id;
				grProgram.details.ohs = res.data.ohs_evaluator_id;
				grProgram.details.environtmental = res.data.env_evaluator_id;

				grProgram.original = res.data;

				if(res.data != '') {
					setTimeout(function() {
						var $supervisor = $('#supervisor_dropdown').selectize();
						var $hr_follow_up = $('#hr_follow_up').selectize();
						var $cont_mgmt = $('#cont_mgmt').selectize();
						var $plant_dept = $('#plant_dept').selectize();
						var $ohs_follow_up = $('#ohs_follow_up').selectize();
						var $environtmental = $('#environtmental_follow_up').selectize();

						$supervisor[0].selectize.setValue(res.data.supervisor_id);
						$hr_follow_up[0].selectize.setValue(res.data.hr_followup_id);
						$cont_mgmt[0].selectize.setValue(res.data.const_mgmt_id);
						$plant_dept[0].selectize.setValue(res.data.plant_dept_id);
						$ohs_follow_up[0].selectize.setValue(res.data.ohs_evaluator_id);
						$environtmental[0].selectize.setValue(res.data.env_evaluator_id);
					}, 300);
				}
			}).catch(function(res){
				console.log(res);
			})
		}

		function loadDropdowns() {
			grProgram.myModel = 1;

			grProgram.config = {
				plugins: ['remove_button'],
				create: true,
				valueField: 'id',
				labelField: 'text',
				maxItems: 1,
				onChange: function(value){
					console.log('onChange', value)
					grProgram.selectedGroups = value;
				}
			};

			GreenhatService.getDropdowns().then(function(response) {
				var groups = response.data;
				for(var i in groups) {
					var temp = {
						'id' : groups[i].user_id,
						'text' : groups[i].full_name
					};
					grProgram.groups.push(temp);
				}
			}).catch(function(response) {
				console.log(response);
			});

			// GreenhatService.getDropdowns().then(function(response) {
			// 	grProgram.dropdown = response.data;

			// 	$('#supervisor_dropdown, #hr_follow_up, #cont_mgmt, #plant_dept, #ohs_follow_up, #environtmental_follow_up').selectize({
			// 		options : grProgram.dropdown,
			// 		valueField: 'user_id',
			// 		labelField: 'fullname',
			// 		searchField : ['fullname'],
			// 		placeholder: 'Pick Users'
			// 	});

			// }).catch(function(response) {
			// 	console.log(response);
			// });
		}

		function saveProgram(from_send = 0) {
			grProgram.details.id 			= grProgram.view.id;
			grProgram.details.company_id 	= grProgram.view.company_id;

			var storage = JSON.parse(localStorage.getItem('ngStorage-currentUser'));

			grProgram.details.created_by = storage.user.user_id;

			GreenhatService.saveProgram(grProgram.details).then(function(response) {
				if(from_send == 0){
					toastr['success']('Successfully added to Program.');
				}

				if(from_send == 1) {
					callSend();
				}
			}).catch(function(response) {
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}

		function sendKickOff() {
			var count = 0;
			angular.forEach(grProgram.details, function(value, key) {
				if(value == undefined) {
					count++
				}
			});
			if(count == 6) {
				toastr['error']('Please select atleast one evaluator.');
				return;
			}
			saveProgram(1);
		}

		function callSend() {
			/*console.log('------------------- call send -------------');
			console.log(grProgram.view.id);
			console.log('------------------- end call send -------------');*/
			GreenhatService.sendKickOff(grProgram.view.id, grProgram.view.company_id).then(function(res){
				if(res.data.success == false) {
					toastr['error'](res.data.error);
				}else{
					toastr['success']('Successfully Sent kickoff test.');
				}
			}).catch(function(res){
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}
	}

	function FeedbackController(
		GreenhatService,
		$scope,
		$stateParams,
		$state
	) {
		var feedback = this;

		feedback.can_view = false;
		feedback.dynamic = {};
		feedback.submitFeedback = submitFeedback;
		feedback.id = false;

		init();

		function init() {
			//chek if admin have the ability to give feedback
			var employee = $stateParams.id;
			var user_id = JSON.parse(localStorage.getItem('ngStorage-currentUser')).user.user_id;
			var url_arr = $state.current.url.split('/');
			var dept = url_arr[url_arr.length-1];

			GreenhatService.checkFeedback(employee, user_id, dept).then(function(res) {
				if(res.data.success === false){
					$state.go('main.dashboard');
				} else {
					feedback.can_view = true;
					feedback.fullname = res.data.fullname;

					if(res.data.feedback) {
						feedback.dynamic = res.data.feedback.dynamic_feedback;

						feedback.id = res.data.feedback.id;

						feedback.gen_comment = res.data.feedback.general_comment;
					}
				}
			}).catch(function(res){
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}

		function submitFeedback() {
			var review_info = {};
			var url_arr = $state.current.url.split('/');
			var dept = url_arr[url_arr.length-1];

			review_info.reviewer_id = JSON.parse(localStorage.getItem('ngStorage-currentUser')).user.user_id;
			review_info.employee_id = parseInt($stateParams.id);
			review_info.dept = dept;

			GreenhatService.submitFeedback(feedback.dynamic, feedback.gen_comment, feedback.id, review_info).then(function(res) {
				toastr['success']('Successfully saved employee feedback.');
			}).catch(function(res){
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}
	}

	function registeredController(
		GreenhatService,
		$scope,
		$stateParams,
		$state
	) {

			var employee_registered;
			var employee_name;
			var employee_id;

			init();


			function init() {

				GreenhatService.getRegisteredService().then(function(response) {
					showRegisteredEmployeesList(response);
					showRegisteredBarChart(response);
					showRegisteredPieChart(response);

				}).catch(function(response) {
					// console.log(response);
				});

			}

			function showRegisteredEmployeesList(response) {
				$scope.emp_full_list = response.data.registered;
			}

			function showRegisteredBarChart(response) {
				  var reports_arr = [];
					angular.forEach(response.data.reports, function(key, value) {
						reports_arr.push(key);
					});
					$scope.bar_colors = [{
							backgroundColor      :"rgba(69, 183, 205, 1)",
							hoverBackgroundColor :"rgba(69, 183, 205, 1)",
							borderColor          :"rgba(69, 183, 205, 1)",
							hoverBorderColor     :"rgba(69, 183, 205, 1)"
					}];
					$scope.bar_labels = ["SUPERVISOR", "HR", "PLANT", "OHS", "PROJECT", "ENVIRO"];
					$scope.bar_data = [
							reports_arr
					];
					$scope.bar_options = {
							scales: {
									xAxes: [{
											gridLines: {
													display: false
											},
											// display: false,
									}],
									yAxes: [{
											scaleShowLabels : false,
											ticks: {
													beginAtZero: true
											},
											display: false,
											gridLines: {
													display: true
											},
									}]
							}
					};
			}

			function showRegisteredPieChart(response) {
				$scope.pie_labels = ["OPEN", "CLOSED"];
				$scope.pie_data = [300, 100];
				$scope.pie_backgroundColor = [
							"rgba(21, 124, 196, 1)",
							"rgba(59, 83, 105, 1)",
						]

			}


	}

	function correctiveActionController(
		GreenhatService,
		$scope,
		$stateParams,
		$state
	) {
		var collective = this;
		collective.gphCorrectiveActionStatsBar = gphCorrectiveActionStatsBar;

		init();

		function init() {
			GreenhatService.getCorrectiveActionService().then(function(res) {
				collective.collective_data = res.data;
				collective.gphCorrectiveActionStatsBar(collective.collective_data);
			}).catch(function(res) {
				console.log(res);
			});
		}


		function gphCorrectiveActionStatsBar(data) {
				collective.colors = [{
						backgroundColor      :"rgba(69, 183, 205, 1)",
						hoverBackgroundColor :"rgba(69, 183, 205, 1)",
						borderColor          :"rgba(69, 183, 205, 1)",
						hoverBorderColor     :"rgba(69, 183, 205, 1)"
				}];
				collective.labels = ["SUPERVISOR", "HR", "PLANT", "OHS", "PROJECT", "ENVIRO"];
				collective.data = [
						[5, 7, 9, 10, 6, 4]
				];
				collective.onClick = function (points, evt) {
						console.log(points, evt);
				};
				collective.options = {
						scales: {
								xAxes: [{
										gridLines: {
												display: false
										},
										// display: false,
								}],
								yAxes: [{
										scaleShowLabels : false,
										ticks: {
												beginAtZero: true
										},
										display: false,
										gridLines: {
												display: true
										},
								}]
						}
				};
		}

		function gphCorrectiveActionStatsPie($scope) {

			// $scope.labels = ["OVERDUE", "IN PROGRESS", "OPEN", "CCLOSED"];
			// $scope.data = [150, 125, 75, 50];
			// $scope.datasetOverride = {
			// 		backgroundColor: [
			// 			"rgba(21, 124, 196, 1)",
			// 			"rgba(59, 83, 105, 1)",
			// 		]
			// }
		}
	}

	function HRInductionController(
		EmployeeService,
		InductionService,
		$state,
		$scope
	) {

		var hrInduction = this;

		hrInduction.createCategory = createCategory;
		hrInduction.search = search;
		hrInduction.nextPage = nextPage;
		hrInduction.prevPage = prevPage;
		hrInduction.goPage = goPage;
		hrInduction.edit = edit;
		hrInduction.updateCategory = updateCategory;
		hrInduction.remove = remove;
		hrInduction.editCategory = {};
		hrInduction.currentPage = 1;
		hrInduction.categoryList = [];
		hrInduction.keywords = '';
		hrInduction.pagination = {};

		init();
		OverallStatistics();

		function init()
		{
			switch($state.current.name)
			{
				case 'main.hr.induction' :
				{
				} break;
				case 'main.hr.induction-list' :
				{
					InductionService.getCategories().then(function(res){
						hrInduction.categoryList = res.data.induction_groups.data;
					}).catch(function(){});
				} break;
			}
		}

		function edit(category)
		{
			hrInduction.editCategory = category;
		}

		function remove(category)
		{
			var confirmx = confirm("Are you sure you want to delete this?");

			if(confirmx) {
				InductionService.categoryDelete(
					category.id
				).then(function(res) {
					var idx = hrInduction.categoryList.indexOf(category);
					hrInduction.categoryList.splice(idx, 1);
				})
			}

		}

		function updateCategory()
		{
			InductionService.categoryUpdate(
				hrInduction.editCategory.id,
				hrInduction.editCategory
			).then(function(res) {
				console.log(res);
			});
		}

		function nextPage()
		{
			console.log(hrInduction.currentPage);
			if(hrInduction.currentPage >= hrInduction.pagination.last_page) {
				return false;
			}

			hrInduction.currentPage++;
			InductionService.search('', hrInduction.currentPage).then(function(res) {
				hrInduction.pagination = res.data.search;
			});
		}

		function prevPage()
		{
			console.log(hrInduction.currentPage);
			console.log(hrInduction.pagination.from);
			if(hrInduction.currentPage <= 1) {
				return false;
			}
			hrInduction.currentPage--;
			InductionService.search('', hrInduction.currentPage).then(function(res) {
				hrInduction.pagination = res.data.search;
			});
		}

		function goPage(page) {
			hrInduction.currentPage = page;
			console.log(hrInduction.currentPage);
			InductionService.search('', hrInduction.currentPage).then(function(res) {
				hrInduction.pagination = res.data.search;
			});
		}

		function createCategory(categoryName)
		{
			InductionService.categoryAdd(categoryName).then(function(res) {
				hrInduction.categoryList.push(res.data.induction_group.data );
			});
		}

		function search(keywords)
		{
			InductionService.search(keywords, 1).then(function(res) {
				hrInduction.pagination = res.data.search;
			});
		}

		$scope.$watch('hrInduction.keywords', function(newVal, oldVal)
		{
			if(newVal.length <= 0) {
				InductionService.search(newVal, hrInduction.currentPage).then(function(res) {
					hrInduction.pagination = res.data.search;
				});
			}
		});

		function OverallStatistics()
		{
			$scope.colors = ['#45b7cd', '#ff6384'];
			$scope.labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
			$scope.series = ['Series A', 'Series B'];
			$scope.data = [
				[30, 10, 20, 25, 35, 20, 30, 40, 35, 50, 15, 40],
				[5, 25, 28, 10, 15, 25, 18, 15, 39, 35, 11, 22]
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
	}

	function HRInductionAddController(
		EmployeeService,
		InductionService,
		$state
	) {

		console.log('HR Induction add controller');
		var hrInduction = this;
		var idCounter = 0;

		hrInduction.addQuestion = addQuestion;
		hrInduction.removeQuestion = removeQuestion;
		hrInduction.save = save;

		hrInduction.categoryList = [];
		hrInduction.new = {};
		hrInduction.questions = [];

		init();

		function init() {
			addQuestion();
			InductionService.getCategories().then(function(res) {
				hrInduction.categoryList = res.data.induction_groups.data;
			}).catch(function(){});
		}

		function save()
		{
			var categories = [];
			for(var i in hrInduction.categoryList) {
				if(hrInduction.categoryList[i].isChecked) {
					categories.push(hrInduction.categoryList[i].id);
				}
			}

			hrInduction.new.categories = categories;
			hrInduction.new.questions = hrInduction.questions;
			InductionService.add(hrInduction.new).then(function(res){
				$state.go('main.hr.induction-list');
			});
		}

		function addQuestion()
		{
			hrInduction.questions.push({
				'sid': idCounter++,
				'question': '',
				'options':[
					{'option': 'option 1', 'value': ''},
					{'option': 'option 2', 'value': ''},
					{'option': 'option 3', 'value': ''},
					{'option': 'option 4', 'value': ''},
					{'option': 'option 5', 'value': ''}
				],
				'answer':''
			});
		}

		function removeQuestion(id)
		{
			if(hrInduction.questions.length <= 1) {
				return false;
			}

			for(var i in hrInduction.questions) {
				if(hrInduction.questions[i].sid == id) {
					var idx = hrInduction.questions.indexOf(hrInduction.questions[i]);
					hrInduction.questions.splice(idx, 1);
					break;
				}
			}
		}
	}

	function HRInductionViewWorkerCompletedInductions(
		EmployeeService,
		$state,
		$stateParams
	) {

		var hrOpenWorker = this;
		hrOpenWorker.view = {};

		init();

		function init() {
			EmployeeService.getWorkerCompletedInductions($stateParams.id).then(function(res) {
				hrOpenWorker.view = res.data.employee.data;
			});
		}
	}

	function HRInductionEditController(
		EmployeeService,
		InductionService,
		$state,
		$stateParams
	) {
		var hrInduction = this;
		var tId = 0;
		hrInduction.view = {};
		hrInduction.categoryList = [];
		hrInduction.questions = [];

		hrInduction.remove = remove;
		hrInduction.update = update;
		hrInduction.addQuestion = addQuestion;

		init();

		function init()
		{
			InductionService.getCategories().then(function(res)
			{
				hrInduction.categoryList = res.data.induction_groups.data;
				InductionService.view($stateParams.id).then(function(res)
				{
					hrInduction.view = res.data.induction.data;
					for(var i in hrInduction.categoryList) {
						if(hrInduction.view.categoryIds.indexOf(hrInduction.categoryList[i].id) >= 0) {
							hrInduction.categoryList[i].isChecked = true;
						}
					}

					for(var i in hrInduction.view.questions) {
						hrInduction.view.questions[i].tId = tId++;
						var c = 1;
						for(var x in hrInduction.view.questions[i].options) {
							var option = hrInduction.view.questions[i].options[x];
							hrInduction.view.questions[i].options[x].option = 'option ' + c;
							c++;
						}

						while(c <= 5) {
							hrInduction.view.questions[i].options.push({option: 'option ' + c, 'value': ''});
							c++;
						}

						hrInduction.questions.push(hrInduction.view.questions[i]);
					}
				});
			}).catch(function(){});

		}

		function remove()
		{
			InductionService.remove(hrInduction.view.id).then(function(){
				$state.go('main.hr.induction-list');
			});
		}

		function update()
		{

			var categories = [];
			for(var i in hrInduction.categoryList) {
				if(hrInduction.categoryList[i].isChecked) {
					categories.push(hrInduction.categoryList[i].id);
				}
			}
			hrInduction.view.questions = hrInduction.questions;
			hrInduction.view.categories = categories;
			InductionService.update(hrInduction.view.id, hrInduction.view).then(function(){
				$state.go('main.hr.induction-list');
			});
		}

		function addQuestion()
		{
			hrInduction.questions.push({
				'tId': tId++,
				'question': '',
				'options':[
					{'option': 'option 1', 'value': ''},
					{'option': 'option 2', 'value': ''},
					{'option': 'option 3', 'value': ''},
					{'option': 'option 4', 'value': ''},
					{'option': 'option 5', 'value': ''}
				],
				'answer':''
			});
			console.log(hrInduction.questions);
		}
	}

	function HROpenworkerSkillsController(
		EmployeeService,
		SkillRequirementsService,
		$state,
		$stateParams
	) {
		var hrOpenworkerSkills = this;
		hrOpenworkerSkills.roleSelected = roleSelected;
		hrOpenworkerSkills.id = $stateParams.id;
		hrOpenworkerSkills.list = [];
		hrOpenworkerSkills.listed = {};
		hrOpenworkerSkills.employeeRoleList = [];
		hrOpenworkerSkills.employee = {};

		init();

		function init()
		{

			console.log($state.current.name);
			switch($state.current.name) {
				case 'main.hr.workforce-worker-skills':
				{
					EmployeeService.roleList($stateParams.id).then(function(res) {
						hrOpenworkerSkills.employeeRoleList = res.data.roles.data;
						console.log(res);
					});

					EmployeeService.viewEmployee($stateParams.id).then(function(res) {
						hrOpenworkerSkills.employee = res.data.employee.data;

					});
				}
					break;
				case 'main.hr.workforce-worker-skills-edit':
				{

					SkillRequirementsService.list().then(function(res) {
						hrOpenworkerSkills.lists = res.data.roles.data;

						EmployeeService.roleList($stateParams.id).then(function(res) {
							hrOpenworkerSkills.employeeRoleList = res.data.roles.data;

							for(var x in hrOpenworkerSkills.lists) {
								//console.log(hrOpenworkerSkills.lists[x].name);
								var role_list_id = hrOpenworkerSkills.lists[x].id;

								for(var y in hrOpenworkerSkills.employeeRoleList) {
									if(role_list_id == hrOpenworkerSkills.employeeRoleList[y].id) {
										hrOpenworkerSkills.lists[x].checked = true;
									}
								}
							}
						});
					});
				}
					break;
			}
		}

		function roleSelected() {
			var rolesChecked = [];

			angular.forEach(hrOpenworkerSkills.lists, function(value, key) {
				if(value.checked) {
					this.push(value.id);
				}
			}, rolesChecked);

			EmployeeService.addRoleMultiple($stateParams.id, {'role': rolesChecked}).then(function(res) {
				$state.go('main.hr.workforce-worker-skills', {id: $stateParams.id});
			});
		}
	}

	function HROpenworkerSkillsDetailController (
		EmployeeService,
		SkillRequirementsService,
		$state,
		$stateParams
	){
		var skillsDetail = this;
		skillsDetail.addUserSkills = addUserSkills;

		skillsDetail.skillList = [];
		skillsDetail.userSkillList = [];
		skillsDetail.role = {};

		init();

		function init () {

			SkillRequirementsService.getRole($stateParams.role_id).then(function(res) {
				skillsDetail.role = res.data.roles.data;
			});

			SkillRequirementsService.skillList($stateParams.role_id).then(function(res) {
				console.log(res);
					skillsDetail.skillList = res.data.skills.data;

					EmployeeService.skillList($stateParams.id, $stateParams.role_id).then(function(res) {
						skillsDetail.userSkillList = res.data.skills.data;
						console.log(skillsDetail.userSkillList);

						for(var x in skillsDetail.skillList) {
							var skill_id = skillsDetail.skillList[x].id;

							for(var y in skillsDetail.userSkillList) {
								if(skill_id == skillsDetail.userSkillList[y].id) {
									skillsDetail.skillList[x].checked = true;
								}
							}
						}
					});
			});
		}

		function addUserSkills () {
			// console.log($stateParams);
			var skillChecked = [];

			angular.forEach(skillsDetail.skillList, function(value, key) {
				if(value.checked) {
					this.push(value.id);
				}
			}, skillChecked);

			console.log(skillChecked);
			EmployeeService.addSkillMultiple($stateParams.id, $stateParams.role_id, {'skill': skillChecked}).then(function(res) {
				console.log(res);
				$state.go('main.hr.workforce-worker-skills', {id: $stateParams.id});
			});
		}
	}
})();
