import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/feedback")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error("Error fetching feedbacks:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required!");
      return;
    }
    setError("");
    const newFeedback = { ...formData, timestamp: new Date().toISOString() };
    await axios.post("http://localhost:5000/feedback", newFeedback);
    setFeedbacks([...feedbacks, newFeedback]);
    setFormData({ name: "", email: "", message: "" });
  };

  const formatTimestamp = (timestamp) => {
    const options = { timeZone: "Asia/Kolkata", hour12: true, hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" };
    return new Date(timestamp).toLocaleString("en-IN", options);
  };

  return (
    <div className="app-container">
      <div className="content">
        <div className="feedback-form-container">
          <h1 className="title">Feedback Form</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="feedback-form">
            <input type="text" placeholder="Name" className="input-field" 
                   value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="input-field" 
                   value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Feedback" className="input-field textarea" 
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="feedback-section">
          <h2 className="title">Feedbacks</h2>
          {feedbacks.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)).map((fb, index) => (
            <div key={index} className="neon-feedback">
              <p><strong>{fb.name}</strong> ({fb.email})</p>
              <p>{fb.message}</p>
              <p className="timestamp">{formatTimestamp(fb.timestamp)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
}
