const CompanyReview = require('../models/CompanyReview');

const postReview = async (req, res) => {
  const { companyId, userId, rating, review } = req.body;
  const newReview = new CompanyReview({ companyId, userId, rating, review });
  await newReview.save();
  res.status(201).json(newReview);
};

const getReviews = async (req, res) => {
  const { companyId } = req.params;
  const reviews = await CompanyReview.find({ companyId }).populate('userId');
  res.json(reviews);
};

module.exports = { postReview, getReviews };