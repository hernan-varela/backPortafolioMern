const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema =  Schema(  {
    user_id : String,
    link : String,


  },
  { timestamps: false })

  module.exports = mongoose.model('Curriculum' , curriculumSchema)