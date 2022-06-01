const createJob = async (req, res) => {
  res.send("create job");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const getAllJobs = async (req, res) => {
  res.send("get all job");
};
const deleteJobs = async (req, res) => {
  res.send("delete job");
};
const showStats = async (req, res) => {
  res.send("show stats");
};



export { createJob, updateJob, deleteJobs, getAllJobs, showStats};
