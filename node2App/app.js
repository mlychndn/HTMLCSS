const express = require("express");

const router = require("./router");

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded());

// const matchData = fs.readFileSync("./matches.csv", "utf-8");

// console.log(matchData);

app.use("/", router);

module.exports = app;
