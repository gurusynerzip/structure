angular.module('names')
    .controller('myCtrl', ['$scope', '$filter','myService', function($scope, $filter, myService) {
        $scope.addName = function() {
            myService.addName($scope.name);
            $scope.name = '';
        };
        $scope.names = myService.items;
        $scope.test = $filter('capFilter') ('abc');
    }]);