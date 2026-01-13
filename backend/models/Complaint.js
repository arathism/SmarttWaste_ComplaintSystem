const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  city: String,
  area: String,
  year: Number,
  garbageType: String,
  description: String,
  photo: String,
  status: { type: String, default: "Submitted" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Complaint", complaintSchema);
