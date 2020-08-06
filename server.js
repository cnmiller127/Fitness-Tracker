const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const Workouts = require("./models/workouts");
const seed = require("./seeders/seed");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
//Toggle on to reset database with seed file
// seed();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000! " + "http://localhost:3000/");
});
