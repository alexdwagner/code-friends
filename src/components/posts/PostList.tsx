import React from 'react';
import { useQuery } from 'react-query';
import PostCard from './PostCard';
import { PostProps } from '../../../types';

const fetchPosts = async () => {
  const res = await fetch('/api/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const PostList: React.FC = () => {
  const { data: posts, isLoading, isError, error } = useQuery<PostProps[], Error>('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error!.message}</div>;
  }

  return (
    <div className="container mx-auto px-2">
      {posts!.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
