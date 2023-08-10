const express = require("express");
const {
  getAllSocialNetwork,
  addSocialNetwork,
  deleteSocialNetworkById,
} = require("../controller/socialNetworkController");

const api = express.Router();

api.get("/allSocialNetwork", getAllSocialNetwork);
api.post("/addSocialNetwork", addSocialNetwork);
api.delete("/deleteSocialNetwork/:id/", deleteSocialNetworkById);

module.exports = api;
