// src/controllers/resumeController.js

const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  const { userId, content } = req.body;
  const newResume = new Resume({ userId, content });
  await newResume.save();
  res.status(201).json(newResume);
};

exports.getResumes = async (req, res) => {
  const { userId } = req.params;
  const resumes = await Resume.find({ userId });
  res.json(resumes);
};