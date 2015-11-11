define(["jquery", "populate-songs", "main", "loadsongs"], 
	function($, populate_songs, main, loadsongs) {

	$("#add-input").click(function() {

	console.log("smile");
	var newSong =
	 {
		"title": $("#song-input").val(),
		"artist":  $("#artist-input").val(),
		"album": $("#album-input").val()
	};
//ADD SONGS 
		$.ajax({
			url: "https://blazing-torch-712.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function() {
			populate_songs.getJson(loadsongs.listOfSongs);
			$("#leftside-form").show();
			$("#rightside-form").show();
			$("#textbox").hide();
		
		}); 
		

	});

});