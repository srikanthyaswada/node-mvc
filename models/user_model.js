const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },

    lastname: {
      type: String,
    },
    username: {
      type: String,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
