const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

exports.getAssistantResponse = async (req, res) => {
  try {
    const { message } = req.body;

    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    const response = resp.choices[0].message.content;
    return res
      .status(200)
      .json({
        success: true,
        message: response
       });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: e.message });
  }
      
};
