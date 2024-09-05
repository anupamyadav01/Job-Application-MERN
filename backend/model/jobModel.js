import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "Not Available",
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  // if we don't want version there in database
  { versionKey: false, timestamps: true }
);

// creating collection of database
export const JobModel = mongoose.model("jobs", jobSchema);
