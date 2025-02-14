const UserProfile = require('../models/UserProfile');

const createProfile = async (req, res) => {
  const { userId, workExperience, education, skills, certifications, resume } = req.body;
  const newProfile = new UserProfile({ userId, workExperience, education, skills, certifications, resume });
  await newProfile.save();
  res.status(201).json(newProfile);
};

const getProfile = async (req, res) => {
  const { userId } = req.params;
  const profile = await UserProfile.findOne({ userId }).populate('userId');
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
};

const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { workExperience, education, skills, certifications, resume } = req.body;
  const profile = await UserProfile.findOneAndUpdate(
    { userId },
    { workExperience, education, skills, certifications, resume },
    { new: true }
  );
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
};

module.exports = { createProfile, getProfile, updateProfile };