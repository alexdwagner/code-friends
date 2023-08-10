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
        <div key={request.requestId}>
          <p>Request from {request.fromUser.userName}</p>
          <button onClick={() => onAcceptRequest(request.requestId)}>Accept</button>
          <button onClick={() => onRejectRequest(request.requestId)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
