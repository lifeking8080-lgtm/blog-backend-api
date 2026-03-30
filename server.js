const express = require("express");
const sequelize = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log("Server running"));
});