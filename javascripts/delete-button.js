define(["jquery", "delete-promise"],  
	function ($, deletepromise) {

		$(document).on("click", ".bRemove", function(event){
			// deletes song on dom
			$(this).parent().parent().remove();
			var songKey = $(this).attr("id");
			console.log("songkey", songKey);
			deletepromise(songKey)
		    	.then(function() {
			}); 
		});

});