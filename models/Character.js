import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: String,
  actor_name: String,
  img: String,
  isFemale: Boolean,
  filmweb_link: String,
  seasons: String,
});

export default mongoose.model("Character", characterSchema);
