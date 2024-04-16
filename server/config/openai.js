const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config();

const openai = new OpenAIApi(new Configuration({
    // replace your-api-key with your API key from ChatGPT
    apiKey: process.env.OPENAI_API_KEY
}))


async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  }
  
  main();