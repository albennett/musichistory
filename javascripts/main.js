define(["jquery", "add-song", "populate-songs", "hbs", "loadsongs"], 
function($, add_song, populate_songs, hbs, loadsongs) { 
	$("#textbox").hide();

	populate_songs.getJson(loadsongs.listOfSongs);

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
});
