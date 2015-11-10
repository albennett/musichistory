define(["jquery", "add-song", "populate-songs", "hbs"], 
function($, add_song, populate_songs, hbs) { 
	$("#textbox").hide();
	
// FUNCTION TO DISPLAY SONGS IN INPUT
	var listOfSongs = function(songList) { //displaying json file of songs
		//grabs content form handlebar templates and appends to html and options form
		require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], function(songTemplate, artistTemplate, albumTemplate) {
			console.log("songlist", songList);
			console.log("songtemplate", songTemplate);
			$("#article-songs").html(songTemplate(songList));
			$("#artistsOption").append(artistTemplate(songList));
			$("#albumsOption").append(albumTemplate(songList));
		});

	};

	
	

//FUNCTION TO REMOVE SONGS
	function removeMoreSongs () {  
		console.log("this", this);
		$(this).parent().parent().remove();
		console.log($(this).parent().parent().remove());
	}
//CALLS POPULATESONGS.JS & GIVES REMOVESONGS AS PARAMETER
	populate_songs.getJson(listOfSongs);
	$(document).on("click", ".bRemove", removeMoreSongs); //because it's being dynamically added
	


//CLICK ADD, AND SONGS ARE ADDED BY ADDSONG.JS TO INPUT. 
	var addInput = $("#add-input");
	console.log(addInput);

	 addInput.click(function() {
		add_song.getInputs(removeMoreSongs);
		leftView.show();
		rightView.show();
		addMusic.hide();
	});




	 //////////////ADD MUSIC NAV BAR////////////////
	var addLink = $("#nav-add");
	var rightView = $("#rightside-form");
	var leftView = $("#leftside-form");
	var addMusic = $("#textbox");


	addLink.click (function() {
		leftView.hide();
		rightView.hide();
		addMusic.show();
	});

	/////////LISTMUSIC NAV BAR/////////////////
	var listLink = $("#nav-list");

	listLink.click (function() {
		leftView.show();
		rightView.show();
		addMusic.hide();
	});

////filter






});
