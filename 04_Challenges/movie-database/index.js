"use strict";
const express = require("express");
const port = 3000;
const app = express();

const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("welcome");
});

app.listen(3000, () => {
  console.log("OK : server listing on port : 3000");
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  let date1 = new Date();
  let hours = date1.getHours();
  let minutes = date1.getMinutes();
  res.send({ status: 200, message: hours + " :" + minutes });
});

app.get("/hello", (req, res) => {
  parameter = "Hello, " + req.params.tagid;
  res.send({ status: 200, message: parameter });
});

app.get('/search',(req,res) => {
  const search = req.query.s;

  if (typeof search != 'undefined') {
      
      const response = {
          status:200, message:"ok", data: search
      };

      res.send(response);
  }
  else {
      const response = {
          status:500, error:true, message: "you have to provide a search"
      };

      res.status(500);
      res.send(response);
  }
})