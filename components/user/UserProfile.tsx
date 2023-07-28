import React, { useState } from 'react';
import PostCard from '../../components/posts/PostCard';
import { PostProps, UserProps } from '../../types';

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
    const [editedUser, setEditedUser] = useState(user);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setEditedUser(prevState => ({ ...prevState, profileImage: event.target?.result as string }));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="bg-gray-100 p-4">
            <div className="flex items-center">
                <img src={editedUser.profileImage} alt={editedUser.name} className="w-16 h-16 rounded-full" />
                {isEditing ? (
                    <input type="file" onChange={handleImageChange} />
                ) : null}
                <div className="ml-4">
                    {isEditing ? (
                        <>
                            <input 
                                type="text" 
                                value={editedUser.name} 
                                onChange={e => setEditedUser(prevState => ({ ...prevState, name: e.target.value }))}
                                className="border p-2 w-full mb-4 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input 
                                type="text" 
                                value={editedUser.handle} 
                                onChange={e => setEditedUser(prevState => ({ ...prevState, handle: e.target.value }))}
                                className="border p-2 w-full mb-4 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input 
                                type="text" 
                                value={editedUser.descriptor} 
                                onChange={e => setEditedUser(prevState => ({ ...prevState, descriptor: e.target.value }))}
                                className="border p-2 w-full mb-4 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <label className="flex items-center space-x-3 mb-4">
                                <input 
                                    type="checkbox" 
                                    checked={editedUser.offeringMentorship} 
                                    onChange={e => setEditedUser(prevState => ({ ...prevState, offeringMentorship: e.target.checked }))}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="text-gray-800">Offering Mentorship</span>
                            </label>
                            <label className="flex items-center space-x-3 mb-4">
                                <input 
                                    type="checkbox" 
                                    checked={editedUser.seekingMentorship} 
                                    onChange={e => setEditedUser(prevState => ({ ...prevState, seekingMentorship: e.target.checked }))}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="text-gray-800">Seeking Mentorship</span>
                            </label>
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl font-semibold">{editedUser.name}</h1>
                            <p>@{editedUser.handle}</p>
                            <p>{editedUser.descriptor}</p>
                            {editedUser.offeringMentorship && <p>Offering mentorship</p>}
                            {editedUser.seekingMentorship && <p>Seeking mentorship</p>}
                            <p>Last active: {editedUser.lastActive} days ago</p>
                        </>
                    )}
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Save" : "Edit Profile"}
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Posts</h2>
                {editedUser.posts.map((post, index) => <PostCard key={index} {...post} />)}
            </div>
        </div>
    );
};

export default UserProfile;
