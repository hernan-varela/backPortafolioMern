const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date,
    description: String
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;