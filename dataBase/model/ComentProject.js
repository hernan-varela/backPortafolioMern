const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentProjectSchema = Schema(
  {
    email: { type: String, required: true }, //este email sera necesario para ver quien hace comentarios
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

module.exports = mongoose.model("ComentProyect", comentProjectSchema);
