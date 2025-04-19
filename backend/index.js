import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();

// Middleware to parse incoming JSON requests
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
  console.log("Access the server at: http://localhost:5000");
});
