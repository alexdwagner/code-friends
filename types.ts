// types.ts

// User authentication related types

export type LoginData = {
    username: string;
    password: string;
  };

// Post related types

export type PostProps = {
    profileImage: string;
    name: string;
    handle: string;
    descriptor: string;
    topic: string;  
    offeringMentorship: boolean;
    seekingMentorship: boolean;
    lastActive: number;
    headline: string;
    body: string;
    likes: number;
    tags: string[];
};

// User related types

export type UserProps = {
    profileImage: string;
    name: string;
    handle: string;
    descriptor: string;
    offeringMentorship: boolean;
    seekingMentorship: boolean;
    lastActive: number;
    posts: PostProps[];
};

export type User = {
    id: number;
    name: string;
    handle: string;
    profileImage: string;
    descriptor: string;
    offeringMentorship: boolean;
    seekingMentorship: boolean;
    lastActive: number;
    posts: PostProps[];
};

// Chat related types

export type Message = {
    sender: User;
    text: string;
    timestamp: Date;
}

export type Chat = {
    id: string;
    user: User;
    messages: Message[];
}
