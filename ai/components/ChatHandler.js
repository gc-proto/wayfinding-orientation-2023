import React, { useState } from 'react';
import ChatButtonBar from './components/ChatButtonBar';
import ChatPanel from './components/ChatPanel';
import './ChatHandler.css';

const ChatHandler = () => {
  const [isChatPanelOpen, setChatPanelOpen] = useState(false);

  const handleOpenChat = () => setChatPanelOpen(true);
  const handleCloseChat = () => setChatPanelOpen(false);

  return (
    <div className="ChatHandler">
      {!isChatPanelOpen && <ChatButtonBar onOpen={handleOpenChat} />}
      {isChatPanelOpen && <ChatPanel onClose={handleCloseChat} />}
    </div>
  );
};

export default ChatHandler;
