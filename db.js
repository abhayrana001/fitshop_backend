const mongoose = require('mongoose');
require("dotenv").config()

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = connectToDb;
