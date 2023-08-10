import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import UserProfile from './UserProfile';
import { PostProps, UserProps } from '../../../types';

import { postData } from '../PostsData'; // Or the correct path to PostsData.tsx

const ProfilePage: React.FC = () => {
    // Using the first post's data for the dummy userData
    const userData = {
        profileImage: postData[0].author.profileImage,
        name: postData[0].author.userName,
        handle: postData[0].author.userHandle,
        descriptor: postData[0].author.descriptor,
        offeringMentorship: postData[0].author.offeringMentorship,
        seekingMentorship: postData[0].author.seekingMentorship,
        lastActive: postData[0].author.lastActive,
        posts: [postData[0]]
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

export default ProfilePage;
