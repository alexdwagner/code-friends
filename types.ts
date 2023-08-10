// types.ts

// User authentication related types
export type LoginData = {
    username: string;
    password: string;
  };

// User-related types
export type UserProps = {
    userId: number;
    profileImage: string;
    userName: string;
    userHandle: string;
    email: string;
    descriptor: string;
    offeringMentorship: boolean;
    seekingMentorship: boolean;
    lastActive: number;
};


// Post-related types
export type PostProps = {
    postId: number;
    author: UserProps; // Use UserProps here
    postTopic: string;
    postHeadline: string;
    postBody: string;
    likes: number;
    tags: string[];
};


// Extended user type that includes posts
export type ExtendedUserProps = UserProps & {
    posts: PostProps[];
};

// Chat related types

export type Message = {
    sender: UserProps;
    text: string;
    timestamp: Date;
}

export type Chat = {
    id: string;
    user: UserProps;
    messages: Message[];
}

// Definition for ChatRequest 
export type ChatRequest = {
    requestId: number;
    fromUser: UserProps;
    toUser: UserProps;
    status: 'pending' | 'accepted' | 'rejected';
  };
  
  // InboxProps type
  export type InboxProps = {
    chatRequests: ChatRequest[];
    onAcceptRequest: (requestId: number) => void;
    onRejectRequest: (requestId: number) => void;
  };