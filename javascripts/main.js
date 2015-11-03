$(document).ready(function() { 

  $.ajax({  //get
    	url: "data/songs.json"
  }).done(function listOfSongs (songList) {
	console.log(songList.songs);

	$("#textbox").hide();

function songList1 (){  
  	 $(this).parent().parent().remove();      
   	console.log($(this).parent().parent().remove());
   }

for (var i = 0; i <songList.songs.length; i++){
  	var currentSong = songList.songs[i];
  	$("#article-songs").append("<p>" + "<b class='songs-big'>" + currentSong.title + "</b>" + " peformed by " + currentSong.artist + " on the album " + currentSong.album +  ".    " + "<span><button class='bRemove'>Delete</button></span>" + "</p>");
 	 $("#article-songs .bRemove").click(songList1);
  }
  $("#article-songs").append("<button class='more'>More</button>");
});

$.ajax({  //get
	url: "data/moresongs.json"
}).done(function moreSongs (songList){
	console.log(songList.songs);

function songList2(){  
	$(this).parent().parent().remove();
	console.log($(this).parent().parent().remove());
   }

	$("#article-songs .more").on("click", function() {
		$("#article-songs .more").remove();
		console.log("working");
		for (var i = 0; i <songList.songs.length; i++){
			var currentSong = songList.songs[i];
			$("#article-songs").append("<p>" + "<b class='songs-big music-list'>" + currentSong.title + "</b>" + " peformed by " + currentSong.artist + " on the album " + currentSong.album + ".    "+ "<span><button class='bRemove'>Delete</button></span>" + "</p>");
			$("#article-songs .bRemove").click(songList2);
		}
		 $("#article-songs").append("<button class='more'>More</button>");
	});
});



   

var addInput = $("#add-input");
console.log(addInput);

addInput.click(function() {
	getInputs();
	leftView.show();
	rightView.show();
	addMusic.hide();
	});

function getInputs () {
	var songInput = $("#song-input").val();
	var albumInput = $("#album-input").val();
	var artistInput = $("#artist-input").val();
	
	$("#article-songs").append("<p>" + songInput + " by " + artistInput + " on the album " + albumInput + "</p>");
}


//////////////ADD////////////////
var addLink = $("#nav-add");
var rightView = $("#rightside-form");
var leftView = $("#leftside-form");
var addMusic = $("#textbox");


addLink.click (function() {
	console.log("hey");

	leftView.hide();
	rightView.hide();
	addMusic.show();

});

/////////LISTMUSIC/////////////////
var listLink = $("#nav-list");
rightView = $("#rightside-form");



listLink.click (function() {

	leftView.show();
	rightView.show();
	addMusic.hide();
});


});




