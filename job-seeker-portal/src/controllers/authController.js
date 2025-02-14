const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: 'User already exists' });

  const newUser = new User({ username, email, password, role });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await user.matchPassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { register, login };