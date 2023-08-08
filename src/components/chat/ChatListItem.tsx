import React from 'react';
import { UserProps } from '../../../types';

type ChatListItemProps = {
    user: UserProps;
    onClick: () => void;
};

const ChatListItem: React.FC<ChatListItemProps> = ({ user, onClick }) => {
    console.log('ChatListItem component loaded for user:', user);
    return (
        <div className="chat-list-item" onClick={onClick}>
            {user.name}
        </div>
    );
};

export default ChatListItem;
