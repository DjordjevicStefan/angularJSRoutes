angular.module("imdb", [ "ngRoute" ])
  .config(function ($locationProvider,$routeProvider ) {
    $locationProvider.hashPrefix("");
    $routeProvider
     .when("/", {
       templateUrl : "pages/mainView.html",
       controller : "mainCtrl"
     }).when("/movie/:id", {
      templateUrl : "pages/movieView.html",
      controller : "movieCtrl"
     });
  })