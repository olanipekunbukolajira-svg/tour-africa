import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for token but don't crash if backend is down
    const token = localStorage.getItem('token');
    if (token) {
      // For now, just set loading to false
      // We'll fetch profile when backend is ready
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      // For now, simulate login until backend is connected
      console.log('Login attempt:', credentials);
      // TODO: Replace with actual API call when backend is ready
      // const data = await authAPI.login(credentials);
      // localStorage.setItem('token', data.token);
      // setUser(data);
      return { success: false, message: 'Backend not connected yet' };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      console.log('Register attempt:', userData);
      // TODO: Replace with actual API call when backend is ready
      return { success: false, message: 'Backend not connected yet' };
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};