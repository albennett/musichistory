// define(["jquery"], function($) {
// 	return function(songObject) {
// 		for (var i = 0; i <songObject.songs.length; i++) {
// 			var currentSong = songObject[i];
// 			$(".song-list").append(currentSong.title);
// 		}
// 	}
// });
define(["jquery"], function($) {

	return {
		getInputs: function(remove) {   //grabs value of add music form
			var songInput = $("#song-input").val();
			var albumInput = $("#album-input").val();
			var artistInput = $("#artist-input").val();
		
			$("#article-songs").append("<div><h1>" + songInput + "</h1>" + artistInput + " | " + albumInput + "<span><button class='bRemove btn btn-default'>Delete</button></span></div>");
			$("#article-songs .bRemove").click(remove);
		}
	};
});
