import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInputBox from './ChatInputBox';
import MessageItem from './MessageItem';
import { User, Message } from '../../types';

type ChatWindowProps = {
    user: User;
    messages: Message[];
};

const ChatWindow: React.FC<ChatWindowProps> = ({ user, messages }) => {
    console.log('ChatWindow component loaded for user:', user);
    console.log('Messages for this chat:', messages);
    return (
        <div className="chat-window bg-white shadow-md rounded-lg flex flex-col p-4">
            <ChatHeader user={user} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg" />
            <div className="messages flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <MessageItem key={index} message={message} />
                ))}
            </div>
            <ChatInputBox className="border-t p-4" />
        </div>
    );
};

export default ChatWindow;
