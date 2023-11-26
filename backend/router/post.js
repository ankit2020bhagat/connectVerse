import express from "express";
import {
  createPost,
  deletePost,
  getUserPost,
  likeDislike,
  updatePost,
} from "../controller/post.js";
import auth from "../middleware/authtoken.js";
const routerPost = express.Router();

routerPost.post("/", createPost);
routerPost.put("/update/:id", auth, updatePost);
routerPost.delete("/delete/:id", auth, deletePost);
routerPost.put("/like/:id", auth, likeDislike);
routerPost.get("/userpost", getUserPost);
export default routerPost;
