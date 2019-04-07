angular.module("imdb")
  .controller("movieCtrl" , function ($scope, db ,$routeParams) {

    
    
    ///// uzimamo jason data pomocu pomocnog servisa koji postoji u samom angularJS, fakticki funkcija koja nam olaksava ajax req

    db.getMovies().then(function (res) {
      
      let movieOne = res.data ;
      let test = movieOne.filter(function (xx) {
      return xx.id == $routeParams.id ;
      }) 

      $scope.movie = test[0] ;
 });

  ////// preko routeParams gadjamo tacno iz areja movie na koji smo kliknuli na mainView strani. i to preko filter funkcije koja vraca tacno objekat iz jsona areja koji ima u parametrima isti id kao sto je routeparams.id
  
    
  } )