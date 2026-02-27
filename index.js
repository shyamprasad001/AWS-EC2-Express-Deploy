const express = require("express");
const path = require("path");
const pug = require("pug");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/home", (req, res) => {
  const subjects = [
    "DevOps",
    "CC",
    "SPM",
    "CD",
    "CNS",
    "CC LAB",
    "CNS LAB",
    "PYTHON",
    "ML",
  ];
  res.render("sample.pug", { sub: subjects });
});

app.listen(4000, () => {
  console.log("SERVER RUNNING");
});
