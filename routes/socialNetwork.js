const express = require("express");
const {} = require("../controller/SocialNetworkController");

const api = express.Router();

api.get("/allSocialNetwork", getAllPSocialNetwork);
api.post("/addSocialNetwork", addSocialNetwork);
api.delete("/deleteSocialNetwork/:id/", deleteSocialNetwork);

module.exports = api;
