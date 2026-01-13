const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaintModel');

// Get all complaints
router.get('/all', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update status
router.put('/status/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ message: 'Status updated', complaint });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
