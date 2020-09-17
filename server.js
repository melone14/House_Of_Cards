const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const charactersRouter = require("./routes/characters");
app.use("/characters", charactersRouter);

// Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
