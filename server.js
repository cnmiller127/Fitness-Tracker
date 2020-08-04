const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitness-tracker";
const collections = ["excercises"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
