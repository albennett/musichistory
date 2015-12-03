app.controller("SongFormCtrl", 
  [
    "$scope", 
    "songs-storage", 
    function($scope, songs_storage) {
      $scope.newSong = { artist: "", album: "", title: ""};

      $scope.addSong = function() {
        songs_storage.addSong( $scope.newSong );

        songs_storage.loadSongs().then(function(songs){

          $scope.song_list = songs;  // Returns all songs
          console.log("$scope.song_list", $scope.song_list);

      
        }); 
      }
    }
  ]
);