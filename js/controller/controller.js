angular.module('simjesPortfolio.controllers', [])
    .controller('portCtrl', function($scope, $http) {
            $scope.getContent = function () {
                $http.get('projects.json').then(function (result) {
                    $scope.projects = result;
                    //alert(JSON.stringify(result));
                }, function (error) {
                    alert('error: ' + error.toString());
                });
            };
            
            $scope.testingbtn = function() {
              $scope.getContent();  
              alert(JSON.stringify($scope.projects));
            };
});

