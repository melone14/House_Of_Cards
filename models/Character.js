const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  actor_name: String,
  img: String,
  isFemale: Boolean,
  filmweb_link: String,
  seasons: String,
});

module.exports = mongoose.model("Character", characterSchema);
