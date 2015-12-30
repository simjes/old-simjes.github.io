angular.module('simjesPortfolio', ['ui.router', 'simjesPortfolio.controllers', 'simjesPortfolio.projectInfo'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'portCtrl'
            });
    });
