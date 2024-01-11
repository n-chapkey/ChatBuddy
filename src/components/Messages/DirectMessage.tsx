import React, { useEffect, useState } from "react";

import "../../styles/DirectMessage.css";

type newMessageObject = {
  text: string;
  user: string;
  timestamp: Date;
};

const currentUser = "Nick";

const DirectMessage: React.FC = () => {
  const [messages, setMessages] = useState<newMessageObject[]>([]); // Provide initial value for messages state
  const [newMessage, setNewMessage] = useState(""); // State for the new message input

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("http://localhost:5000/messages");
      const data = await response.json();
      const messages = data.messages.map((message: newMessageObject) => ({
        ...message,
        timestamp: new Date(message.timestamp),
      }));

      setMessages(messages);
    }
    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObject = {
        text: newMessage,
        user: "Me",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage("");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handlekeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="chat-container">
      <div className="message-area">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === currentUser ? 'my-message' : 'other-message'}`}>
            <span className="user">{message.user + ":"}</span>
            <span className="message-text">{message.text}</span>
            <span className="timestamp">
              {formatTimestamp(message.timestamp)}
            </span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={handleInput}
          onKeyDown={handlekeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DirectMessage;
