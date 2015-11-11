define(["jquery", "add-song", "populate-songs", "hbs", "listofsongs"], 
function($, add_song, populate_songs, hbs, getsongs) { 
	$("#textbox").hide();
	

	//FUNCTION TO REMOVE SONGS
	function removeMoreSongs () {  
		console.log("this", this);
		$(this).parent().parent().remove();
		console.log($(this).parent().parent().remove());
	}
	// FUNCTION TO DISPLAY SONGS IN INPUT

	populate_songs.getJson(getsongs.listOfSongs);
		$(document).on("click", ".bRemove", removeMoreSongs);


//CLICK ADD, AND SONGS ARE ADDED BY ADDSONG.JS TO INPUT. 
	var addInput = $("#add-input");
	console.log(addInput);


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
