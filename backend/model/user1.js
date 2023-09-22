import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      requied: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepicture: {
      type: String,
      default: "",
    },
    coverpicture: {
      type: String,
      default: "",
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    followings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
    },
    from: {
      type: String,
    },
    relationship: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
