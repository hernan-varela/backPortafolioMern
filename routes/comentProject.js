const express = require("express");
const {} = require("../controller/comentController");

const api = express.Router();

api.get("/allComents", getAllComent);
api.post("/addComent", addComent);
api.delete("/deleteComent/:id/", deleteComent);

module.exports = api;
