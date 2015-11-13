define(["jquery", "loadsongs", "firebase"], 
	function($, loadsongs, Firebase) {
//GRABS JSON FROM FIREBASE. GETS CALLED ON MAIN.JS WITH LISTOFSONGS FUNCTION && MAINADD WHEN
//NEW SONGS GET ADDED
	
	var myFirebaseRef = new Firebase("https://blazing-torch-712.firebaseio.com/");

		// Listen for when anything changes on the "songs" key
		myFirebaseRef.on("value", function(snapshot) {

		  // Store the entire songs key in a local variable
		  var allSongsObject = snapshot.val();
		  loadsongs.listOfSongs(allSongsObject);


	});

});


