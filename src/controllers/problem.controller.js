const catchAsync = require("../utils/catchAsync");
const { problemService } = require("../services");

/**
 * Get list of all products (Not authenticated route)
 *
 * Example responses:
 * HTTP 200
 *
 * [
 *     {
 *      "difficulty": "EASY",
 *      "_id": "62baa062172ad24bedc4b863",
 *      "title": "1-Two Sum",
 *      "problem": "Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.\nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.\n\nExample:\n```js\nGiven nums = [2, 7, 11, 15], target = 9,\n\nBecause nums[0] + nums[1] = 2 + 7 = 9,\nreturn [0, 1].\n```",
 *      "solutions": []
 *     }
 *]
 *
 */
const getProblems = catchAsync(async (req, res) => {
    const problems = await problemService.getProblems();

    res.send(problems);
});

module.exports = {
    getProblems,
};
