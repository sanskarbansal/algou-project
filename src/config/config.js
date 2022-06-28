const config = {
    mongoose: {
        url: process.env.NODE_ENV === "production" ? process.env.MONGODB_URL : process.env.DEV_MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    port: process.env.PORT || 8081,
    env: process.env.NODE_ENV,
    default_difficulty: "EASY",
};

module.exports = config;
