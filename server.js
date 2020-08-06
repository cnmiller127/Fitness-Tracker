const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const Workouts = require("./models/workouts");
const seed = require("./seeders/seed");
var PORT = process.env.PORT || 3007;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
//Toggle on to reset database with seed file
// seed();
mongoose.connect(process.env.MONGODB_URI || "mongodb://cnmiller127:superBase93!@ds227322.mlab.com:27322/heroku_51b9phxn", { useNewUrlParser: true });

// Listen on port 3000
app.listen(PORT, () => {
  console.log("App running! on http://localhost:3007");
});
