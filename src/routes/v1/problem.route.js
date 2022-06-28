const express = require("express");
const { getProblems } = require("../../controllers/problem.controller");

const router = express.Router();

router.get("/", getProblems);

module.exports = router;
