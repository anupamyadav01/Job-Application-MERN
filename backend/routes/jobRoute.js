import express from "express";
import { jobController } from "../controller/jobController.js";

const router = express.Router();

router.post("/", jobController.createJob);

router.get("/", jobController.showJobs);

router.put("/:id", jobController.updateJob);

router.delete("/:id", jobController.deleteJob);

export default router;
