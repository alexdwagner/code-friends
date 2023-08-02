import { PostProps } from '../../types';

export const postData: PostProps[] = [
    {
      profileImage: `https://robohash.org/johndoe.png?size=30x30`,
      name: "John Doe",
      handle: "johndoe",
      descriptor: "Frontend Developer",
      topic: "Software Engineering",
      offeringMentorship: true,
      seekingMentorship: false,
      lastActive: 1,
      headline: "Exploring ReactJS and Next.js!",
      body: "I've been diving deep into the React ecosystem and I'm loving the journey...",
      likes: 34,
      tags: ["React", "Next.js", "JavaScript"]
    },
    {
      profileImage: `https://robohash.org/janesmith.png?size=30x30`,
      name: "Jane Smith",
      handle: "janesmith",
      descriptor: "Backend Developer",
      topic: "Software Engineering",
      offeringMentorship: false,
      seekingMentorship: true,
      lastActive: 2,
      headline: "Express.js Guru",
      body: "Backend development is my passion. I specialize in Node and Express...",
      likes: 42,
      tags: ["Node.js", "Express", "Backend"]
    },
    {
      profileImage: `https://robohash.org/aliceb.png?size=30x30`,
      name: "Alice Brown",
      handle: "aliceb",
      descriptor: "Full Stack Developer",
      topic: "Software Engineering",
      offeringMentorship: true,
      seekingMentorship: true,
      lastActive: 5,
      headline: "MERN Stack Enthusiast",
      body: "From MongoDB to React, I love every part of the MERN stack...",
      likes: 28,
      tags: ["MongoDB", "Express", "React"]
    },
    {
      profileImage: `https://robohash.org/bobwhite.png?size=30x30`,
      name: "Bob White",
      handle: "bobwhite",
      descriptor: "Mobile App Developer",
      topic: "Software Engineering",
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 3,
      headline: "Flutter Fanatic",
      body: "Creating beautiful and performant mobile apps using Flutter has been a joy...",
      likes: 39,
      tags: ["Flutter", "Dart", "Mobile"]
    },
    {
      profileImage: `https://robohash.org/charlieg.png?size=30x30`,
      name: "Charlie Green",
      handle: "charlieg",
      descriptor: "Data Scientist",
      topic: "Career Guidance",
      offeringMentorship: true,
      seekingMentorship: false,
      lastActive: 7,
      headline: "Machine Learning Advocate",
      body: "Diving into data and drawing insights using Python and TensorFlow...",
      likes: 47,
      tags: ["Python", "TensorFlow", "Machine Learning"]
    },
];
