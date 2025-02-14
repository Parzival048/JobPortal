const Job = require('../models/Job');
const Application = require('../models/Application');

// Controller to get job analytics
const getJobAnalytics = async (req, res) => {
  try {
    const jobs = await Job.find().populate('companyId');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get application analytics
const getApplicationAnalytics = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobId').populate('userId');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getJobAnalytics, getApplicationAnalytics };