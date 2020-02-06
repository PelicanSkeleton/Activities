var orm = require("./config/orm.js");
//THIS ORM WAS COPIED FROM THE PREVIOUS ACTIVITY AND NEEDS TO BE WORKED OUT!!!
//LOOK UP THE SOLVED VERSION OF THIS ACTIVITY

// Find all the parties ordering by the lowest price to the highest price.
orm.selectAndOrder("party_name", "party_type", "party_cost");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
