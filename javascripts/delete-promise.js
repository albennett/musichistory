define(function(require) {
  var Q = require("q");
  var $ = require("jquery");



  return  function(songKey) {
        console.log("loading add");
        var deferred = Q.defer();
        console.log("songKey",songKey);

  $.ajax({
      url: "https://blazing-torch-712.firebaseio.com/songs/" + songKey +"/.json",
      method: "DELETE"
      }).done(function() {
        deferred.resolve();
    })
      .fail(function(xhr, status, error) {
        // reject the promise if failed
        deferred.reject(error);
        console.log("error", error);
        alert("error");
      });

    return deferred.promise;


  };


});