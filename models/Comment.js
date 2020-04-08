import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text in required",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Comment", CommentSchema);
