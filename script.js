$(document).ready(function() { 

var app = angular.module("MusicHistory", []);

app.controller("MusicCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {

	var rightView = $("#rightside-form");
	var leftView = $("#leftside-form");
	var addMusic = $("#textbox");

    $scope.getInputs = function() {
		console.log("hello");
		leftView.show();
		rightView.show();
		addMusic.hide();
		
		var addObject ={
		  "songs": [
		    {
		      "title": "$scope.songInput",
		      "artist": "$scope.artistInput",
		      "album": "$scope.albumInput",
		    }
		    ]
		  }


		console.log("jsonSongs", $scope.jsonSongs);
		console.log("addobject", addObject);
		$scope.jsonSongs.append(addObject);
	
	}

	 $scope.deleteSong = function(song) {
		var songIndex = $scope.jsonSongs.indexOf(song); 
  		console.log("song", song);

		if (songIndex >= 0) {
		    $scope.jsonSongs.splice(songIndex, 1);
		  }

	};

	$scope.addLink = function() {
		leftView.hide();
		rightView.hide();
		addMusic.show();
	}
	$scope.listLink = function(){
		leftView.show();
		rightView.show();
		addMusic.hide();
	}


  var getSongs = $q(function(resolve, reject) {
      $http.get('./data/songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });

  getSongs.then(function (songs) {
    console.log("songs",songs);
    $scope.jsonSongs = songs;


  }, function (error) {
    console.log("Failed");
  });

}]);

});




