// components/UserProfile.tsx

import React, { useState } from 'react';
import { PostProps } from '../posts/PostCard';

interface UserProfileProps {
    user: {
        profileImage: string;
        name: string;
        handle: string;
        descriptor: string;
        offeringMentorship: boolean;
        seekingMentorship: boolean;
        lastActive: number;
        posts: PostProps[];
    };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    
    return (
        <div className="bg-gray-100 p-4">
            <div className="flex items-center">
                <img src={user.profileImage} alt={user.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                    {isEditing ? (
                        <input 
                            type="text" 
                            value={editedName} 
                            onChange={(e) => setEditedName(e.target.value)}
                            className="border rounded p-2 w-full" 
                        />
                    ) : (
                        <h1 className="text-2xl font-semibold">{user.name}</h1>
                    )}
                    <p>@{user.handle}</p>
                    <p>{user.descriptor}</p>
                    {user.offeringMentorship && <p>Offering mentorship</p>}
                    {user.seekingMentorship && <p>Seeking mentorship</p>}
                    <p>Last active: {user.lastActive} days ago</p>
                    
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Save" : "Edit Profile"}
                    </button>
                </div>
            </div>
            
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Posts</h2>
                {/* Here, you can map through the user's posts and display them using the PostCard component */}
            </div>
        </div>
    );
};

export default UserProfile;
