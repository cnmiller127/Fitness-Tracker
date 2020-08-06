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

mongodb://heroku_12gbh048 : 7tmm24mfa5phd385b8a55457uj @ds143231.mlab.com: 43231/heroku_12gbh048
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
//Toggle on to reset database with seed file
// seed();
mongoose.connect(process.env.MONGODB_URI || "mongodb://cnmiller127:superBase93!@ds227322.mlab.com:27322/heroku_51b9phxn", { useNewUrlParser: true });

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000! " + "http://localhost:3000/");
});
