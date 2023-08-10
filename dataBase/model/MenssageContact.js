const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageContactSchema = Schema(
  {
    visibility: Boolean,
    nameRemit: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (email) {
          // Expresión regular para validar emails
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return emailRegex.test(email);
        },
        message: "Ingrese un email válido",
      },
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MessageContact", messageContactSchema);

