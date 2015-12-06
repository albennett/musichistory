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

