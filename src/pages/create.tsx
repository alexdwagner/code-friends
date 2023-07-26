import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CreatePost, { FormData } from '../../components/CreatePost';

function CreatePostPage() {
    const handlePostSubmit = async (formData: FormData) => {
        try {
            console.log("handlePostSubmit is being called with data:", formData);
            
            const response = await fetch('/api/posts', { // assuming '/api/posts' is your endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Server response:", data);

        } catch (error) {
            console.error("Error in handlePostSubmit:", error);
        }
    };

    console.log("CreatePostPage is rendering");

    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 leading-tight tracking-tighter border-b-2 border-gray-300 pb-2 px-0 py-2">
                    Create a New Post
                </h1>
                <CreatePost onPostSubmit={handlePostSubmit} />
            </div>
            <Footer />
        </>
    );
}

export default CreatePostPage;
