// app.controller("MusicCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {
app.controller("SongListCtrl", 
  // Notice the new syntax. Since I'm including one of my own dependencies
  // then I need to include each one in array of strings (just like RequireJS)
  // and have a matching argument in the callback function.
  [
    "$scope", 
    "songs-storage", 
    function($scope, songs_storage) {
      $scope.song_list = [];
      console.log('here\s the SongListCtrl!!!!!');
      songs_storage.loadSongs().then(function(songs){
      $scope.song_list = songs_storage.getSongs();  // Returns all songs
        console.log("$scope.song_list", $scope.song_list);

       
        $scope.deleteSong(songs);
      
      })
    

     $scope.deleteSong = function(song) {
        var songIndex = $scope.song_list.indexOf(song); 
          console.log("song", song);

        if (songIndex >= 0) {
            $scope.jsonSongs.splice(songIndex, 1);
          }
      }

    }
  ]
);


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

  // $scope.deleteSong = function(song) {
  //   var songIndex = $scope.song_list.indexOf(song); 
  //     console.log("song", song);

  //   if (songIndex >= 0) {
  //       $scope.jsonSongs.splice(songIndex, 1);
  //     }

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
