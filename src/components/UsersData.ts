import { UserProps } from '../../types';

export const usersData: UserProps[] = [
  {
    userId: 1,
    profileImage: 'https://robohash.org/${author.userHandle}?size=30x30',
    userName: 'Joe Smith',
    userHandle: 'joesmith',
    email: 'joe.smith@example.com',
    descriptor: 'Frontend Developer',
    offeringMentorship: false,
    seekingMentorship: true,
    lastActive: 1,
  },
  {
    userId: 2,
    profileImage: 'https://robohash.org/janesmith.png?size=30x30',
    userName: 'Sachin',
    userHandle: 'sachin',
    email: 'sachin@example.com',
    descriptor: 'Professional',
    offeringMentorship: false,
    seekingMentorship: true,
    lastActive: 2,
  },
  {
    userId: 3,
    profileImage: 'https://robohash.org/aliceb.png?size=30x30',
    userName: 'Billy Chou',
    userHandle: 'billychou',
    email: 'billy.chou@example.com',
    descriptor: 'Freelancer',
    offeringMentorship: true,
    seekingMentorship: true,
    lastActive: 5,
  },
  {
    userId: 4,
    profileImage: 'https://robohash.org/bobwhite.png?size=30x30',
    userName: 'Bob White',
    userHandle: 'bobwhite',
    email: 'bob.white@example.com',
    descriptor: 'Mobile App Developer',
    offeringMentorship: false,
    seekingMentorship: true,
    lastActive: 3,
  },
  {
    userId: 5,
    profileImage: 'https://robohash.org/charlieg.png?size=30x30',
    userName: 'Charlie Green',
    userHandle: 'charlieg',
    email: 'charlie.green@example.com',
    descriptor: 'Developer Advocate',
    offeringMentorship: true,
    seekingMentorship: false,
    lastActive: 7,
  },
];

