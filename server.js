const express = require("express");
const sequelize = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");

const app = express();
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// RELATIONSHIPS
User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Comment);
Comment.belongsTo(User);

// START SERVER
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running 🚀");
  });
});
