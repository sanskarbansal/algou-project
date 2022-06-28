require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
let server;

mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        server = app.listen(config.port, () => {
            console.log("Server started on port: ", config.port);
        });
    })
    .catch((err) => {
        console.log(`ERROR while connecting to database, ${err}`);
    });
