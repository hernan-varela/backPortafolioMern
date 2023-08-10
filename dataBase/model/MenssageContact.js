const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageContactSchema =  Schema(  {
    nameRemit : String,
    email : String,
    message : String,
  },
  { timestamps: true })

  module.exports = mongoose.model('MessageContact' , messageContactSchema)