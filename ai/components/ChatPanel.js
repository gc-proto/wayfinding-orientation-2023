import React from 'react';

const ChatPanel = ({ onClose }) => {
  return (
    <div className="chat-panel">
      <div className="chat-panel-header">
        <button className="close-button" aria-label="Close" onClick={onClose}>X</button>
      </div>
      <div className="chat-panel-body">
        <div className="chat-messages">
          {/* Chat messages would go here */}
        </div>
        <div className="chat-input">
          <input type="text" aria-label="Type your message" />
          <button className="send-button" aria-label="Send message">Send</button>
          <button className="copy-button" aria-label="Copy">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
