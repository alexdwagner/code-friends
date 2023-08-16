import { usersData } from './UsersData.json';
import { UserProps, Chat, Message } from '../../types';

// Using the first two users from usersData to create sample chats
const sampleChats: Chat[] = usersData.slice(0, 2).map(user => ({
  id: user.userId.toString(),
  user: user,
  messages: [
    {
      sender: user,
      text: `Hello! My name is ${user.userName}.`,
      timestamp: new Date(),
    },
    {
      sender: user,
      text: `Hi, nice to meet you!`,
      timestamp: new Date(),
    }
  ],
}));

export { sampleChats };
