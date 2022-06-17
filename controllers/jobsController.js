import Job from "../models/Job.js"
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import permissions from "../utils/permissions.js";
import mongoose from "mongoose";



const createJob = async (req, res) => {
  const {position, company} = req.body;
  console.log(req)
  if (!position || !company) {
      throw new BadRequestError("Please enter all values")
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({job})
};
const updateJob = async (req, res) => {
  const {id} = req.params;
  const {company, position} = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please enter all values");
  }
  const job = await Job.findOne({_id: id});
  if (!job){
      throw new BadRequestError("Job does not exist");
  }
  permissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({_id : id}, req.body, {new: true, runValidators: true})
  res.status(StatusCodes.OK).json({updatedJob});
};
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy: req.user.userId})
  res.status(StatusCodes.OK).json({jobs, totalJobs:jobs.length, numOfPages: 1 })
};
const deleteJobs = async (req, res) => {
  
    const { id } = req.params;
    const job = await Job.findOne({ _id: id });
    if (!job) {
      throw new BadRequestError("Job does not exist");
    }
    permissions(req.user, job.createdBy);
    await job.remove()
    res.status(StatusCodes.OK).json({msg: "Job removed"})
};
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
      {$match: {createdBy: mongoose.Types.ObjectId(req.user.userId)}},
      {$group: {_id: '$status', count:{$sum:1}}}
  ])
  stats.reduce((acc, curr) => {
      const {_id, count} = curr;
      acc[_id] = curr;
      return acc 
  }, {})

  let defaultStats = {
      pending: stats.pending || 0,
      interview: stats.interview || 0,
      declined: stats.declined || 0
  }
  let monthlyApplications = []
  res.status(StatusCodes.OK).json({defaultStats, monthlyApplications});
};



export { createJob, updateJob, deleteJobs, getAllJobs, showStats};
