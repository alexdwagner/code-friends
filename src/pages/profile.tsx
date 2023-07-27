// pages/profile.tsx

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserProfile from '../../components/user/UserProfile';
import { postData } from '../../components/Data'; 

const Profile: React.FC = () => {
    // Using the first post's data for the dummy userData
    const userData = {
        profileImage: postData[0].profileImage,
        name: postData[0].name,
        handle: postData[0].handle,
        descriptor: postData[0].descriptor,
        offeringMentorship: postData[0].offeringMentorship,
        seekingMentorship: postData[0].seekingMentorship,
        lastActive: postData[0].lastActive,
        posts: [postData[0]]
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="py-12 px-4 container mx-auto bg-white shadow rounded-md">
                <h1 className="text-3xl mb-8 border-b pb-4">Profile Page</h1>
                <UserProfile user={userData} />
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
