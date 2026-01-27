const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: { type: String, default: "admin" },
  password: { type: String, default: "admin123" }
});

module.exports = mongoose.model("Admin", adminSchema);
