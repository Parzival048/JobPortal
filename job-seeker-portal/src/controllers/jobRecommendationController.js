const JobRecommendation = require('../models/JobRecommendation');
const Job = require('../models/Job');

const getRecommendations = async (req, res) => {
  const { userId } = req.params;
  const recommendations = await JobRecommendation.find({ userId }).populate('jobId');
  res.json(recommendations);
};

const createRecommendation = async (req, res) => {
  const { userId, jobId } = req.body;
  const newRecommendation = new JobRecommendation({ userId, jobId });
  await newRecommendation.save();
  res.status(201).json(newRecommendation);
};

module.exports = { getRecommendations, createRecommendation };