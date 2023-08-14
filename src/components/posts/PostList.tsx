import React from 'react';
import { useQuery } from 'react-query';
import PostCard from './PostCard';
import { PostProps } from '../../../types';
import { postData } from '../PostsData';  // Adjust the path to your PostsData.ts file

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

const getDummyData = () => {
  // You can put any logic you want here to manipulate the dummy data if needed
  return postData;
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
  const posts: PostProps[] = getDummyData();

  return (
    <div className="container mx-auto px-2" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
