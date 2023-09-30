import User from "../model/user.js";
import { hashedpassword, checkPassword } from "../helper/password.js";
import createToken from "../helper/token.js";
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (user.length > 0) {
      return res.status(201).json({ User: user });
    } else {
      return res.json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "User already exist" });
    }
    const hashpassword = await hashedpassword(password);
    const user = await User.create({
      username,
      email,
      password: hashpassword,
    });
    if (user) {
      return res
        .status(201)
        .json({ message: "Registration successfully", user: user });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Incorrect email" });
    }
    const status = await checkPassword(password, user.password);

    if (!status) {
      return res.json({ message: "Incorrect password" });
    } else {
      const token = createToken(user._id);

      return res
        .status(200)
        .json({ message: "Lonin successful", token: token });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      return res.status(200).json({ Profile: user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      user.username = req.body.username || user.username;

      if (req.body.password) {
        const hashpassword = await hashedpassword(req.body.password);
        user.password = hashpassword || user.password;
      }
      user.profilepicture = req.body.profilepicture || user.profilepicture;
      user.coverpicture = req.body.coverpicture || user.coverpicture;
      user.city = req.body.city || user.city;
      user.from = req.body.from || user.from;
      user.relationship = req.body.relationship || user.relationship;
      const userUpdate = await user.save();
      if (userUpdate) {
        return res.status(201).json({ message: "Profile updated" });
      }
    } else {
      return res.status(200).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (user) {
      return res
        .status(200)
        .json({ message: "User deleted successfully", user: user });
    } else {
      return res.status(404).json({ meesage: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const follow = async (req, res) => {
  try {
    const requestUser = await User.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (requestUser && user) {
      requestUser.followings.push(req.user.id);
      user.followers.push(req.params.id);
      await requestUser.save();
      await user.save();
      return res.status(201).json({ message: "Requested accecpted" });
    } else {
      return res.status(404).json({ message: "Request user not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const unFollow = async (req, res) => {
  try {
    const requestUser = await User.findById(req.params.id);
    const user = await User.findById(req.user.id);
    console.log(req.params.id);
    console.log(req.user.id);
    if (requestUser && user) {
      const newfollowList = user.followings.filter((item) => {
        requesteduserFollowList;
        return item.toString() !== req.params.id;
      });
      console.log(newfollowList);

      const requesteduserFollowList = requestUser.followers.filter((item) => {
        return item.toString() !== req.user.id;
      });
      console.log(requesteduserFollowList);
      user.followings = newfollowList;
      requestUser.followers = requesteduserFollowList;
      await user.save();
      await requestUser.save();

      return res.status(201).json({ message: "Unfollow successfully" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const followingList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("followings");
    if (user) {
      const following = user.followings;
      const followingList = [];
      following.map((friend) => {
        const { _id, username, profilePicture } = friend;
        followerList.push({ _id, username, profilePicture });
      });
      return res.status(200).json({ following: followingList });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const followerList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("followers");
    if (user) {
      const follower = user.followers;
      const followerList = [];
      follower.map((friend) => {
        const { _id, username, profilePicture } = friend;
        followerList.push({ _id, username, profilePicture });
      });
      return res.status(200).json({ follower: followerList });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
