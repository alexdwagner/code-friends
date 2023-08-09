import React from 'react';
import { UserProps } from '../../../types';

type ChatHeaderProps = {
    user: UserProps;
    className?: string;
};


const ChatHeader: React.FC<ChatHeaderProps> = ({ user, className }) => {
    return (
        <div className={className}>
            {user.userName} ({user.userHandle})
        </div>
    );
};

export default ChatHeader;
