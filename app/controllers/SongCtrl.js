app.controller("SongCtrl", 
  // Notice the new syntax. Since I'm including one of my own dependencies
  // then I need to include each one in array of strings (just like RequireJS)
  // and have a matching argument in the callback function.
  [
    "$scope", 
    "$firebaseArray",
    "$location", 
    function($scope, $firebaseArray, $location) {
      // $scope.song_list = [];
      $scope.deleteSong;

      var ref = new Firebase ("https://blazing-torch-712.firebaseio.com/songs");
      $scope.songs = $firebaseArray(ref);
      console.log("scope.songs", $scope.songs);
      $scope.filterArtist = "";
      $scope.filterAlbum = "";

      $scope.deleteSong = function(song) {
      $scope.songs.$remove(song);
      }
    }
  ]
); 

  // var rightView = $("#rightside-form");
  // var leftView = $("#leftside-form");
  // var addMusic = $("#textbox");
  
  // $scope.addLink = function() {
  //   leftView.hide();
  //   rightView.hide();
  //   addMusic.show();
  // }
  // $scope.listLink = function(){
  //   leftView.show();
  //   rightView.show();
  //   addMusic.hide();
  // }
