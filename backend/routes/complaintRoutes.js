const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + cleanName);
  }
});

const upload = multer({ storage });

// POST /api/complaints → submit complaint
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const complaint = new Complaint({
      city: req.body.city,
      area: req.body.area,
      year: Number(req.body.year),
      garbageType: req.body.garbageType,
      description: req.body.description,
      photo: req.file ? req.file.filename : ""
    });

    await complaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/complaints → get all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
