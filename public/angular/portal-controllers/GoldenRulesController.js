(function () {
    'use-strict';

    angular
        .module('app')
        .controller('GoldenRulesController', Controller)

    function Controller(
		GoldenRuleService
    ) {
        console.log('GoldenRulesController');
        var rules = this;
        rules.new = {};
        rules.view = {};
        rules.list = [];

        rules.add = add;
        rules.edit = edit;
        rules.update = update;

		init();

		function init() {
			GoldenRuleService.getList().then(function(res) {
				rules.list = res.data.golden_rules.data;
			});
		}

        function add() {
            console.log(rules.new);
            GoldenRuleService.add(
                rules.new
            ).then(function(res) {
                rules.list.unshift(res.data.new_golden_rule.data);
            });
        }

        function edit(rule) {
            console.log(rule);
            rules.view = rule;
        }

        function update() {
            GoldenRuleService.update(
                rules.view.id,
                rules.view
            ).then(function(res) {

            });
        }
    }

})();
