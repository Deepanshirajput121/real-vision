const express = require('express');
const mongoose = require('mongoose');
const ratingsRoutes = require('./routes/ratings');

const app = express();
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the ratings route
app.use('/api/ratings', ratingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
