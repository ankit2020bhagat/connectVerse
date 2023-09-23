import Post from "../model/post.js";
export const createPost = async (req, res) => {
  try {
    const post = new Post({
      userId: req.user.id, // Manually specify the userId
      desc: req.body.desc, // Update desc using req.body
      image: req.body.image, // Update image using req.body
      likes: req.body.likes, // Update likes using req.body
    });
    const savedPost = await post.save();

    if (savedPost) {
      return res
        .status(201)
        .json({ message: "Post created successfully", post: savedPost });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (req.user.id === post.userId.toString()) {
      await Post.updateOne({ $set: req.body });
      return res.status(201).json({ message: "Post updated successfully" });
    } else {
      return res.status(403).json({ message: "you can update only your post" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.user.id === post.userId.toString()) {
      await post.deleteOne();
      return res.json({ message: "Post deleted successfully", Post: post });
    } else {
      return res.json({ message: "You can delete only your post" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const likeDislike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      if (!post.likes.includes(req.user.id)) {
        await post.updateOne({ $push: { likes: req.user.id } });
        return res.status(200).json({ message: "Post has been liked" });
      } else {
        await post.updateOne({ $pull: { likes: req.user.id } });
        return res.status(200).json({ message: "Post has been disliked" });
      }
    } else {
      return res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserPost = async (req, res) => {
  try {
    const post = await Post.find({ userId: req.user.id });
    if (post) {
      return res.status(200).json({ Post: post });
    } else {
      return res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
