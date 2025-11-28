const { createClient } = require('@supabase/supabase-js');
const config = require('../config');

const SUPABASE_URL = config.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = config.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

module.exports = supabase;
