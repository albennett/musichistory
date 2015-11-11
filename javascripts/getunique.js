
//JUST TEST COPY OF STEVES USING LODASH

define(["lodash"], 
	function (_) {

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
			console.log("uniquealbums", uniqueAlbums);
			return uniqueAlbums;
			}
		 };

});