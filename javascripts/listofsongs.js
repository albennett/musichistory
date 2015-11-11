define(["jquery"], 
	function($) {


	return {
		listOfSongs: function(songList) { //displaying json file of songs
		//grabs content form handlebar templates and appends to html and options form
			require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], function(songTemplate, artistTemplate, albumTemplate) {
				console.log("songlist", songList);
				console.log("songtemplate", songTemplate);
				$("#article-songs").html(songTemplate(songList));
				$("#artistsOption").html(artistTemplate(songList));
				$("#albumsOption").html(albumTemplate(songList));


			});

		}

	};


});