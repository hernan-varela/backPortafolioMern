const express = require("express");
const {} = require("../controller/userController");

const api = express.Router();

api.get("/getUser", getUser);
api.post("/addUser", addUser);
api.delete("/deleteUser/:id/", deleteUser);

module.exports = api;