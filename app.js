//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const Items = [];

const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

const day = date.getDate();
  

  res.render("list", { listTitle: day, newListItems: Items });
});

app.post("/", function (req, res) {
  let Item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(Item);
    res.redirect("/work");
  } else {
    Items.push(Item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let Item = req.body.newItem;
});

app.listen(3000, function () {
  console.log("SERVER IS RUNNIG AT PORT 3000");
});
