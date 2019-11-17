//import axios from "axios";

// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var nodeArgs = process.argv;
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// ...

for(i = 2; i < nodeArgs.length; i++){
    if(i > 2 && i < nodeArgs.length){
        movieName = movieName + "+" + nodeArgs[i];
    } else {
        movieName += nodeArgs[i];
    };
};

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
//console.log(queryUrl);


// Then create a request with axios to the queryUrl
axios.get(queryUrl).then(function (response){
    //console.log(response);
    console.log(movieName + " was made in: " + response.data.Year);

});

// If the request with axios is successful
// ...

// Then log the Release Year for the movie
// ...
