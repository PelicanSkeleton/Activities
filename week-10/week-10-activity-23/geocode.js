// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================
const location = process.argv.slice(2).join(" ");
// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "Z2LEnqGGf9xSE7QFWaaEQE5eHTIRyCmp"
};



// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);




// Take in the command line arguments
console.log(process.argv);
process.argv[2]




// Then use the geocoder object to search the address
geocoder.geocode(location, (err, results)=>{
    console.log(JSON.stringify(results, null, 2));
});
