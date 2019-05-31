(function () {
	'use-strict';

	angular
		.module('app')
		.controller('ErpListController', ErpListController);

	function ErpListController(
		ErpService,
		$state
	) {
		console.log('ErpListController');
		var erp = this;
		erp.new = {};
		erp.update = {};
		erp.list = [];
		erp.view = {};

		erp.add = add;
		erp.edit = edit;
		erp.remove = remove;
		erp.update = update;
		erp.popup = 0;

		init();

		function init()
		{
			ErpService.getList().then(function(res) {
				erp.emergency_groups = res.data.emergency_groups.data;
			});
		}

		function add()
		{
			ErpService.add(erp.new).then(function(res)
			{
            	for(var i in erp.emergency_groups)
				{
					var group = erp.emergency_groups[i];
					if(group.id == parseInt(erp.new.group))
					{
						erp.emergency_groups[i].responders.unshift(res.data.new_responder.data);
						break;
					}
				}
				erp.new = {};
			});
		}

		function edit(item)
		{
			erp.view = item;
		}

		function remove(item)
		{
			var item_id = item.id;

			ErpService.remove(item_id).then(function(res) {
				console.log(res);
				 $state.reload();
			});
		}

		function update()
		{
			ErpService.update(
				erp.view.id,
				erp.view
			).then(function(res) {
				console.log(res);
			});
		}
	}

})();
