import React from 'react';
import ChatListItem from './ChatListItem';  
import { sampleChats } from '../ChatsData';
import { UserProps, Chat, Message } from '../../../types';  



type ChatListProps = {
    users: UserProps[];
    onUserSelect: (user: UserProps) => void;
    selectedChat?: Chat;  
};


const ChatList: React.FC<ChatListProps> = ({ users = [], onUserSelect }) => {
    console.log('ChatList component loaded with users:', users);
    return (
        <div className="chat-list">
            {users.map(user => (
                <ChatListItem key={user.userId} user={user} onClick={() => onUserSelect(user)} />
            ))}
        </div>
    );
};

export default ChatList;
