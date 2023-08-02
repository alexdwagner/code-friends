// PostList.tsx
import React from 'react';
import PostCard from './PostCard';
import { PostProps } from '../../../types';

interface PostListProps {
  posts: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  console.log("Rendering posts:", posts);
  return (
    <div className="container mx-auto px-2">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
