const axios = require("axios");

const AI_URL = "https://dsmg-1.onrender.com/process";

module.exports = {
  async detectPiracy(buffer) {
    try {
      const res = await axios.post(AI_URL, buffer, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
        timeout: 5000
      });

      return res.data.status === "pirated";

    } catch (error) {
      console.log("AI failed → using fallback");

      // 🔥 FALLBACK LOGIC (VERY IMPORTANT)
      return buffer.length < 50000;
    }
  }
};