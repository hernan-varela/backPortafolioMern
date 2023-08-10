const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectoSchema = Schema(
  {
    title: String,
    description: String,
    usedTechnology: String,
    Images: String,
    link: String,
    likGit: String,
  },
  { timestamps: false }
);

module.exports = mongoose.model('Proyect' , ProyectoSchema)