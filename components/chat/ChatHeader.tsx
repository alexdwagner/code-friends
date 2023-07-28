import React from 'react';
import { User } from '../../types';

type ChatHeaderProps = {
    user: User;
    className?: string;
};


const ChatHeader: React.FC<ChatHeaderProps> = ({ user, className }) => {
    return (
        <div className={className}>
            {user.name} ({user.handle})
        </div>
    );
};

export default ChatHeader;
