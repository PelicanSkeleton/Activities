var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "seinfeld"
});

connection.connect