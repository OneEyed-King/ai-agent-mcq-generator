# AI Test Series Backend (Node.js)

This project is an AI Test Series Backend, re-implemented in Node.js. It leverages OpenAI for question, explanation, and topic generation, and Supabase for database interactions.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-agent-mcq-generator
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the project root with the following variables:
    ```
    SUPABASE_URL="YOUR_SUPABASE_URL"
    SUPABASE_SERVICE_KEY="YOUR_SUPABASE_SERVICE_KEY"
    OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
    EMBEDDING_MODEL="text-embedding-3-small" # Optional, defaults to text-embedding-3-small
    GENERATION_MODEL="gpt-4o-mini"         # Optional, defaults to gpt-4o-mini
    VALIDATION_MODEL="gpt-4o"           # Optional, defaults to gpt-4o
    PORT=3000                           # Optional, defaults to 3000
    ```

4.  **Run the Application:**
    ```bash
    npm start
    ```

The server will run on the specified PORT (default: 3000).