import React from 'react';

type User = {
  username: string;
  email: string;
};

type UserProfileProps = {
  user: User;
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
