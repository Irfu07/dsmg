const axios = require("axios");

// Your deployed AI FastAPI URL:
const AI_URL = "https://dsmg-1.onrender.com/process";

module.exports = {
  async detectPiracy(buffer) {
    try {
      const res = await axios.post(AI_URL, buffer, {
        headers: {
          "Content-Type": "application/octet-stream"
        }
      });

      return res.data.status === "pirated";
    } catch (error) {
      console.error("AI Service Error:", error.message);
      // fallback if AI service fails
      return false;
    }
  }
};