angular.module("imdb")
  .service("db", function($http) {
     this.getMovies = function () {
       return $http(
         {  
           url : "https://raw.githubusercontent.com/Danilovesovic/bands/master/externalDb.json" ,
           method : "get"
         }
       );
     }
  })