const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

async function generateQuestion(topic) {
  try {
    const response = await openai.chat.completions.create({
      model: config.GENERATION_MODEL,
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates multiple-choice questions.' },
        { role: 'user', content: `Generate a multiple-choice question about: ${topic}` },
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
}

module.exports = {
  generateQuestion,
};
