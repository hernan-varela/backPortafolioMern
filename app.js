// aca se configurara todo lo relacionado a express
const express = require("express");
const bodyParser = require("body-parser");

const projectRoutes = require("./routes/project");
const curricRoutes = require("./routes/curriculum");
const educationRoutes = require("./routes/education")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/v1", projectRoutes);
app.use("/v1", curricRoutes);
app.use("/v1", educationRoutes);

module.exports = app;
