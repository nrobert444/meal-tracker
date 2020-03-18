const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/recipes', require('./Routes/recipes'));

app.use('/api/v1/events', require('./Routes/events'));


module.exports = app;
