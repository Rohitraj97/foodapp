const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://foodapp:foodapp123@cluster0.lum7s2z.mongodb.net/foodapp?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;