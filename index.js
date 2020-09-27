/* jshint esversion: 8 */
console.log("WattApp v0.0.1");
const express = require("express");
const Datastore = require("nedb");

const database = new Datastore("database.db");
database.loadDatabase();
const usersDB = new Datastore("usersDB.db");
usersDB.loadDatabase();

const app = express();
app.use(express.static("public"));
app.use(express.json({
  limit: "1mb"
}));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/api", (req, res) => {
  console.log("got GET request.");
  var fechaLimite = new Date("2020-09-13t23:47:00");
  database.find({
    TimeStamp: {
      $lt: fechaLimite.getTime()
    }
  }).sort({
    TimeStamp: 1
  }).exec((error, data) => {
    if (error != null) {
      console.log("Database Query Error:");
      console.log(error);
    }
    res.json(data);
  });
});

app.post("/api", (req, res) => {
  let date = new Date(Date.now()).toLocaleString();
  console.log(date + ": Got a POST request on /api from " + req.hostname + " with body:");
  console.log(req.body);
  const timeStamp = Date.now();
  const doc = {
    Current: req.body.Current,
    TimeStamp: timeStamp
  };
  database.insert(doc);

  res.json({
    status: "success"
  });
});

app.post("/api/create_user", (req, res) => {
  let date = new Date(Date.now()).toLocaleString();
  console.log(date + ": Got a POST request on /api/create_user from " + req.hostname + " with body:");
  console.log(req.body);
  usersDB.find({UserName: req.body.UserName},(DBerror, docs)=>{
    var error = 0;
    if (req.body.UserName == null || req.body.Secret == null) error = "missing_field";
    if(docs.length>0) error = "user_unavailable";
    if (!error) {
      const doc = {
        UserName: req.body.UserName,
        Secret: req.body.Secret
      };
      usersDB.insert(doc);
      res.json({
        status: "success"
      });
    } else {
      res.json({status: "failed", message: errorMsg(error), error_code : error});
    }
  });
});

function errorMsg(errorCode){
  switch (errorCode){
    case "missing_field":
      return "ERROR: Missing UserName or Secret";
    case "user_unavailable":
      return "ERROR: UserName is already in use. Please select other UserName";
  }
}
