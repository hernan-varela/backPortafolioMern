const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectoSchema = Schema(
  {
    title: String,
    description: String,
    usedTechnology: Array,
    Images: Array,
    link: Array,
    likGit: Array,
  },
  { timestamps: false }
);

module.exports = mongoose.model('Proyect' , ProyectoSchema)