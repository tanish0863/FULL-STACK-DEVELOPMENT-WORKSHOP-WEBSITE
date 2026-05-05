const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// @desc    Register a new participant
// @route   POST /api/register
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, college } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create unique ID
    const uniqueId = `WS${Date.now()}${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

    const registration = new Registration({
      name,
      email,
      phone,
      college,
      uniqueId
    });

    await registration.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      uniqueId: uniqueId
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    // Check for duplicate email if needed (though not strictly required by the current frontend)
    if (error.code === 11000) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    res.status(500).json({ error: 'Registration failed' });
  }
});

// @desc    Get all registrations (Development only)
// @route   GET /api/register
// @access  Private/Dev
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ timestamp: -1 });
    res.json({
      total: registrations.length,
      registrations
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

module.exports = router;
