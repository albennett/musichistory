define(["jquery"], function($) {

	return {
	 	getJson: function(callBack){
			$.ajax({
				url: "data/moresongs.json"
			}).done(callBack);
 		}
	};

});