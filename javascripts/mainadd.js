define(["jquery"], function($) {

	$("#add-input").click(function(e) {
	var inputForSong = $("#song-input").val();

	var newSong =
	 {
		"name": $("#song-input").val(),
		"artist":  $("#artist-input").val(),
		"album": $("#album-input").val()
	}


	

		$.ajax({
			url: "https://blazing-torch-712.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function(addedSong) {
			console.log("your new song: ", addedSong)
		
		});

	});

});