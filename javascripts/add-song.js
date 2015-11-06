define(["jquery", "hbs"],
 function($, hbs) {

	return {
		getInputs: function(remove, callback) {   //grabs value of add music form
			var songInput = $("#song-input").val();
			var albumInput = $("#album-input").val();
			var artistInput = $("#artist-input").val();
		
			require(['hbs!../templates/songs'], function(songTemplate) {
				console.log("callback", callback);
				console.log("songtemplate", songTemplate);

				var addIt = {
					songs: [
						{
						title: songInput,
						album: albumInput,
						artist: artistInput
						}	
					]	
				};

				$("#article-songs").append(songTemplate(addIt));  //callback is undefined? do i need callback?
				// $("#article-songs").append("<div><h1>" + songInput + "</h1>" + artistInput + " | " + albumInput + "<span><button class='bRemove btn btn-default'>Delete</button></span></div>");
				$(".bRemove").click(remove);
			});

		}
	};

});
