const express = require("express");
const Comment = require("../models/comment");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Add Comment
router.post("/:postId", auth, async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    PostId: req.params.postId,
    UserId: req.user.id,
  });

  res.json(comment);
});

module.exports = router;
