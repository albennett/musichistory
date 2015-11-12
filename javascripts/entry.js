requirejs.config({
  baseUrl: "./javascripts",
   shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    "firebase": {
      exports: "Firebase"
    }
  },

  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  }
});

require(
  ["jquery", "bootstrap", "lodash", "main", "mainadd", "filter", "delete-button"], 
  function($, bootstrap, _, main, mainadd, filter, deletebutton) {
  
  });



