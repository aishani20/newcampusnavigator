import React, { useState } from "react";
import axios from "axios";
import AIAssistantImage from "../../assests/AiAssistant.png";
import { FaMinus } from "react-icons/fa";

const CNAssistant = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showChat, setShowChat] = useState(true);

  const sendMessage = async () => {
    if (userInput.trim() === "") return; // Don't send empty messages

    // Add user message to chat history
    setChatHistory([...chatHistory, { text: userInput, sender: "user" }]);
    setUserInput(""); // Clear input field

    try {
      // Send user message to backend
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/chat-cnassistant`,
        { message: userInput }
      );
      const message = response.data.message;
      // Add bot response to chat history
      setChatHistory([...chatHistory, { text: message, sender: "bot" }]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
    }
  };
  const openChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="absolute right-0 top-10">
      {showChat ? (
        <div
          className="w-20 h-20 fixed bottom-20 right-[10%] rounded-full dark:bg-white cursor-pointer"
          onClick={openChatHandler}
        >
          <img
            src={AIAssistantImage}
            alt="chat bot"
            className="w-full h-full bg-blend-multiply rounded-full"
          />
        </div>
      ) : (
        <div className="max-w-sm mx-auto my-8 rounded-lg overflow-hidden shadow-lg bg-white fixed bottom-20 right-[10%]">
          <div className="bg-blue-500 text-white flex justify-between px-3 items-center py-1">
            <span>CNAssistant</span>
            <span className="cursor-pointer" onClick={()=> setShowChat(!showChat)}>
              <FaMinus />
            </span>
          </div>
          <div className="overflow-auto h-full p-4">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "user"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-blue-100 text-blue-800"
                } p-2 mb-2 rounded`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container flex items-center p-4 border-t border-gray-200">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="border border-gray-300 rounded-lg py-2 px-4 flex-1 mr-4"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CNAssistant;
