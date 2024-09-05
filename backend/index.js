import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobRoutes from "./route/jobRoute.js";
const app = express();
app.use(express.json());
dotenv.config();

// making connection with database
mongoose
  .connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
  .then(() => console.log("Database connected Successfully..."))
  .catch((error) => console.log("Error connecting to MongoDB->>", error));

// routes
app.use("/api/jobs", jobRoutes);
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
