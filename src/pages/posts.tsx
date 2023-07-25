// pages/posts.tsx
import React from 'react';
import PostList from '../../components/PostList';

function PostsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <PostList />
    </div>
  );
}

export default PostsPage;
