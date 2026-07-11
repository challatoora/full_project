const mongoose = require("mongoose");

async function connectMongoDB() {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
}

module.exports = connectMongoDB;