import React from 'react';
import { Message } from '../../types';

type MessageItemProps = {
    message: Message;
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    console.log('MessageItem component loaded with message:', message);

        const isUser = message.sender.name === "You"; // placeholder logic
        return (
            <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
                {message.text}
            </div>
        );
    };
    

export default MessageItem;
