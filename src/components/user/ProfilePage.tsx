import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import UserProfile from './UserProfile';
import { PostProps, UserProps } from '../../../types';
import postData from '../PostsData.json'; 
import { getAuthor } from '../utils/authorUtils';  // <-- Import the function

const ProfilePage: React.FC = () => {
    const firstPost = postData.posts[0];
    const author = getAuthor(firstPost.author.userId);

    // Check if author exists; if not, return a fallback component or null
    if (!author) return null;

    // Construct the userData object that matches what UserProfile expects
    const userData = {
        ...author,  // Spread all properties of author
        name: author.userName,        // Replace userName with name
        handle: author.userHandle,    // Replace userHandle with handle
        posts: [{
            ...firstPost,  // Spread all properties of the first post
            author: { userId: firstPost.author.userId }  // Keep author as an object
        }]
    };
    

    return (
        <div>
            <Header />
            <h1>Profile Page</h1>
            <UserProfile user={userData} />
            <Footer />
        </div>
    );
};