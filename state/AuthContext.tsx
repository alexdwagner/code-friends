import { createContext, useContext, useState } from 'react';

interface AuthStateContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void; // Make sure to update this
  logout: () => void;
}

const AuthStateContext = createContext<AuthStateContextProps | undefined>(undefined);

interface AuthStateProviderProps {
  children: React.ReactNode; // Add children prop
}

export const AuthStateProvider: React.FC<AuthStateProviderProps> = ({ children }) => { // Add the type for props
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string) => { // Updated to accept username and password
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
