import { useRouter } from 'next/router';
import React from 'react';

const withProtectedRoute = (WrappedComponent: React.ComponentType<any>) => {
  const ProtectedComponent: React.FC<any> = (props) => {
    // Authentication status retrieved from the API.
    const isAuthenticated = false;

    const router = useRouter();

    if (!isAuthenticated) {
      router.replace('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  ProtectedComponent.displayName = `WithProtectedRoute(${getDisplayName(WrappedComponent)})`;

  return ProtectedComponent;
};

export default withProtectedRoute;

function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
