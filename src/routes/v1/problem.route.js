const express = require("express");
const { getProblems, getProblem } = require("../../controllers/problem.controller");

const router = express.Router();

router.get("/", getProblems);
router.get("/:id", getProblem);

module.exports = router;
