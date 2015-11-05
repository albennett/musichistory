require(["jquery", "dom-access", "get-more-songs", "populate-songs"], 
function($, dom_access, get_more_songs, populate_songs) { 
	$("#textbox").hide();

	//Get First List of Songs---->
	populate_songs.getJson(listOfSongs);

	function listOfSongs (songList) { //displaying json file of songs
		console.log(songList.songs);
		//function to remove song when remove button is clicked
		function removeSong (){  
			console.log(this);
		  	 $(this).parent().parent().remove();      
		   		console.log($(this).parent().parent().remove());
		   }
		   //loops through all the songs and moves them to the DOM
		for (var i = 0; i <songList.songs.length; i++){ 
		  	var currentSong = songList.songs[i];
		  	$("#article-songs").append("<div><h1>" + currentSong.title + "</h1>" + currentSong.artist + " | " + currentSong.album +  "    " + "<span><button class=' bRemove btn btn-default'>Delete</button></span></div>");
		 	 $("#article-songs .bRemove").click(removeSong); //removes song when clicked
		  }
	 	 $("#article-songs").append("<button class='more btn btn-default btn-lg'>More</button>"); //adds a more button
	}

	function moreSongs (songList){
		console.log(songList.songs);
		$("#article-songs .more").remove();
		for (var i = 0; i <songList.songs.length; i++){
			var currentSong = songList.songs[i];
			$("#article-songs").append("<div><h1>" + currentSong.title + "</h1>" + currentSong.artist + " | " + currentSong.album + "    "+ "<span><button  class=' bRemove btn btn-default''>Delete</button></span></div>");
			$("#article-songs .bRemove").click(removeMoreSongs);
		}
		$("#article-songs").append("<button class='more'>More</button>"); //adds the more button again
	}

	function removeMoreSongs(){  
		$(this).parent().parent().remove();
		console.log($(this).parent().parent().remove());
	}

	$(document).on("click", ".more", function() {
		console.log("working");
		get_more_songs.getJson(moreSongs);
	});

/////add songs
	var addInput = $("#add-input");
	console.log(addInput);

	 addInput.click(function() {
		getInputs();
		leftView.show();
		rightView.show();
		addMusic.hide();
	});

	function getInputs () {   //grabs value of add music form
		var songInput = $("#song-input").val();
		var albumInput = $("#album-input").val();
		var artistInput = $("#artist-input").val();
	


		$("#article-songs").append("<div><h1>" + songInput + "</h1>" + artistInput + " | " + albumInput + "<span><button class='bRemove btn btn-default'>Delete</button></span></div>");
		$("#article-songs .bRemove").click(removeMoreSongs);
	}

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

// ^^^^^^^ Nothing below here!