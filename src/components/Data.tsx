import { PostProps } from '../../types';

export const postData: PostProps[] = [
    {
      profileImage: "/path-to-image1.jpg",
      name: "John Doe",
      handle: "johndoe",
      descriptor: "Frontend Developer",
      offeringMentorship: true,
      seekingMentorship: false,
      lastActive: 1,
      headline: "Exploring ReactJS and Next.js!",
      body: "I've been diving deep into the React ecosystem and I'm loving the journey...",
      likes: 34,
      tags: ["React", "Next.js", "JavaScript"]
    },
    {
      profileImage: "/path-to-image2.jpg",
      name: "Jane Smith",
      handle: "janesmith",
      descriptor: "Backend Developer",
      offeringMentorship: false,
      seekingMentorship: true,
      lastActive: 2,
      headline: "Express.js Guru",
      body: "Backend development has been my passion and I specialize in Node and Express...",
      likes: 42,
      tags: ["Node.js", "Express", "Backend"]
    },
    {
      profileImage: "/path-to-image3.jpg",
      name: "Alice Brown",
      handle: "aliceb",
      descriptor: "Full Stack Developer",
      offeringMentorship: true,
      seekingMentorship: true,
      lastActive: 5,
      headline: "MERN Stack Enthusiast",
      body: "From MongoDB to React, I love every part of the MERN stack...",
      likes: 28,
      tags: ["MongoDB", "Express", "React"]
    },
    {
      profileImage: "/path-to-image4.jpg",
      name: "Bob White",
      handle: "bobwhite",
      descriptor: "Mobile App Developer",
      offeringMentorship: false,
      seekingMentorship: false,
      lastActive: 3,
      headline: "Flutter Fanatic",
      body: "Creating beautiful and performant mobile apps using Flutter has been a joy...",
      likes: 39,
      tags: ["Flutter", "Dart", "Mobile"]
    },
    {
      profileImage: "/path-to-image5.jpg",
      name: "Charlie Green",
      handle: "charlieg",
      descriptor: "Data Scientist",
      offeringMentorship: true,
      seekingMentorship: false,
      lastActive: 7,
      headline: "Machine Learning Advocate",
      body: "Diving into data and drawing insights using Python and TensorFlow...",
      likes: 47,
      tags: ["Python", "TensorFlow", "Machine Learning"]
    },
];
