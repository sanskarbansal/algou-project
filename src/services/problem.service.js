const { Problem } = require("../models/problem.model");
const ApiError = require("../utils/ApiError");

/**
 * Get Problem by id
 * - Fetch problem object from Mongo using the "_id" field and return user object
 * @param {String} id
 * @returns {Promise<Problem>}
 */
async function getProblemById(id) {
    let problem = null;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        problem = await Problem.findById(id);
    }

    if (!problem) throw new ApiError(404, "Problem Not Found!");

    return problem;
}

/**
 * Get All Problems
 * - Fetch all the problems
 * @returns {Promise<Problem[]>}
 */
async function getProblems() {
    return await Problem.find({});
}

module.exports = {
    getProblemById,
    getProblems,
};
