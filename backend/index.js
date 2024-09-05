import express from "express";
import jobRoutes from "./route/jobRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
dotenv.config();
// making connection with database
mongoose
  .connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
  .then(() => console.log("Database connected Successfully..."))
  .catch((error) => console.log("Error connecting to MongoDB->>", error));
// middlewares

// routes
app.use(jobRoutes);
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
