const { generateQuestion } = require('../agents/questionAgent');
const supabase = require('../db/supabase');

module.exports = async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required.' });
  }

  try {
    const questionContent = await generateQuestion(topic);
    // Assuming questionContent is a string that needs to be parsed into question, options, answer
    // This part would need more sophisticated parsing based on how generateQuestion formats its output
    // For now, we'll store the raw content.
    
    const { data, error } = await supabase
      .from('questions')
      .insert([{ topic, question_content: questionContent }])
      .select();

    if (error) {
      console.error('Error saving question to Supabase:', error);
      return res.status(500).json({ error: 'Failed to save question.' });
    }

    res.status(200).json({ message: 'Question generated and saved successfully.', question: data[0] });
  } catch (error) {
    console.error('Error in generateQuestions API:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
