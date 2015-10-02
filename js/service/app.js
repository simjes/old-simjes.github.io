angular.module('simjesPortfolio', ['ngRoute', 'simjesPortfolio.controllers'])
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
