import mongoose, { Mongoose } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
