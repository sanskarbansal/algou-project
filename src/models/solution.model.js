const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({
    language: {
        type: String,
        enum: ["Cpp", "Python", "Javascript"],
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
});

module.exports.solutionSchema = solutionSchema;
