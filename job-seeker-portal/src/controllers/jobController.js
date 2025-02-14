const Job = require('../models/Job');

const postJob = async (req, res) => {
  const { title, description, companyId, location, jobType, industry, experienceLevel, keywords, salaryRange, status } = req.body;
  const newJob = new Job({ title, description, companyId, location, jobType, industry, experienceLevel, keywords, salaryRange, status });
  await newJob.save();
  res.status(201).json(newJob);
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId).populate('companyId');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate('companyId');
  res.json(jobs);
};

const searchJobs = async (req, res) => {
  const { keyword, location, jobType, industry, experienceLevel, salaryRange, status, datePosted } = req.query;
  const query = {};

  if (keyword) {
    query.$or = [
      { title: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } },
      { keywords: { $regex: keyword, $options: 'i' } },
    ];
  }

  if (location) {
    query.location = { $regex: location, $options: 'i' };
  }

  if (jobType) {
    query.jobType = jobType;
  }

  if (industry) {
    query.industry = industry;
  }

  if (experienceLevel) {
    query.experienceLevel = experienceLevel;
  }

  if (salaryRange) {
    query.salaryRange = salaryRange;
  }

  if (status) {
    query.status = status;
  }

  if (datePosted) {
    query.datePosted = { $gte: new Date(datePosted) };
  }

  const jobs = await Job.find(query).populate('companyId');
  res.json(jobs);
};

module.exports = { postJob, getAllJobs, searchJobs, getJobById };