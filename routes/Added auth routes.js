const express = require("express");
const Post = require("../models/post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create Post
router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    UserId: req.user.id,
  });

  res.json(post);
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

module.exports = router;
