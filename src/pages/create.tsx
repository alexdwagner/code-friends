import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CreatePost, {FormData} from '../../components/CreatePost';

function CreatePostPage() {
  const handlePostSubmit = (formData:FormData) => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>
        <CreatePost onPostSubmit={handlePostSubmit} />
      </div>
      <Footer />
    </>
  );
}

export default CreatePostPage;
