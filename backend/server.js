const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/smartwaste", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
// server.js
// Serve uploads so images are accessible
// Serve uploads folder so images can be accessed
app.use('/uploads', express.static('uploads'));




// Start server
// server.js
const complaintRoutes = require('./routes/complaintRoutes');
app.use('/api/complaints', complaintRoutes);
 
