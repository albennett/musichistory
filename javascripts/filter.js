 define(["jquery"], function($){

var filter = $("#filter-button");

  filter.click(function(event) {
  	console.log("hi");
    var artistOption = $("#artistsOption :selected").text();
    console.log("artistoption", artistOption);
    var albumOption = $("#albumsOption :selected").text();
    console.log("albumoption", albumOption);
    var listOfSong = $("#article-songs div");
    console.log("listofsong", listOfSong);
    console.log("event", event);

//Show song title(s) that match selected artist name & album name
    listOfSong.each(function() {
    	// console.log("this", this);

    	var currentAlbumName = $(this).children(".yoalbum").text();
    	var currentArtistName = $(this).children(".yoartist").text();
    	console.log("currentAlbumName",currentAlbumName);
    	console.log("currentArtistName",currentArtistName);
  
      $(this).show();
      if(albumOption !== currentAlbumName && artistOption !== currentArtistName) {
        // Hides the song titles not selected
        console.log("this",this);
        $(this).hide();
      } 
    }); 
  });


});