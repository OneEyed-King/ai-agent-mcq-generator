const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

async function generateEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: config.EMBEDDING_MODEL,
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

module.exports = {
  generateEmbedding,
};
