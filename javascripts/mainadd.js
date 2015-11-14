define(["jquery", "add-song-promise"], 
	function($, addpromise) {

//CLICK ADD, AND SONGS ARE ADDED TO FIREBASE
	$("#add-input").click(function() {

		console.log("smile"); //TAKES PLACE OF HBS TEMPLATES
		var newSong =
		 {
			"title": $("#song-input").val(),
			"artist":  $("#artist-input").val(),
			"album": $("#album-input").val()
		};

		console.log("newsong", newSong);
		addpromise(newSong)
	      .then(function(songsData) {
	        console.log("songsData", songsData);

				$("#leftside-form").show();
				$("#rightside-form").show();
				$("#textbox").hide();
			
			}); 		

	});

});