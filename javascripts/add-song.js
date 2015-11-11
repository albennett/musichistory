// define(["jquery", "hbs"],
//  function($, hbs) {		
// //ADDS SONGS AND PLACES ARTISTS/ALBUMS IN OPTIONS
// 	return {
// 		getInputs: function(remove) {   //grabs value of add music form
// 			var songInput = $("#song-input").val();
// 			var albumInput = $("#album-input").val();
// 			var artistInput = $("#artist-input").val();
// 		//USES HANDLEBARS TO GRAB TEMPLATES OF HBS
// 			require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albums'], function(songTemplate, artistTemplate, albumTemplate) {
// 				console.log("songtemplate", songTemplate);
// 				console.log("artistTemplate", artistTemplate);

// 				//OBJECT TO CALL TO THE SONG TEMPLATE (INSTEAD OF JSON)
// 				var addIt = {
// 					songs: [
// 						{
// 						title: songInput,
// 						album: albumInput,
// 						artist: artistInput
// 						}	
// 					]	
// 				};

// 				// mainadd(songInput, albumInput, artistInput)
// 				//ADDS SONGS TO SONG LIST AND ADDS ARTIST & ALBUMS TO OPTION FORM
// 				$("#article-songs").append(songTemplate(addIt));  
// 				$("#artistsOption").append(artistTemplate(addIt));
// 				$("#albumsOption").append(albumTemplate(addIt));
				
// 				//CALLS THE REMOVE FUNCTION TO THE REMOVE BUTTON
// 				$(".bRemove").click(remove);
// 			});

// 		}
// 	};

// });