angular.module('simjesPortfolio', [])
    .controller('portCtrl', function($scope, $http) {
            $scope.getContent = function () {
                $http.get('projects.json').then(function (result) {
                    $scope.projects = result;
                    alert(JSON.stringify(result));
                }, function (error) {
                    alert('error: ' + error.toString());
                });
            };
});

