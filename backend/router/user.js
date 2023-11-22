import express from "express";
const userRouter = express.Router();
import {
  deleteAccount,
  follow,
  followerList,
  followingList,
  getUser,
  login,
  updateProfile,
  register,
  unFollow,
  profile,
} from "../controller/user.js";
import auth from "../middleware/authtoken.js";

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/profile", auth, profile);
userRouter.put("/updateprofile", auth, updateProfile);
userRouter.put("/follow/:id", auth, follow);
userRouter.put("/unfollow/:id", auth, unFollow);
userRouter.delete("/delete", auth, deleteAccount);
userRouter.get("/following", auth, followingList);
userRouter.get("/follower", auth, followerList);
userRouter.get("/:id", getUser);
export default userRouter;
