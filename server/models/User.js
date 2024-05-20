const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  userRole: {
    type: String,
    enum: ["admin", "major", "user"]
  },
  token: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, //timestamp for when the document was created and modified
  {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);