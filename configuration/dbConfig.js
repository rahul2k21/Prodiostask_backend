const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://rahulmandal2k21:jZifkDXBbPAdtlkl@cluster0.qpwuu.mongodb.net/myDatabase?retryWrites=true&w=majority&tls=true";

    await mongoose.connect(uri); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
