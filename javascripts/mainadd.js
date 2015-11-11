define(["jquery", "populate-songs", "main", "listofsongs"], 
	function($, populate_songs, main, songlist) {

	$("#add-input").click(function() {

	console.log("smile");
	var newSong =
	 {
		"title": $("#song-input").val(),
		"artist":  $("#artist-input").val(),
		"album": $("#album-input").val()
	};

		$.ajax({
			url: "https://blazing-torch-712.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function(addedSong) {
			populate_songs.getJson(songlist.listOfSongs);
			$("#leftside-form").show();
			$("#rightside-form").show();
			$("#textbox").hide();
			console.log("your new song: ", addedSong);
		
		}); 
		

	});

});