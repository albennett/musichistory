var app = angular.module("MusicHistory", 
  ["firebase", "ngRoute"]);

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
      })
      // when('/songs/details/:songId'), {
      //   templateUrl: 
      // }
      .otherwise('/songs/list');
  }]);







