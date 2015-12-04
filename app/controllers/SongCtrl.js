// app.controller("MusicCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {
app.controller("SongCtrl", 
  // Notice the new syntax. Since I'm including one of my own dependencies
  // then I need to include each one in array of strings (just like RequireJS)
  // and have a matching argument in the callback function.
  [
    "$scope", 
    "firebaseArray", 
    function($scope, $firebaseArray) {
      // $scope.song_list = [];
      // $scope.deleteSong;

// $scope.songId = $routeParams.id 
      var ref = new Firebase ("https://blazing-torch-712.firebaseio.com/songs");
      $scope.songs = $firebaseArray(ref);
      console.log("scope.songs", $scope.songs);

     //  console.log('here\s the SongListCtrl!!!!!');
     //  songs_storage.loadSongs().then(function(songs){
     //  $scope.song_list = songs_storage.getSongs();  // Returns all songs
     //    console.log("$scope.song_list", $scope.song_list);

     //   console.log("songs for delete", songs);
     //    // $scope.deleteSong(songs);
      
     //  })
    

     // $scope.deleteSong = function(song) {
     //    var songIndex = $scope.song_list.indexOf(song); 
     //      console.log("song", song);

     //    if (songIndex >= 0) {
     //        $scope.song_list.splice(songIndex, 1);
     //      }
     //  }

    }
  ]
); 
//song detail.html
// ng-repeat="currentSong in songs><a href= detail/ {{ currentSong.$id }}


  // var rightView = $("#rightside-form");
  // var leftView = $("#leftside-form");
  // var addMusic = $("#textbox");

  // $scope.jsonSongs = [];
  // $scope.filterArtist = "";
  // $scope.filterAlbum = "";

  // $scope.newSong = { artist: "", album: "", name: ""};

  // $scope.addSong = function() {
  //   $scope.songs.$add({
  //     artist: $scope.newSong.artist,
  //     name: $scope.newSong.name,
  //     album: $scope.newSong.album
  //   });
  // };

  // $scope.filterList = function() {
  //   $scope.filterArtist = "";
  //   $scope.filterAlbum = "";
  // };

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
