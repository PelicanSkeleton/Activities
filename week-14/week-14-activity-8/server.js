var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "wishes"
});

connection.connect(function(err){
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

app.get("/", (req, res) =>{
    connection.query("SELECT * FROM wish;", (err, data) =>{
        if(err) throw err;
        res.render("index", { wish: data });
    });
});

app.post("/", (req, res) =>{
    connection.query("INSERT INTO wish (wish) VALUES (?)", [req.body.wish], (err, result) =>{
        if(err) throw err;
        res.redirect("/");
    });
});

app.listen(PORT, () =>{
    console.log("Server is listening on: http://localhost:" + PORT);
})