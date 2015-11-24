define(["jquery", "getunique"], 
	function($, getunique) { //POPULATE SONGS CALLS FUNCTIONS, AND PASSES ALLSONGSOBJECT AS
	return {
		listOfSongs: function(songList) { //displaying json file of songs
		
			var dataArray = $.map(songList.songs, function(e){  //turns song list into an array of each song		
						console.log("songlistsong", songList.songs);
						return e;
					});

			console.log("dataArray", dataArray);
			//calls unique file, and puts actual array into functions
			var uniqueArtist = getunique.getUniqueArtist(dataArray);
			var uniqueAlbum = getunique.getUniqueAlbum(dataArray);
		   //grabs content form handlebar templates and appends to html and options form
			require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], 
				function(songTemplate, artistTemplate, albumTemplate) {	
					console.log("songtemplate", songTemplate);
					console.log("uniqueArtist", uniqueArtist);
					console.log("songlist--", songList);

					$("#article-songs").html(songTemplate(songList));
					//unique artist gets added to options
					$("#artistsOption").html(artistTemplate(uniqueArtist)); 
					//unique album gets added to option
					$("#albumsOption").html(albumTemplate(uniqueAlbum)); 
			});

		}

	};


});