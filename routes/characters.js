const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here the actors will come");
});

router.route("/:name").get((req, res) => {
  res.send("Filtered actors will appear here");
});

module.exports = router;
