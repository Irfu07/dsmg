const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/upload");
const verifyRoutes = require("./routes/verify");
const statsRoutes = require("./routes/stats");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/stats", statsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));