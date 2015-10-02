angular.module('simjesPortfolio', ['ngRoute', 'simjesPortfolio.controllers', 'simjesPortfolio.projectInfo'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: "templates/home.html",
                            controller: "portCtrl"
                        })
                        .otherwise({
                            redirectTo: "/"
                        });
            }]);
