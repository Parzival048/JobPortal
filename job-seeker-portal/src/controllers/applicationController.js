const Application = require('../models/Application');

const applyForJob = async (req, res) => {
  const { jobId, userId } = req.body;
  const newApplication = new Application({ jobId, userId });
  await newApplication.save();
  res.status(201).json(newApplication);
};

const getJobApplications = async (req, res) => {
  const { jobId } = req.params;
  const applications = await Application.find({ jobId }).populate('userId');
  res.json(applications);
};

module.exports = { applyForJob, getJobApplications };