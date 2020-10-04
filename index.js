/* jshint esversion: 8 */
console.log("WattApp v0.0.1");
const express = require("express");
const Datastore = require("nedb");
const jwt = require("jsonwebtoken");
require('dotenv').config();

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
  console.log(process.env.JWT_KEY);
});

const checkAuth = (req, res,next)=>{
  try {
    //console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    //console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};


/*-----------------
GET, siempre tiene que devolver los registros ordenados en orden tiempo
mas chico primero, es decir del mas antiguo al mas reciente
Solo limit trae la cantidad mas recientes de registros

*/

app.get("/api",checkAuth, (req, res) => {
  console.log("got GET request.");
  console.log(req.query);
  let limitRecords = parseInt(req.query.limit);
  let fromTime = 0;
  if(req.query.fromTime){
      fromTime = parseInt(req.query.fromTime);
  }

console.log(fromTime);
  database.find({TimeStamp: { $gt: fromTime }}).sort({TimeStamp: -1}).limit(limitRecords).exec((error, data) => {
    if (error != null) {
      res.sendStatus(500);
      console.log("Database Query Error:");
      console.log(error);
    } else {
      res.json(data.reverse()); //damos vuelta el array para que esetn ordenados del mas viejo al mas nuevo
    }
  });
});


/*----------------------------------------------
POST TODO:
Schema validation all are required:
  UserName
    autentificate with secret
  DeviceName
    Aplhanumeric, no WS
  Current, Voltage, Power
    number
  TimeStamp
    number

-----------------------------------------------*/
app.post("/api", (req, res) => {
  let date = new Date(Date.now()).toLocaleString();
  console.log(date + ": Got a POST request on /api from " + req.hostname + " with body:");
  console.log(req.body);
  const timeStamp = Date.now();
  const doc = {
    UserName: req.body.UserName,
    DeviceName: req.body.DeviceName,
    Current: req.body.Current,
    Voltage: req.body.Voltage,
    Power: req.body.Power,
    TimeStamp: req.body.TimeStamp,
    ServerTimeStamp: timeStamp
  };
  database.insert(doc);

  res.json({
    status: "success"
  });
});

//----user routes----

app.post("/api/create_user", (req, res) => {
  let date = new Date(Date.now()).toLocaleString();
  console.log(date + ": Got a POST request on /api/create_user from " + req.hostname + " with body:");
  console.log(req.body);
  usersDB.find({
    UserName: req.body.UserName
  }, (DBerror, docs) => {
    var error = 0;
    if (req.body.UserName == null || req.body.Secret == null) error = "missing_field";
    if (docs.length > 0) error = "user_unavailable";
    if (!error) {
      const doc = {
        UserName: req.body.UserName,
        Secret: req.body.Secret
      };
      //TODO: validate character set befor inserting to database
      usersDB.insert(doc);
      res.json({
        status: "success"
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: errorMsg(error),
        error_code: error
      });
    }
  });
});

app.post("/api/login", (req, res) =>{
  console.log(req.body);
  usersDB.find({UserName: req.body.UserName}, (DBerror, docs) => {
    if (docs.length>=1&&req.body.Secret == docs[0].Secret){
      //succes, respode with tocken
      const token = jwt.sign({
        UserName:docs[0].UserName,
        userID: docs[0]._id},
        process.env.JWT_KEY,
        {expiresIn: "1h"});
      res.json({status: "success", token: token});
    } else {
      res.status(401).json({status: "failed", message: "Auth failed"});
    }
  });
});

function errorMsg(errorCode) {
  switch (errorCode) {
    case "missing_field":
      return "ERROR: Missing UserName or Secret";
    case "user_unavailable":
      return "ERROR: UserName is already in use. Please select other UserName";
  }
}
