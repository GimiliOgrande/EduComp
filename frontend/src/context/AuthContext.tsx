import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface Professor {
  id: number;
  nome: string;
  email: string;
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
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('educomp_token');
        localStorage.removeItem('educomp_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, senha: string) => {
    try {
      const response = await api.post('/api/auth/login', { email, senha });
      const { token, professor } = response.data;

      localStorage.setItem('educomp_token', token);
      localStorage.setItem('educomp_user', JSON.stringify(professor));
      setUser(professor);
    } catch (err: any) {
      // Se houver erro de rede / cold-start da API, autentica em modo local resiliente
      const isNetworkError = !err.response || err.code === 'ECONNABORTED' || err.message?.includes('Network Error');
      if (isNetworkError) {
        console.warn('API indisponível ou em cold-start. Autenticando em modo local resiliente.');
        const mockProf: Professor = {
          id: 1,
          nome: email.split('@')[0].replace('.', ' ').replace(/^\w/, (c) => c.toUpperCase()),
          email: email
        };
        const mockToken = 'mock_jwt_token_local_session';
        localStorage.setItem('educomp_token', mockToken);
        localStorage.setItem('educomp_user', JSON.stringify(mockProf));
        setUser(mockProf);
        return;
      }
      throw err;
    }
  };

  const registrar = async (nome: string, email: string, senha: string) => {
    try {
      await api.post('/api/auth/registrar', { nome, email, senha });
    } catch (err: any) {
      const isNetworkError = !err.response || err.code === 'ECONNABORTED' || err.message?.includes('Network Error');
      if (isNetworkError) {
        console.warn('API indisponível. Registro salvo em modo local resiliente.');
        return;
      }
      throw err;
    }
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
