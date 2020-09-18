import express from "express";
const router = express.Router();
import Character from "../models/Character.js";

router.get("/", (req, res) => {
  Character.find()
    .then((characters) => res.json(characters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  let allCharacters = [];
  const inputText = req.params.name.toLowerCase();

  Character.find()
    .then((characters) => {
      allCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(inputText)
      );
      return res.json(allCharacters);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
