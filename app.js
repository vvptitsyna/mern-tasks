const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();

const PORT = config.get('port') || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.get('mongoUri'), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Use task routes
app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));