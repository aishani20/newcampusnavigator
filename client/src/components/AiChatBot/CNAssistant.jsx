import React, { useState } from "react";
import axios from "axios";
import { FaMinus } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";

const CNAssistant = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showChat, setShowChat] = useState(true);

  const sendMessageHandler = async () => {
    if (userInput.trim() === "") return; // Don't send empty messages

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { text: userInput, sender: "user" }]);
    setUserInput(""); // Clear input field

    try {
      // Send user message to backend
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/chat-cnassistant`,
        { message: userInput }
      );
      const botResponse = response.data.message;
      // Add bot response to chat history
      setChatHistory((prev) => [
        ...prev,
        { text: botResponse, sender: "CNAssistant" },
      ]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
    }
  };
  const openChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="absolute right-0 top-10 z-20">
      {showChat ? (
        <div
          className=" fixed bottom-[4rem] right-[10%] rounded-full  cursor-pointer border border-white p-5 bg-[#3652DD]"
          onClick={openChatHandler}
        >
          <BsChatLeftText className="text-white w-7 h-7 inset-0" />
        </div>
      ) : (
        <div className="max-w-sm mx-auto my-8 rounded-lg h-96 shadow-lg bg-white fixed bottom-20 right-[10%] flex flex-col">
          <div className="bg-blue-500 text-white flex justify-between px-3 items-center py-1">
            <span>CNAssistant</span>
            <span
              className="cursor-pointer"
              onClick={() => setShowChat(!showChat)}
            >
              <FaMinus />
            </span>
          </div>
          <div className={`overflow-auto p-4 flex flex-col`}>
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  message.sender === "user"
                    ? "bg-gray-200 text-gray-700 border self-end"
                    : "bg-blue-100 text-blue-800 border self-start"
                } p-2 mb-2 rounded`}
              >
                <span>{message.sender}</span>
                <hr className="borde border-white" />
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <hr className="border" />
          <div className="input-container flex items-center border-gray-200 px-4 py-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="border border-gray-300 rounded-lg py-2 px-4 flex-1 mr-4"
            />
            <button
              onClick={sendMessageHandler}
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
