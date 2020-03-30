import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is Reuired"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("video", VideoSchema);
