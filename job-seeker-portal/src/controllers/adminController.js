const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404).json({ message: 'Admin not found' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  res.json({ message: 'Admin logged in successfully' });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate('companyId');
  res.json(jobs);
};

module.exports = { adminLogin, getAllUsers, getAllJobs };