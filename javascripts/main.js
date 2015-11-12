define(["jquery", "populate-songs", "hbs", "loadsongs"], 
function($, hbs, loadsongs) { 
	$("#textbox").hide();
//LOADS SONGS ONTO PAGE, (GETS RELOADED IN MAINADD WHEN SOMEONE ADDS TO FIREBASE)
	// populate_songs.getJson(loadsongs.listOfSongs);

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
