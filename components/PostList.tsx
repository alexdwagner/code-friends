// PostList.tsx
import React from 'react';
import PostCard, { PostProps } from './PostCard';

interface PostListProps {
  posts: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  console.log("Rendering posts:", posts);
  return (
    <div className="container mx-auto px-4">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
