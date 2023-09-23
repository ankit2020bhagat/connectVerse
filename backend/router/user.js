import express from "express";
const userRouter = express.Router();
import {
  deleteAccount,
  follow,
  followerList,
  followingList,
  getUser,
  login,
  profile,
  register,
  unFollow,
} from "../controller/user.js";
import auth from "../middleware/authtoken.js";
userRouter.get("/", getUser);
userRouter.post("/register", register);
userRouter.get("/login", login);
userRouter.put("/profile", auth, profile);
userRouter.delete("/delete", auth, deleteAccount);
userRouter.put("/follow", auth, follow);
userRouter.put("/unFollow", auth, unFollow);
userRouter.get("/following", auth, followingList);
userRouter.get("/follow", auth, followerList);

export default userRouter;
