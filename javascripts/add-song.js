define(["jquery", "hbs"],
 function($, hbs) {

	return {
		getInputs: function(remove, callback) {   //grabs value of add music form
			var songInput = $("#song-input").val();
			var albumInput = $("#album-input").val();
			var artistInput = $("#artist-input").val();
		
			require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], function(songTemplate, artistTemplate, albumTemplate) {
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

				$("#article-songs").append(songTemplate(addIt));  
				$("#artistsOption").append(artistTemplate(addIt));
				$("#albumsOption").append(albumTemplate(addIt));
				
				
				$(".bRemove").click(remove);
			});

		}
	};

});
