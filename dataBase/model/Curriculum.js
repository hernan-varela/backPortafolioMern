const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema =  Schema(  {
    image : { type: String, required: true },
    link :{ type: String, required: true },


  },
  { timestamps: false })

  module.exports = mongoose.model('Curriculum' , curriculumSchema)