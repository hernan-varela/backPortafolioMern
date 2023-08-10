const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectoSchema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    usedTechnology: { type: String, required: true },
    Images: { type: String, required: true },
    link: { type: String, required: true },
    likGit: String,
  },
  { timestamps: false }
);

module.exports = mongoose.model("Proyect", ProyectoSchema);
