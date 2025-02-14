const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workExperience: [String],
  education: [String],
  skills: [String],
  certifications: [String],
  resume: { type: String, required: true }, // URL to resume file
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);