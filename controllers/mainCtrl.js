angular.module("imdb")
  .controller("mainCtrl" , function ($scope, db) {

    $scope.allmovies =  [] ;
    
    ///// uzimamo jason data pomocu pomocnog servisa koji postoji u samom angularJS, fakticki funkcija koja nam olaksava ajax req

    db.getMovies().then(function (res) {
      $scope.allmovies = res.data ;
    });
    
  } )