const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'../frontend'))); // Serve frontend

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/smart_waste", {
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error("MongoDB connection error:", err));

const complaintRoutes = require("./routes/complaints");
const adminRoutes = require("./routes/admin");

app.use("/api/complaints", complaintRoutes);
app.use("/api/admin", adminRoutes);


app.listen(3000, ()=>console.log("Server running on http://localhost:3000"));
