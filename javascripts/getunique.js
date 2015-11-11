
//JUST TEST COPY OF STEVES USING LODASH

define(["lodash"], 
	function (_) {

		// var uniqueArtists = _.uniq(dataArray, "artist");
		// var uniqueAlbums = _.uniq(dataArray, "album")
		// var justTheArtists = _.pluck(uniqueArtists, "artist");
		// var justTheAlbums = _.pluck(uniqueAlbums, "album");

		return {
		 getUniqueArtist: function(dataArray) {
			//non chained syntax
			var uniqueArtists = _.chain(dataArray)
							   .uniq('artist')
							   .pluck('artist')
							   .value();
			console.log("uniqueartists", uniqueArtists);
			return uniqueArtists;

			},
			//chained methods syntax
		 getUniqueAlbum: function(dataArray) {
			var uniqueAlbums = _.chain(dataArray)
							   .uniq('album')
							   .pluck('album')
							   .value();
			return uniqueAlbums;
			}
		 };



		
		// return {
		// 	uniqueArtists: justTheArtists,
		// 	uniqueAlbums: uniqueAlbums
		// }

});


// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();