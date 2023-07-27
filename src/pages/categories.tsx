// pages/categories.tsx

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

function CategoriesPage() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Categories</h1>
                <p>
                    Categories page.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default CategoriesPage;
