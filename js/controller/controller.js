angular.module('simjesPortfolio.controllers', [])
    .controller('portCtrl', function ($scope, $http) {
        $scope.getContent = function () {
            $http.get('projects.json').then(function (result) {
                $scope.projects = angular.fromJson(result).data;
            }, function (error) {
                alert('error: ' + error.toString());
            });
        };

    });

