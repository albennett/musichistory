 define(["jquery"], function($){
 
var filter = $("#filter-button");
//GRABS OPTION THAT IS SELECTED 
  filter.click(function(event) {
  	console.log("hi");
    var artistOption = $("#artistsOption :selected").text();
    console.log("artistoption", artistOption);
    var albumOption = $("#albumsOption :selected").text();
    console.log("albumoption", albumOption);
    var listOfSong = $("#article-songs div"); //USED DIV, SO YOU CAN CALL INDIVIDUAL DIVS WITH FOR LOOP
    console.log("listofsong", listOfSong);

//Show song title(s) that match selected artist name & album name
    listOfSong.each(function() { //loops through each song div
    	var currentAlbumName = $(this).children(".yoalbum").text(); //selects the element
    	var currentArtistName = $(this).children(".yoartist").text(); //gave classes to differentiate in hdb
    	console.log("currentAlbumName",currentAlbumName);
    	console.log("currentArtistName",currentArtistName);
  
      $(this).show(); //so you don't have to refresh each time
      if(albumOption !== currentAlbumName && artistOption !== currentArtistName) {
        // Hides the song titles not selected
        console.log("this",this);
        $(this).hide();
      } 
    }); 
  });


});