define(["jquery", "getunique"], 
	function($, getunique) {


	return {
		listOfSongs: function(songList) { //displaying json file of songs
		//grabs content form handlebar templates and appends to html and options form
			require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], 
				function(songTemplate, artistTemplate, albumTemplate) {

				var dataArray = $.map(songList.songs, function(e){
					return e;
				});

				var uniqueArtist = getunique.getUniqueArtist(dataArray);
				var uniqueAlbum = getunique.getUniqueAlbum(dataArray);

				console.log("dataArray", dataArray);
				console.log("songtemplate", songTemplate);
				$("#article-songs").html(songTemplate(songList));
				$("#artistsOption").html(artistTemplate(uniqueArtist));
				$("#albumsOption").html(albumTemplate(uniqueAlbum));
				// $("#artistsOption").append("Select Artist");
				// $("#albumsOption").append("Select Album");


			});

		}

	};


});