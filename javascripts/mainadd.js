define(["jquery", "populate-songs", "main", "loadsongs"], 
	function($, populate_songs, main, loadsongs) {

//CLICK ADD, AND SONGS ARE ADDED TO FIREBASE
	$("#add-input").click(function() {

	console.log("smile"); //TAKES PLACE OF HBS TEMPLATES
	var newSong =
	 {
		"title": $("#song-input").val(),
		"artist":  $("#artist-input").val(),
		"album": $("#album-input").val()
	};

		$.ajax({//ADDS NEW SONGS TO FIREBASE
			url: "https://blazing-torch-712.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function() {
			//RUNS GETJSON FUNCTION AGAIN, LOADS ALL SONGS, INCLUDING ADDED
			// populate_songs.getJson(loadsongs.listOfSongs);
			$("#leftside-form").show();
			$("#rightside-form").show();
			$("#textbox").hide();
		
		}); 		

	});

});