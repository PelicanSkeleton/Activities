var TV = require("./tv");

var tv = new TV();

// Write code here to parse command line arguments and store them into variables
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// By default, if no search type is provided, search for a tv show
if (!search) {
    search = "show";
  }
  
  // By default, if no search term is provided, search for "Andy Griffith"
  if (!term) {
    term = "Andy Griffith";
  }
  
  // Print whether searching for a show or actor, print the term as well
  if (search === "show") {
    console.log("Searching for TV Show");
    tv.findShow(term);
  } else {
    tv.findActor(term);
    console.log("Searching for TV Actor");
  }
  