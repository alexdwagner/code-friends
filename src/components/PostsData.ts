import { PostProps, UserProps } from '../../types';
import { usersData } from './UsersData';
import { getAuthor } from './utils/authorUtils';

export const postData: PostProps[] = [
  {
    postId: 1,
    author: getAuthor(1) || {
      userId: 0,
      profileImage: '',
      userName: '',
      userHandle: '',
      email: '',
      descriptor: '',
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 0,
    },
    postTopic: "Software Engineering",
    postHeadline: "Want to get into AI and ML career path. Any devs working in ML on here?",
    postBody: "I’ve completed my bachelor in Computer Science Engineering. I want to get into Artificial Intelligence and machine learning, but I have no idea on where to start. I would appreciate any working professionals on the field of Software Engineering to provide guidance to me to get started.",
    likes: 16,
    tags: ["AI", "Machine Learning"],
  },
  {
    postId: 2,
    author: getAuthor(2) || {
      userId: 0,
      profileImage: '',
      userName: '',
      userHandle: '',
      email: '',
      descriptor: '',
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 0,
    },
    postTopic: "Software Engineering",
    postHeadline: "Looking for English tutors",
    postBody: "I’m looking for English tutors who can help me improve my English speaking skills. I’m a native Hindi speaker and I’m fluent in English, but I want to improve my English speaking skills. I’m looking for someone who can help me with my pronunciation and accent.",
    likes: 42,
    tags: ["English tutor", "Conversational practice"],
  },
  {
    postId: 3,
    author: getAuthor(3) || {
      userId: 0,
      profileImage: '',
      userName: '',
      userHandle: '',
      email: '',
      descriptor: '',
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 0,
    },
    postTopic: "Software Engineering",
    postHeadline: "Looking for teammates for a hackathon",
    postBody: "Hey! I'm Billy. I'm seeking teammates for an upcoming web3 hackathon. I'm a full-stack developer with experience in React, Node, and Solidity. I'm looking for teammates who are interested in building a decentralized application.",
    likes: 28,
    tags: ["Hackathon", "Finding teammates", "web3"],
  },
  {
    postId: 4,
    author: getAuthor(4) || {
      userId: 0,
      profileImage: '',
      userName: '',
      userHandle: '',
      email: '',
      descriptor: '',
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 0,
    },
    postTopic: "Software Engineering",
    postHeadline: "Looking for a coding mentor",
    postBody: "I was wondering if I can find a coding mentor here to help me work through some of the issues I’m going through with my game.",
    likes: 39,
    tags: ["Mentorship", "Game Development", "Unity"],
  },
  {
    postId: 5,
    author: getAuthor(5) || {
      userId: 0,
      profileImage: '',
      userName: '',
      userHandle: '',
      email: '',
      descriptor: '',
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 0,
    },
    postTopic: "Career Guidance",
    postHeadline: "Machine Learning Advocate",
    postBody: "Hi, I'm Charlie. I do developer relations at TensorFlow. I'm passionate about machine learning and I love to share my knowledge with others. I'm also a big fan of Python and JavaScript.",
    likes: 47,
    tags: ["Python", "TensorFlow", "Machine Learning"],
  },
];
