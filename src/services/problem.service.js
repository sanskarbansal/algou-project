const { Problem } = require("../models/problem.model");

/**
 * Get Problem by id
 * - Fetch problem object from Mongo using the "_id" field and return user object
 * @param {String} id
 * @returns {Promise<Problem>}
 */
async function getProblemById(id) {
    return await Problem.findById(id);
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
