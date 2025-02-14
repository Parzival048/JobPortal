const Notification = require('../models/Notification');

const createNotification = async (req, res) => {
  const { userId, message } = req.body;
  const newNotification = new Notification({ userId, message });
  await newNotification.save();
  res.status(201).json(newNotification);
};

const getNotifications = async (req, res) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ userId });
  res.json(notifications);
};

module.exports = { createNotification, getNotifications };