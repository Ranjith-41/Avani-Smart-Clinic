const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// API to handle feedback submission (POST)
router.post('/', async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;
    const newFeedback = new Feedback({ name, email, message, rating });
    await newFeedback.save();
    res.status(201).send('Feedback submitted successfully');
  } catch (error) {
    res.status(400).send('Error submitting feedback');
  }
});

// API to get feedback data (GET)
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(400).send('Error fetching feedback');
  }
});

module.exports = router;
