const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending', enum: ['pending', 'shortlisted', 'rejected'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', ApplicationSchema);