const Resource = require('../models/Resource');

const createResource = async (req, res) => {
  const { title, description, link } = req.body;
  const newResource = new Resource({ title, description, link });
  await newResource.save();
  res.status(201).json(newResource);
};

const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

module.exports = { createResource, getResources };