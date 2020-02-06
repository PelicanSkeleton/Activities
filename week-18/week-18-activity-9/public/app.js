/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(animals){
    //First, empty the table
    $("tbody").empty();

    //Then, for each entry of that json...
    animals.forEach(function(animal){
        //Append each of the animals properties to the table
        var tr = $("<tr>").append(
            $("<td>").text(animal.name),
            $("<td>").text(animal.numLegs),
            $("<td>").text(animal.class),
            $("<td>").text(animal.weight),
            $("<td>").text(animal.whatIWouldReallyCallIt)
        );

        $("tbody").append(tr);
    });
}

// Bonus function to change "active" header
function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  // First thing: ask the back end for json with all animals
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });

  //2. Button Interactions
  //======================

  //When user clicks the weight sort button, display table sorted by weight
  $("#weight-sort").on("click", function(){
      setActive("#animal-weight");

      //Do an api call to the back end for json with all animals sorted by weight
      $.getJSON("/weight", function(data){
          //Call our function to generate a table body
          displayResults(data);
      });
  });

  //When user clicks the name sort button, display the table sorted by name
  $("#name-sort").on("click", function(){
      //Set new column as currently-sorted (active)
      setActive("#animal-name");

      //Do an api call to the back end for json with all animals sorted by name
      $.getJSON("/name", function(data){
          //Call our function to generate a table body
          displayResults(data);
      });
  });


  