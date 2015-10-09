(function () {
    'use strict'

    var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        var baseSiteUrlPath = $("base").first().attr("href");

        var baseTemplateUrl = baseSiteUrlPath + "angular/app/templates/";

        $routeProvider.when('/angular/index',
        {
            templateUrl: baseTemplateUrl + 'index.html',
            controller: 'IndexController',
        });

        $routeProvider.when('/angular/another-page',
        {
            templateUrl: baseTemplateUrl + 'another-page.html',
            controller: 'AnotherPageController',
        });

        $routeProvider.when('/angular/component-radio',
        {
            templateUrl: baseTemplateUrl + 'component-radio.html',
            controller: 'RadioController',
        });

        $routeProvider.when('/angular/pius-home',
       {
           templateUrl: baseTemplateUrl + 'pius-home.html',
           controller: 'PIUSHomeController',
       });

        $routeProvider.when('/angular/page-not-found',
        {
            templateUrl: baseTemplateUrl + 'page-not-found.html',
        });

        $routeProvider.otherwise({
            redirectTo: function () {

                if (window.location.pathname == baseSiteUrlPath || window.location.pathname == baseSiteUrlPath + "angular") {
                    window.location = baseSiteUrlPath + "angular/index";
                } else {
                    window.location = baseSiteUrlPath + "angular/page-not-found";
                }
            },
        });
        $locationProvider.html5Mode(true);

    }]);
})();





