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

userRouter.post("/signup", register);
userRouter.post("/login", login);
userRouter.put("/updateprofile", auth, updateProfile);
userRouter.put("/follow", auth, follow);
userRouter.put("/unFollow", auth, unFollow);
userRouter.delete("/delete", auth, deleteAccount);
userRouter.get("/following", auth, followingList);
userRouter.get("/follow", auth, followerList);
userRouter.get("/profile", auth, profile);
// userRouter.get("/", getUser);
export default userRouter;
