import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import Inicial from '../pages/Inicial';
import Apresentacao from '../pages/Apresentacao';
import Professor from '../pages/Professor';
import { CircularProgress, Box } from '@mui/material';

const RotaPrivada: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Protegidas */}
        <Route
          path="/"
          element={
            <RotaPrivada>
              <Inicial />
            </RotaPrivada>
          }
        />
        <Route
          path="/aula/:aulaId"
          element={
            <RotaPrivada>
              <Apresentacao />
            </RotaPrivada>
          }
        />
        <Route
          path="/aula/:aulaId/professor"
          element={
            <RotaPrivada>
              <Professor />
            </RotaPrivada>
          }
        />

        {/* Rota de Redirecionamento */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
