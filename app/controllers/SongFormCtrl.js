app.controller("SongFormCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://blazing-torch-712.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = {};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        album: $scope.newSong.album,
        title: $scope.newSong.title
      });
    };
  }
]);


// app.controller("SongFormCtrl", 
//   [
//     "$scope", 
//     "songs-storage", 
//     function($scope, songs_storage) {
//       $scope.newSong = { artist: "", album: "", title: ""};

//       $scope.addSong = function() {
//         songs_storage.addSong( $scope.newSong );

//         songs_storage.loadSongs().then(function(songs){

//           $scope.song_list = songs;  // Returns all songs
//           console.log("$scope.song_list", $scope.song_list);

      
//         }); 
//       }
//     }
//   ]
// );

