angular.module('simjesPortfolio.projectInfo', [])
        .directive('projectInfo', function () {
            return {
                restrict: 'E',
                scope: {
                    project: '='
                },
                replace: true,
                templateUrl: "templates/directive/projectInfo.html",
                controller: function ($scope) {
                      //alert("lelel" + $scope.project);
                }
            };
        });