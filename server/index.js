require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



// Feedback Schema
const Feedback = mongoose.model("Feedback", new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
}));

// API Endpoints
app.post("/feedback", async (req, res) => {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ success: true, message: "Feedback submitted!" });
});

app.get("/feedback", async (req, res) => {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.json(feedbacks);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
