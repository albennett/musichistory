define(["jquery"], function($) {

	var addInput = $("#add-input");
	console.log(addInput);

	addInput.click(function() {
		getInputs();
		leftView.show();
		rightView.show();
		addMusic.hide();
		});

	function getInputs () {
		var songInput = $("#song-input").val();
		var albumInput = $("#album-input").val();
		var artistInput = $("#artist-input").val();
		
		$("#article-songs").append("<p>" + songInput + " by " + artistInput + " on the album " + albumInput + "</p>");
	}

});