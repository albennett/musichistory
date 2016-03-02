var app = angular.module("MusicHistory", 
  ["firebase", "angular.filter", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/songdetail.html',
        controller: 'SongDetailCtrl'
      })
      .otherwise({ redirectTo: '/songs/list'});
  }]);







