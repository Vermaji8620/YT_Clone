import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.get("/", (req, res) => res.send("this is the homepage"));
    app.listen(process.env.PORT || 8000, () =>
      console.log("server is running at port ", process.env.PORT)
    );
  })
  .catch((err) => console.log("mongodb connection failed"));

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERR : ", error);
      throw error;
      app.listen(process.env.PORT, () => {
        console.log("app is running on port", process.env.PORT);
      });
    });
  } catch (error) {
    console.log(error);
    throw new error();
  }
})();
*/
