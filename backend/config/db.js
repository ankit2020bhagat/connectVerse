import mongoose from "mongoose";
const mongoDBUrl = "mongodb://127.0.0.1:27017/connectverse";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
