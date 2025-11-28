const { generateEmbedding } = require('../db/embeddings');
const supabase = require('../db/supabase');
const config = require('../config');

const THRESHOLD = 0.8; // Cosine similarity threshold for duplicates

module.exports = async (req, res) => {
  const { question_content } = req.body;

  if (!question_content) {
    return res.status(400).json({ error: 'Question content is required.' });
  }

  try {
    const newEmbedding = await generateEmbedding(question_content);

    const { data: existingQuestions, error: fetchError } = await supabase
      .from('questions')
      .select('id, question_content, embedding');

    if (fetchError) {
      console.error('Error fetching existing questions:', fetchError);
      return res.status(500).json({ error: 'Failed to check for duplicates.' });
    }

    let isDuplicate = false;
    for (const q of existingQuestions) {
      if (q.embedding) {
        // Calculate cosine similarity (simplified for example)
        const similarity = calculateCosineSimilarity(newEmbedding, q.embedding);
        if (similarity > THRESHOLD) {
          isDuplicate = true;
          break;
        }
      }
    }

    res.status(200).json({ isDuplicate });
  } catch (error) {
    console.error('Error in checkDuplicate API:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Helper function for cosine similarity (implement a proper one in production)
function calculateCosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] * vecA[i];
    magnitudeB += vecB[i] * vecB[i];
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0; // Avoid division by zero
  }

  return dotProduct / (magnitudeA * magnitudeB);
}
