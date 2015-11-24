define(["jquery", "add-song-promise", "delete-promise"], 
	function($, addpromise, deletepromise) {

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
	      // $("#add-input").modal("show");
	});

	$(document).on("click", ".bRemove", function(event){
			// deletes song on dom
			$(this).parent().parent().remove();
			var songKey = $(this).attr("id");
			console.log("songkey", songKey);
			deletepromise(songKey)
		});

});