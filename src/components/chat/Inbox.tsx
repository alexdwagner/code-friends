import React from 'react';
import { ChatRequest } from '../../../types';

interface InboxProps {
  chatRequests: ChatRequest[];
  onAcceptRequest: (requestId: number) => void;
  onRejectRequest: (requestId: number) => void;
}

const Inbox: React.FC<InboxProps> = ({ chatRequests, onAcceptRequest, onRejectRequest }) => {
  return (
    <div>
      {chatRequests.map(request => (
        <div key={request.id}>
          <p>Request from {request.sender.userName}</p>
          <button onClick={() => onAcceptRequest(request.id)}>Accept</button>
          <button onClick={() => onRejectRequest(request.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
