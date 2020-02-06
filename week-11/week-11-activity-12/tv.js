var axios = require("axios");
var fs = require("fs");

var TV = function() {

    var divider = "\n----------------------------------------\n";

    this.findShow = function(show) {
      // The following URL can be used to search the TV Maze API for a given show
      var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
  
      axios.get(URL).then(function(response){
          var jsonData = response.data;

          var showData = [
              "Show: " + jsonData.name,
              "Genre: " + jsonData.genres.join(", "),
              "Rating: " + jsonData.rating.average,
              "Network: " + jsonData.network.name,
              "Summary: " + jsonData.summary
          ].join("\n\n");

          fs.appendFile("log.txt", showData + divider, function(err){
              if (err) throw err;
              console.log(showData);
          });
      })
    };

    this.findActor = function(actor) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    
        // Add code to search the TVMaze API for the given actor
        axios.get(URL).then(function(response){
            console.log("Actor Response: " + response)
            var jsonData = response.data[0];
            console.log("Actor [0]: " + jsonData);

            var showData = [
                "Name: " 
            ]

        })
        // The API will return an array containing multiple actors, just grab the first result
        // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
        // Print this information to the console
      };
    

  };
  
  module.exports = TV;
  