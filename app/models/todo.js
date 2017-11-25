var mongoose = require("mongoose");

module.exports = mongoose.model("comment", {
  text: {
    type: String,
    default: ""
  },
  like: Number
});
