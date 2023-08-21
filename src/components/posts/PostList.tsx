import React from 'react';
import { useQuery } from 'react-query';
import PostCard from './PostCard';
import { PostProps } from '../../../types';
import postData from '../PostsData.json'; 

// Commenting out fetchPosts function since it's not currently used
/*
const fetchPosts = async () => {
  const res = await fetch('/api/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
*/

const getPostsData = (): PostProps[] => {
  return postData.posts.map(post => ({
    ...post,
    author: { userId: post.author.userId }
  }));
};

const PostList: React.FC = () => {
  // Commenting out the useQuery hook since it's not currently used
  /*
  const { data: posts, isLoading, isError, error } = useQuery<PostProps[], Error>('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error!.message}</div>;
  }
  */

  // Using the dummy data function directly
  const posts: PostProps[] = getPostsData();

  return (
    <div className="container mx-auto px-2" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
