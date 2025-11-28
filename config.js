require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';
const GENERATION_MODEL = process.env.GENERATION_MODEL || 'gpt-4o-mini';
const VALIDATION_MODEL = process.env.VALIDATION_MODEL || 'gpt-4o';

module.exports = {
  SUPABASE_URL,
  SUPABASE_SERVICE_KEY,
  OPENAI_API_KEY,
  EMBEDDING_MODEL,
  GENERATION_MODEL,
  VALIDATION_MODEL,
};
