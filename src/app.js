const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");

const app = express();

// parse json request body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
});

// handle error
app.use(errorHandler);

module.exports = app;
