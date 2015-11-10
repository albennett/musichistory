define(["jquery"], function($) {
//GRABS JSON FROM FIREBASE. GETS CALLED ON MAIN.JS WITH LISTOFSONGS FUNCTION
	return {
	 	getJson: function(callBack){
			$.ajax({
				url: "https://blazing-torch-712.firebaseio.com/.json",}).done(callBack);
	 	}

	};

});
