
var app = angular.module("myApp", ['ngRoute', 'ngResource']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/fresher/view/fresher.html"
    })
    .when("/fresherlist", {
        templateUrl : "/fresher/view/fresher.html"
    })
    .when("/about", {
        templateUrl : "/fresher/view/about.html"
    })
    .when("/login", {
        templateUrl : "/fresher/view/login.html"
    });
});