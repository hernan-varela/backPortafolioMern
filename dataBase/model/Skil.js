const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skilSchema =  Schema(  {
    name : String,
    image : String,
    description : String,
  },
  { timestamps: false })

  module.exports = mongoose.model('Skil' , skilSchema)