import express from "express";
const router = express.Router();
import Character from "../models/Character.js";

router.get("/", (req, res) => {
  Character.find()
    .then((characters) => res.json(characters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  res.send("Filtered actors will appear here");
});

export default router;
