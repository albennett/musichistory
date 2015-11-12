define(["jquery"], 
	function ($) {

		$(document).on("click", ".bRemove", function(event){
			// deletes song on dom
			$(this).parent().parent().remove();
			var songKey = $(this).attr("id");
			console.log("songKey",songKey);

			$.ajax({
			url: "https://blazing-torch-712.firebaseio.com/songs/" + songKey +"/.json",
			method: "DELETE"
		}).done(function() {

		});
	});

});