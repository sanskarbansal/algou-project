const mongoose = require("mongoose");
const config = require("../config/config");

const { solutionSchema } = require("./solution.model");

const cartSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        solutions: [solutionSchema],
        difficulty: {
            type: String,
            enum: ["EASY", "MEDIUM", "DIFFICULT"],
            default: config.default_difficulty,
        },
        problemStatement: {
            type: String,
            required: true,
            minLength: 50,
        },
    },
    {
        timestamps: false,
    }
);

/**
 * @typedef Problem
 */
const Problem = mongoose.model("Problem", cartSchema, "problems");

module.exports.Problem = Problem;
