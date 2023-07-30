import React from 'react';
import ChatListItem from './ChatListItem';  
import { sampleChats } from '../ChatData';
import { User, Chat, Message } from '../../../types';  



type ChatListProps = {
    users: User[];
    onUserSelect: (user: User) => void;
    selectedChat?: Chat;  
};


const ChatList: React.FC<ChatListProps> = ({ users = [], onUserSelect }) => {
    console.log('ChatList component loaded with users:', users);
    return (
        <div className="chat-list">
            {users.map(user => (
                <ChatListItem key={user.id} user={user} onClick={() => onUserSelect(user)} />
            ))}
        </div>
    );
};

export default ChatList;
