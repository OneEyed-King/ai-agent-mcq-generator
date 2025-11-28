const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

async function generateTopic(context) {
  try {
    const response = await openai.chat.completions.create({
      model: config.GENERATION_MODEL,
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates a single, concise topic from the provided context.' },
        { role: 'user', content: `Generate a single topic from the following context: ${context}` },
      ],
      max_tokens: 50,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating topic:', error);
    throw error;
  }
}

module.exports = {
  generateTopic,
};
