const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Comment = sequelize.define("Comment", {
  text: DataTypes.STRING,
});

module.exports = Comment;
