const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/", taskRoutes); // mount all routes under "/"

exports.api = functions.https.onRequest(app);
