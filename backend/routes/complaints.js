const express = require("express");
const router = express.Router();
const multer = require("multer");
const Complaint = require("../models/Complaint");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// POST complaint
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const complaint = new Complaint({
      city: req.body.city,
      area: req.body.area,
      category: req.body.category,
      description: req.body.description,
      image: req.file ? `/uploads/${req.file.filename}` : "",
      status: "Submitted"
    });

    await complaint.save();
    res.json({ success: true, message: "Complaint submitted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET complaints
router.get("/", async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

// ✅ PUT update status (THIS MAKES SEND BUTTON WORK)
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: "Complaint not found" });
    }

    complaint.status = status;
    await complaint.save();

    res.json({ success: true, message: "Status updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
