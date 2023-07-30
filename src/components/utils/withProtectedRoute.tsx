import { useRouter } from 'next/router';
import React from 'react';

const withProtectedRoute = (WrappedComponent: React.ComponentType<any>) => {
    return (props: React.ComponentProps<typeof WrappedComponent>) => {
        // Authentication status retrieved from the API.
        const isAuthenticated = false; 

        const router = useRouter();

        if (!isAuthenticated) {
            router.replace('/login');
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withProtectedRoute;
