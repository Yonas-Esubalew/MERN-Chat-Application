import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to Mongo DB");
  } catch (error) {
    console.log("error connecting ton the mongoDB", error.message);
  }
};
export default connectToMongoDb;
