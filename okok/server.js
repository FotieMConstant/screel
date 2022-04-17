"use strict";

// Importing express
const express = require('express');
const screel_routes = require('./routes/v1/screel_routes')

const app = express();

// enabling CORS to accept from all origins
app.all("*", (req, res, next) => {
  console.log(`${new Date()} - request for ${req.path}`);
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// the various endpoints
// default
app.get("/", (req, res) => {
  res.send("Screel api.");
});
// 
// get all screel_routes api request
app.use(screel_routes);

// setting the port of the process or a default port 
app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port: 3000');
});

module.exports = app