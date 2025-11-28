const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

async function generateExplanation(question, answer) {
  try {
    const response = await openai.chat.completions.create({
      model: config.GENERATION_MODEL,
      messages: [
        { role: 'system', content: 'You are a helpful assistant that provides explanations for multiple-choice questions.' },
        { role: 'user', content: `Explain the answer to the following question:\nQuestion: ${question}\nAnswer: ${answer}` },
      ],
      max_tokens: 200,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating explanation:', error);
    throw error;
  }
}

module.exports = {
  generateExplanation,
};
