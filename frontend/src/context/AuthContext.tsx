import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface Professor {
  id: number;
  nome: String;
  email: String;
}

interface AuthContextType {
  user: Professor | null;
  authenticated: boolean;
  loading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  registrar: (nome: string, email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Professor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('educomp_token');
    const storedUser = localStorage.getItem('educomp_user');

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, senha: string) => {
    const response = await api.post('/api/auth/login', { email, senha });
    const { token, professor } = response.data;

    localStorage.setItem('educomp_token', token);
    localStorage.setItem('educomp_user', JSON.stringify(professor));
    setUser(professor);
  };

  const registrar = async (nome: string, email: string, senha: string) => {
    await api.post('/api/auth/registrar', { nome, email, senha });
  };

  const logout = () => {
    localStorage.removeItem('educomp_token');
    localStorage.removeItem('educomp_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: !!user,
        loading,
        login,
        registrar,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
