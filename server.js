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
  database: "oamboo",
  // host:'109.228.46.140',
  // port:3306,
  // user:'bookitnowdb',
  // password:'~5Dz3h1r',
  // database:'admin_bookit'
});
connection.connect((err) => {
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

routeData.get("/cities", function (req, res) {
  connection.query(
    "SELECT * FROM `cities_mt`",

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
routeData.get("/countries", function (req, res) {
  connection.query(
    "SELECT * FROM `countries_mt`",

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
routeData.get("/education", function (req, res) {
  connection.query(
    "SELECT * FROM `education_tt`",

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});

routeData.get("/mainCategories", function (req, res) {
  connection.query(
    "SELECT * FROM `main_categories_mt`",

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
routeData.get("/states", function (req, res) {
  connection.query(
    'SELECT * FROM states_mt WHERE country_id="101"',

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
routeData.get("/subCategories", function (req, res) {
  connection.query(
    "SELECT * FROM `sub_categories_mt`",

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows;
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
routeData.post("/postJobs", function (req, res) {
  var postData = req.body;
  console.log(postData);
  connection.query(
    `INSERT INTO jobs_openings (profile_title, job_type, job_role, no_of_vacancies, closing_date, min_salary, max_salary, salary_range, experience, req_status, education, pref_location, key_skills, description,status)
     VALUES ('${postData.profile_title}','${postData.job_type}','${postData.job_role}','${postData.no_of_vacancies}','${postData.closing_date}','${postData.min_salary}','${postData.max_salary}','${postData.salary_range}','${postData.experience}','${postData.req_status}','${postData.education}','${postData.pref_location}','${postData.key_skills}','${postData.description}','p')`,

    (err, rows) => {
      if (err) throw err;
      let result = {};
      if (rows) {
        result.data = rows[0];
        result.success = true;
      } else {
        result.success = false;
        result.message = "No User Found";
      }
      res.json(result);
    }
  );
});
