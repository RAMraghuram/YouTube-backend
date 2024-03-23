// require('dotenv').config({path: './env})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log(`Error while listening ${error}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB connection failed !!! ${error}`);
  });

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
