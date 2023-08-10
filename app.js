// aca se configurara todo lo relacionado a express
const express = require("express");
const bodyParser = require("body-parser");

const projectRoutes = require("./routes/project");
const curricRoutes = require("./routes/curriculum");
const educationRoutes = require("./routes/education");
const messageContact = require("./routes/messageContact");
const skilController = require("./routes/skil");
const socialNetworkCntrlr = require("./routes/socialNetwork")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", projectRoutes);
app.use("/v1", curricRoutes);
app.use("/v1", educationRoutes);
app.use("/v1", messageContact);
app.use("/v1",skilController);
app.use("/v1", socialNetworkCntrlr)


module.exports = app;
 