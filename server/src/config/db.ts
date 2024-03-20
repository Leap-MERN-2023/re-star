import color from "colors";
import mongoose from "mongoose";

export const connectDB = async (url: string) => {
  try {
    console.log("usr");
    await mongoose.connect(url);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(`${error} occured`);
  }
};
