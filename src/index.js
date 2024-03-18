// require('dotenv').config({path: './env})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
const app = express();

// javascript efi
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("====================================");
      console.log("Error: ", error);
      console.log("====================================");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("====================================");
      console.log(`App is listening on port ${process.env.PORT}`);
      console.log("====================================");
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/
