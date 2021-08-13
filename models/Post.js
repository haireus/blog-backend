const mongoose = require("mongoose");

const PostSchemas = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    photoPost: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchemas);
