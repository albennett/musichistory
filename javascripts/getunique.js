 
//MAKES EACH ARTIST & ALBUM UNIQUE FOR OPTIONS -- USED LODASH

define(["lodash"], 
	function (_) {

		return { //GETS CALLED IN LOADSONGS & ADDED TO HTML FOR OPTIONS
		 getUniqueArtist: function(dataArray) { //DATA ARRAY IS CALLED IN LOADSONGS & ARRAY OF SONGLIST
			var uniqueArtists = _.chain(dataArray)
							   .uniq('artist')
							   .pluck('artist')
							   .value();
			console.log("uniqueartists", uniqueArtists);
			return uniqueArtists;

			},
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