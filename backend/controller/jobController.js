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

export const updateJob = async (req, res) => {
  const id = req.params.id;

  const dataToUpdated = {
    $set: req.body,
  };

  // if response is null that means no data is updated else it will return data that is updated by this operation

  // using this method we can update maximum i field
  // const response = await JobModel.findByIdAndUpdate(id, dataToUpdated);
  // console.log(response);

  // updating multiple fields
  const filterObj = {
    salary: 80000,
  };
  const response = await JobModel.updateMany(filterObj, dataToUpdated);
  console.log(response);

  // console.log(id);

  res.json({
    success: true,
    message: "Update job API called",
  });
};

export const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await JobModel.findByIdAndDelete(id);
    console.log(deletedData);
    res.status(200).json({
      success: true,
      message: "Delete job API called",
    });
  } catch (error) {
    console.log("Failed to delete job", error);
  }
};

export const jobController = {
  createJob,
  showJobs,
  updateJob,
  deleteJob,
};
