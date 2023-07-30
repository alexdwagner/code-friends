import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { sampleChats } from '../components/ChatData';  
import ChatList from '../components/chat/ChatList'; 
import ChatWindow from '../components/chat/ChatWindow';
import { User, Chat, Message } from '../../types';  

const ChatPage: React.FC = () => {
  const router = useRouter();
  const [selectedChat, setSelectedChat] = useState<Chat | undefined>(undefined);

  useEffect(() => {
    if (router.query.user) {
      const userHandle = router.query.user as string;
      const chat = sampleChats.find(c => c.user.handle === userHandle);
      setSelectedChat(chat || sampleChats[0]);
    } else {
      setSelectedChat(sampleChats[0]);
    }
  }, [router.query]);

  const chatUsers = sampleChats.map(chat => chat.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-12 px-4 container mx-auto bg-white shadow rounded-md">
        <h1 className="text-3xl mb-8 border-b pb-4">Chat</h1>
        <div className="flex h-[80vh]">
          <ChatList 
            users={chatUsers} 
            onUserSelect={(user) => {
                const chat = sampleChats.find(chat => chat.user.id === user.id);
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
