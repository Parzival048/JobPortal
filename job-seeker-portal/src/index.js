const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const jobRecommendationRoutes = require('./routes/jobRecommendationRoutes');
const companyReviewRoutes = require('./routes/companyReviewRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const adminRoutes = require('./routes/adminRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api', authMiddleware, jobRoutes);
app.use('/api', authMiddleware, applicationRoutes);
app.use('/api', authMiddleware, userProfileRoutes);
app.use('/api', authMiddleware, jobRecommendationRoutes);
app.use('/api', authMiddleware, companyReviewRoutes);
app.use('/api', authMiddleware, interviewRoutes);
app.use('/api', authMiddleware, resumeRoutes);
app.use('/api', authMiddleware, resourceRoutes);
app.use('/api', authMiddleware, adminRoutes);
app.use('/api', authMiddleware, analyticsRoutes);
app.use('/api', authMiddleware, notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});