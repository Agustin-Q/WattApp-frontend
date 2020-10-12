/* jshint esversion: 8 */
console.log("WattApp v0.0.1");
const express = require("express");
const Datastore = require("nedb");
const jwt = require("jsonwebtoken");
const volleyball = require("volleyball");
require('dotenv').config();
const auth = require("./routes/auth.js");

const database = new Datastore("database.db");
database.loadDatabase();
const usersDB = new Datastore("usersDB.db");
usersDB.loadDatabase();

const app = express();
app.use(express.static("public"));
app.use(express.json({
  limit: "1mb"
}));
app.use(volleyball);
app.use("/api/auth", auth);

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
