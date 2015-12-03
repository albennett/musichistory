app.controller("SongFormCtrl", 
  [
    "$scope", 
    "simple-songs", 
    function($scope, simple_songs) {
      $scope.newSong = { artist: "", album: "", name: ""};

      $scope.addSong = function() {
        simple_songs.addSong({
          artist: $scope.newSong.artist,
          name: $scope.newSong.name,
          album: $scope.newSong.album
        });
      };
    }
  ]
);