const openai = require("openai");

exports.getAssistantResponse = async (req, res) => {
  const { message } = req.body;

  try {
    const resp = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return res
      .status(200)
      .json({ message: resp.data.choices[0].message.content });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }

  console.log("message", message);
  return res.json({
    success: true,
    message: message,
  });
};
