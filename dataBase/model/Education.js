const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    description: { type: String, required: true },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;