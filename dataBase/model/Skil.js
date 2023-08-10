const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skilSchema = Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    level: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 1 && value <= 100;
        },
        message: "El nivel debe ser un número entre 1 y 100",
      },
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Skil", skilSchema);
