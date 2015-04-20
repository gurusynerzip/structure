angular.module('ui.router')
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/state1/list");  // By default route to state1

        $stateProvider
            .state('state1', {
                url:"/state1",
                templateUrl: "Partials/state1.html"
            })
            .state('state1.list', {
                url:"/list",
                template: "Partials/state1.list.html"
            })
            .state('state1.table', {
                url:"/table",
                template: "Partials/state1.table.html"
            })
            .state('state2', {
                url:"/state2",
                templateUrl: "Partials/state2.html"
            })
            .state('state2.list', {
                url: "/list",
                template: "Partials/state2.list.html"
            })
            .state('state2.table', {
                url: "/table",
                template: "Partials/state2.table.html"
            })
    });