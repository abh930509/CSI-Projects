const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/weather/:city', async (req, res, next) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
