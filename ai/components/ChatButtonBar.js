import React from 'react';

const ChatButtonBar = ({ onOpen }) => {
  return (
    <div className="chat-button-bar" role="dialog" aria-hidden="true">
      <div className="container">
        <ul className="list-inline">
          <li>
            <header>
              <h2 className="modal-title">Need help?</h2>
            </header>
          </li>
          <li>
            <button className="btn btn-default btn-lg overlay-lnk" onClick={onOpen} aria-controls="chat-panel">
              <img src="icons/ai-bubble-solid.svg" alt="Chat Icon" style={{ width: 24, height: 'auto' }} />
              <span className="mrgn-lft-sm mrgn-tp-sm">Ask ChatGov</span>
            </button>
          </li>
        </ul>
        <button className="close-button" aria-label="Close" onClick={onOpen}>X</button>
      </div>
    </div>
  );
};

export default ChatButtonBar;
