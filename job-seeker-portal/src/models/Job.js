const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: { type: String },
  jobType: { type: String, enum: ['full-time', 'part-time', 'internship'] },
  industry: { type: String },
  experienceLevel: { type: String, enum: ['entry-level', 'mid-level', 'senior-level'] },
  keywords: [String],
  salaryRange: { type: String },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  datePosted: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);