import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
app.use(cors());
app.use(express.json());

// SETUP DATABASE
import mongoose from "mongoose";
const URL = process.env.MONGO_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected with DB!");
});

//SEED DB
// import { seedDB } from "./seedDB.js";
// seedDB();

import charactersRouter from "./routes/characters.js";
app.use("/characters", charactersRouter);

// Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
