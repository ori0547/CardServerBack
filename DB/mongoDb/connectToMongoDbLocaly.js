const mongoose = require("mongoose");

const connectToLocalDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/cardsServerBack");
        console.log("Connected to MongoDB localy");
    } catch (error) {
        console.error("Could not connect to MongoDB localy", error);
    }
};

module.exports = connectToLocalDb;