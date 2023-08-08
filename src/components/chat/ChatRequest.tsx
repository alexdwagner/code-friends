import React from 'react';

interface ChatRequestProps {
  userId: number;
  onRequestChat: (userId: number) => void;
}

const ChatRequest: React.FC<ChatRequestProps> = ({ userId, onRequestChat }) => {
  return (
    <button onClick={() => onRequestChat(userId)}>Send Chat Request</button>
  );
};

export default ChatRequest;
