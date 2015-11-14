define(function(require) {
  var Q = require("q");
  var $ = require("jquery");

  return  function(newSong) {
        console.log("loading add");
        var deferred = Q.defer();

    $.ajax({ 
            url: "https://blazing-torch-712.firebaseio.com/songs.json",
            method: "POST",
            data: JSON.stringify(newSong)
    }).done(function(json_data) {
        // resolve the promise and send the data
        deferred.resolve(json_data);
        console.log("song json_data", json_data);
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // reject the promise if failed
        deferred.reject(error);
        console.log("error", error);
        alert("error");
      });

    return deferred.promise;
    

};


}); 