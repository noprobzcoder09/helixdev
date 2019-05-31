app.controller('AppController', function($scope, Auth, $state, $http, baseUrl) {
    $scope.app = {};
    $scope.bgLogin = true;
    $scope.loader;
});
app.controller('DropdownCtrl', function($scope, $log) {
    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});