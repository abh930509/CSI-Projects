const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const uploadRoute = require('./routes/upload');
const weatherRoute = require('./routes/weather');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));

app.use('/api', uploadRoute);
app.use('/api', weatherRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
