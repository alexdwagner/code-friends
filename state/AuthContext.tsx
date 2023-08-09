import { createContext, useContext, useState } from 'react';

interface AuthStateContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  // Add other authentication-related functions as needed
}

const AuthStateContext = createContext<AuthStateContextProps | undefined>(undefined);

export const AuthStateProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    // Logic to login
  };

  const logout = () => {
    // Logic to logout
  };

  return (
    <AuthStateContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within an AuthStateProvider');
  }
  return context;
};
