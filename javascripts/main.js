define(["jquery", "add-song", "get-more-songs", "populate-songs", "hbs"], 
function($, add_song, get_more_songs, populate_songs, hbs) { 
	$("#textbox").hide();
	$(document).on("click", ".more", function() {
		console.log("working");
		get_more_songs.getJson(moreSongs); 
	}); 

	var listOfSongs = function(songList) { //displaying json file of songs
		require(['hbs!../templates/songs'], function(songTemplate) {
			console.log("songlist", songList);
			console.log("songtemplate", songTemplate);
			$("#article-songs").html(songTemplate(songList));
		});
	};

	var moreSongs = function(songList) { //displaying json file of songs
		require(['hbs!../templates/songs'], function(songTemplate) {
			console.log("just before template");
			console.log(songList);
			console.log(songTemplate);
			$("#article-songs").append(songTemplate(songList));	
		});

		require(['hbs!../templates/artists'], function(songTemplate) {
			$("#artistsOption").append(songTemplate(songList);
			$("#albumsOption").append(songTemplate(songList);
	});

	function removeMoreSongs () {  
		console.log("this", this);
		$(this).parent().parent().remove();
		console.log($(this).parent().parent().remove());
	}

	populate_songs.getJson(listOfSongs);
	// $("#article-songs").html(songList(songs));
	$(document).on("click", ".bRemove", removeMoreSongs); //because it's being dynamically added
	// $(".bRemove").click(removeMoreSongs); 


		/////add songs
	var addInput = $("#add-input");
	console.log(addInput);

	 addInput.click(function() {
		add_song.getInputs(removeMoreSongs);
		leftView.show();
		rightView.show();
		addMusic.hide();
	});

	 //////////////ADD////////////////
	var addLink = $("#nav-add");
	var rightView = $("#rightside-form");
	var leftView = $("#leftside-form");
	var addMusic = $("#textbox");


	addLink.click (function() {
		leftView.hide();
		rightView.hide();
		addMusic.show();
	});

	/////////LISTMUSIC/////////////////
	var listLink = $("#nav-list");

	listLink.click (function() {
		leftView.show();
		rightView.show();
		addMusic.hide();
	});

});
