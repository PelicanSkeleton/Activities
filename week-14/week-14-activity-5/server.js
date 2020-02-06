var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];

app.get("/icecream/:name", function (req, res) {
    const icecreamName = req.params.name.toLocaleLowerCase();
    icecreams.forEach((element, idx) => {
        if (element.name === icecreamName) {
            res.render("icecream", icecreams[idx]);
        }
    });
    // res.render("icecream", icecreams[0]);
});

app.get("/icecreams", function (req, res) {
    console.log("garbage");
    res.render("icecreams", {
        deserts: icecreams
    });
});


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
