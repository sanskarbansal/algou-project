const { Router } = require("express");
const problemRouter = require("./problem.route");
const router = Router();

router.use("/problems", problemRouter);

module.exports = router;
