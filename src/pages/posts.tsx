// pages/posts.tsx
import React from 'react';
import PostList from '../../components/PostList';
import { postData } from '../../components/Data';  // Import the dummy data

function PostsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <PostList posts={postData} />  {/* Pass the dummy data to the PostList */}
    </div>
  );
}

export default PostsPage;
