import { createContext, useContext, useState } from 'react';
import { ChatRequest } from '../types';

interface ChatStateContextProps {
  chatRequests: ChatRequest[];
  sendChatRequest: (userId: number) => void;
  // Add other state management functions as needed
}

interface ChatStateProviderProps {
  children: React.ReactNode; 
}

const ChatStateContext = createContext<ChatStateContextProps | undefined>(undefined);

export const ChatStateProvider: React.FC<ChatStateProviderProps> = ({ children }) => {
  const [chatRequests, setChatRequests] = useState<ChatRequest[]>([]);

  const sendChatRequest = (userId: number) => {
    // Logic to send chat request
  };

  return (
    <ChatStateContext.Provider value={{ chatRequests, sendChatRequest }}>
      {children}
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => {
  const context = useContext(ChatStateContext);
  if (!context) {
    throw new Error('useChatState must be used within a ChatStateProvider');
  }
  return context;
};
