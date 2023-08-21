import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatList from '../components/chat/ChatList'; 
import ChatWindow from '../components/chat/ChatWindow';
import { UserProps, Chat, Message } from '../../types';  
import sampleChatsData from '../components/ChatsData.json';

// Define the types
type SampleChatType = {
  id: string;
  user: UserProps;
  messages: Message[];
};

type SampleChatsType = SampleChatType[];

// Process the imported sampleChats
const processedChats: Chat[] = sampleChatsData.map(chat => ({
    ...chat,
    messages: chat.messages.map(message => ({
        ...message,
        timestamp: new Date(message.timestamp)
    }))
}));

const ChatPage: React.FC = () => {
  const router = useRouter();
  const [selectedChat, setSelectedChat] = useState<Chat | undefined>(undefined);

  useEffect(() => {
    if (router.query.user) {
      const userHandle = router.query.user as string;
      const chat = processedChats.find(c => c.user.userHandle === userHandle);
      setSelectedChat(chat || processedChats[0]);
    } else {
      setSelectedChat(processedChats[0]);
    }
  }, [router.query]);

  const chatUsers = processedChats.map(chat => chat.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-12 px-4 container mx-auto bg-white shadow rounded-md">
        <h1 className="text-3xl mb-8 border-b pb-4">Chat</h1>
        <div className="flex h-[80vh]">
          <ChatList 
            users={chatUsers} 
            onUserSelect={(user) => {
                const chat = processedChats.find(chat => chat.user.userId === user.userId);
                setSelectedChat(chat ? chat : {
                    id: Date.now().toString(),
                    user: user,
                    messages: []
                });
            }} 
            selectedChat={selectedChat}
          />
          {selectedChat && (
            <div className="flex-1 p-6 overflow-y-auto border-l border-gray-300">
              <ChatWindow user={selectedChat.user} messages={selectedChat.messages} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage;
