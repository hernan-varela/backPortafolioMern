const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true, unique: true },
  name: {type :String , required: true},
  password: { type: String, required: true },
  roles: { type: [String], default: ["user"] }, // Por defecto, el rol es 'user'
});

const User = mongoose.model("User", userSchema);

module.exports = User;
