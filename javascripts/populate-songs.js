define(["jquery"], function($) {

	return {
	 	getJson: function(callBack){
			$.ajax({
				url: "https://blazing-torch-712.firebaseio.com/.json",}).done(callBack);
			// callBack(listOfSongs);

	 	}

	};

});
