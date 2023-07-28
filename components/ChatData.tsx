import { postData } from './Data';
import { User, Chat, Message } from '../types';  

// Convert post data to user data
const users: User[] = postData.map((post, index) => ({
    id: index + 1,  // using index as id
    name: post.name,
    handle: post.handle,
    profileImage: post.profileImage,
    descriptor: post.descriptor,
    offeringMentorship: post.offeringMentorship,
    seekingMentorship: post.seekingMentorship,
    lastActive: post.lastActive,
    posts: [post]
}));

// Generate sample chats for the first two users
const sampleChats: Chat[] = users.slice(0, 2).map(user => ({
    id: user.id.toString(),  // converting id to string
    user: user,
    messages: [
        { 
            sender: user, 
            text: `Hello! My name is ${user.name}.`, 
            timestamp: new Date() 
        },
        { 
            sender: { 
                ...user, 
                id: 0,  // Using 0 as a placeholder ID for "You"
                name: "You", 
                handle: "YourHandle", 
                profileImage: "",
                descriptor: "",
                offeringMentorship: false,
                seekingMentorship: false,
                lastActive: 0,
                posts: []
            }, 
            text: `Hi ${user.name}, nice to meet you!`, 
            timestamp: new Date() 
        }
    ]
}));

export { sampleChats };
