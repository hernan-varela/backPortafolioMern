const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skilSchema =  Schema(  {
    name : { type: String, required: true, unique: true },
    image : { type: String, required: true },
    description : { type: String, required: true},
    level : { type: Number, required: true, },
  },
  { timestamps: false })

  module.exports = mongoose.model('Skil' , skilSchema)