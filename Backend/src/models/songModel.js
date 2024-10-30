import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: false },
  album: { type: String, required: true },
  image: { type: String, required: true },
  file: { type: String, require: true },
  duration: { type: String, require: true },
});

const songModel =  mongoose.models.song || mongoose.model("song",songSchema )
export default songModel;
