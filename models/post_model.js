const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 240,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          text: String,
          timestamp: Number,
        },
      ],
      require: true,
    },
  },
  {
    timesstamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);