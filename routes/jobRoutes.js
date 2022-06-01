import {
  createJob,
  updateJob,
  deleteJobs,
  getAllJobs,
  showStats,
} from "../controllers/jobsController.js";

import express from "express";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/stats").get(showStats);
router.route("/:id").patch(updateJob).delete(deleteJobs);

export default router;
