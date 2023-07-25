import React from 'react';
import PostCard, { PostProps } from './PostCard';  
import { postData } from './Data';  

function PostList() {
  console.log(postData);

  return (
    <div className="container mx-auto px-4">
      {postData.map((post: PostProps, index: number) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
