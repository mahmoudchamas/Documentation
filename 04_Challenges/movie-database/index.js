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

