// pages/posts.tsx
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostList from '../../components/posts/PostList';
import { postData } from '../../components/Data';  // Import the dummy data

function PostsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 leading-tight tracking-tighter border-b-2 border-gray-300 pb-2 px-0 py-2">
        Latest Posts
      </h1>    
          <PostList posts={postData} />  
      </div>
      <Footer />
    </>
  );
}

export default PostsPage;
