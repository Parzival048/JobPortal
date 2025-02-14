const Interview = require('../models/Interview');

const scheduleInterview = async (req, res) => {
  const { jobId, userId, scheduledTime } = req.body;
  const newInterview = new Interview({ jobId, userId, scheduledTime });
  await newInterview.save();
  res.status(201).json(newInterview);
};

const getInterviews = async (req, res) => {
  const { userId } = req.params;
  const interviews = await Interview.find({ userId }).populate('jobId');
  res.json(interviews);
};

module.exports = { scheduleInterview, getInterviews };