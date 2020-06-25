var express = require("express");
var cors = require("cors");
var http = require("http");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var app = (module.routeData = express());
var routeData = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "oamboo"
    // host:'109.228.46.140',
    // port:3306,
    // user:'bookitnowdb',
    // password:'~5Dz3h1r', 
    // database:'admin_bookit'
});
connection.connect(err => {
    if (err) throw err;
    console.log("connected");
});
// allow cross origin calls or requests
app.use(cors());

//set the port
app.set("port", 5000);

//use morgan to log requests to console
app.use(morgan("dev"));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/v1", routeData);

app.listen(5000, function () {
    console.log("Example app listening on port 5000.");
});

routeData.get("/cities",function(req,res){
    connection.query('SELECT * FROM `cities_mt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});
routeData.get("/countries",function(req,res){
    connection.query('SELECT * FROM `countries_mt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});
routeData.get("/education",function(req,res){
    connection.query('SELECT * FROM `education_tt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});

routeData.get("/mainCategories",function(req,res){
    connection.query('SELECT * FROM `main_categories_mt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});
routeData.get("/states",function(req,res){
    connection.query('SELECT * FROM `states_mt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});
routeData.get("/subCategories",function(req,res){
    connection.query('SELECT * FROM `sub_categories_mt`',
    
    (err,rows)=>{
        if(err) throw err ;
        let result ={};
        if(rows){
            result.data = rows;
            result.success = true;
        }
        else {
                            result.success = false;
                            result.message = "No User Found";
                        }
                        res.json(result);
    })
});