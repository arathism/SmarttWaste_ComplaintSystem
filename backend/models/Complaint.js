const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  city: String,
  area: String,
  category: String,
  description: String,
  image: String,
  status: {
    type: String,
    default: "Submitted"
  }
});

module.exports = mongoose.model("Complaint", complaintSchema);
