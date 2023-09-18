const mongoose = require("mongoose");
require('dotenv').config();

class mongo {
    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connect(
            ""
        );
        mongoose.connection.once("open", () => {
            console.log("MongoDb is Connected");
        });
        mongoose.connection.on("error", () => {
            console.log("Error occured in MongoDb Connection");
        });
    }
}

module.exports = mongo;
