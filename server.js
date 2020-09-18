const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

// SETUP DATABASE
const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected with DB!");
});

const charactersRouter = require("./routes/characters");
app.use("/characters", charactersRouter);

// Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
