import React, { useState } from 'react';

type ChatInputBoxProps = {
    className?: string;
};

const ChatInputBox: React.FC<ChatInputBoxProps> = ({ className }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Logic to send the message
        // For now, just clear the message
        setMessage('');
    };

    return (
        <div className={className || "chat-input-box"}>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatInputBox;
