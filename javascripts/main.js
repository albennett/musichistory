define(["jquery", "add-song", "get-more-songs", "populate-songs", "hbs"], 
function($, add_song, get_more_songs, populate_songs, hbs) { 
	$("#textbox").hide();
	$(document).on("click", ".more", function() {
		console.log("working");
		get_more_songs.getJson(moreSongs);
	});

	var listOfSongs = function(songList) { //displaying json file of songs
		require(['hbs!../templates/songs'], function(songTemplate) {
			console.log("just before template");
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
	};


	populate_songs.getJson(listOfSongs);
	// $("#article-songs").html(songList(songs));
	$("#article-songs .bRemove").click(removeMoreSongs); 

	function removeMoreSongs(){  
		$(this).parent().parent().remove();
		console.log($(this).parent().parent().remove());
	}

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

	//Get First List of Songs---->
	



	

	
		//function to remove song when remove button is clicked
		
		//    loops through all the songs and moves them to the DOM
		// for (var i = 0; i <songList.songs.length; i++){ 
		//   	var currentSong = songList.songs[i];

		// 	});
		
  				

		  	// $("#article-songs").append("<div><h1>" + currentSong.title + "</h1>" + currentSong.artist + " | " + currentSong.album +  "    " + "<span><button class=' bRemove btn btn-default'>Delete</button></span></div>");
		 	 //removes song when clicked
		  // }
	

	





	// function getInputs () {   //grabs value of add music form
	// 	var songInput = $("#song-input").val();
	// 	var albumInput = $("#album-input").val();
	// 	var artistInput = $("#artist-input").val();
	


	// 	$("#article-songs").append("<div><h1>" + songInput + "</h1>" + artistInput + " | " + albumInput + "<span><button class='bRemove btn btn-default'>Delete</button></span></div>");
	// 	$("#article-songs .bRemove").click(removeMoreSongs);
	// }

	



// ^^^^^^^ Nothing below here!

