const supabase = require('../db/supabase');

module.exports = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*');

    if (error) {
      console.error('Error fetching questions from Supabase:', error);
      return res.status(500).json({ error: 'Failed to retrieve questions.' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error in listQuestions API:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
