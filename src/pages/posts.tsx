import React from 'react';
import { useQuery } from 'react-query';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PostList from '../components/posts/PostList';
import { postData } from '../components/PostsData';

// This function returns the dummy data. In a real app, this would be an API call.
const fetchPosts = async () => {
  return postData;
};

function PostsPage() {
  // The initialData option is set to the dummy data, so it doesn't show a loading state. 
  const { data: posts, isLoading, isError } = useQuery('posts', fetchPosts, { initialData: postData });

  return (
    <>
      <Header />
      <div className="container mx-auto px-2">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 leading-tight tracking-tighter border-b-2 border-gray-300 pb-2 px-0 py-2">
          Latest Posts
        </h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading posts.</p>}
        <PostList />
      </div>
      <Footer />
    </>
  );
}

export default PostsPage;
