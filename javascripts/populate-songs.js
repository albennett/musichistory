define(["jquery"], function($) {

	return {
	 	getJson: function(callBack){
			$.ajax({url: "data/songs.json"}).done(callBack);
			// callBack(listOfSongs);

	 	}

	};

});
