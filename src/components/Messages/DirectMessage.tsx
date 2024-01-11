import React, { useState } from "react";

import "../../styles/DirectMessage.css";

type newMessageObject = {
  text: string,
  timestamp: Date,
}

const DirectMessage: React.FC = () => {
  const [messages, setMessages] = useState<newMessageObject[]>([]); // Provide initial value for messages state
  const [newMessage, setNewMessage] = useState(""); // State for the new message input

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObject = {
        text: newMessage,
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
  }

  const formatTimestamp = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <div className="chat-container">
      <div className="message-area">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="message-text">{message.text}</span>
            <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
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
