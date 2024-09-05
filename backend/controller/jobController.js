import { JobModel } from "../model/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const jobs = req.body;
    const newlyInstertedJob = await JobModel.create(req.body);

    res.json({
      sucess: true,
      message: "Job created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Something went wrong, please try again later",
    });
  }
};

export const showJobs = async (req, res) => {
  // todo: apply filter on various fields
  const minSalary = req.query.minSalary || 0;

  const conditions = {};
  if (req.query.minSalary) {
    conditions.salary = { $gt: minSalary };
  }

  if (req.query.title) {
    conditions.title = new RegExp(req.query.title, "gi");
  }

  const jobsData = await JobModel.find(conditions);

  res.json({
    success: true,
    message: "List of all jobs API called",
    results: jobsData,
  });
};

export const updateJob = (req, res) => {
  res.json({
    success: true,
    message: "Update job API called",
  });
};

export const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "Delete job API called",
  });
};

export const jobController = {
  createJob,
  showJobs,
  updateJob,
  deleteJob,
};
