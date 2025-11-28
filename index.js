const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json()); // Enable JSON body parsing
const port = process.env.PORT || 3000;

// Import API routes
const checkDuplicate = require('./api/checkDuplicate');
const generateQuestions = require('./api/generateQuestions');
const listQuestions = require('./api/listQuestions');

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// API Routes
app.post('/api/check_duplicate', checkDuplicate);
app.post('/api/generate_questions', generateQuestions);
app.get('/api/list_questions', listQuestions);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
