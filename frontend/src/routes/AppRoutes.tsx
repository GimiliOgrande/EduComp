import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CircularProgress, Box, Typography } from '@mui/material';

// Carregamento Preguiçoso (Lazy Loading) para Code-Splitting
const Login = lazy(() => import('../pages/Login'));
const Inicial = lazy(() => import('../pages/Inicial'));
const Apresentacao = lazy(() => import('../pages/Apresentacao'));
const Professor = lazy(() => import('../pages/Professor'));
const EditorSlide = lazy(() => import('../pages/EditorSlide'));
const EditorQuiz = lazy(() => import('../pages/EditorQuiz'));

const LoadingFallback: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      gap: 2
    }}
  >
    <CircularProgress color="primary" size={40} />
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
      Carregando EduComp...
    </Typography>
  </Box>
);

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
      <Suspense fallback={<LoadingFallback />}>
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
          <Route
            path="/aula/:aulaId/slide/:slideId/editar"
            element={
              <RotaPrivada>
                <EditorSlide />
              </RotaPrivada>
            }
          />
          <Route
            path="/aula/:aulaId/slide/novo"
            element={
              <RotaPrivada>
                <EditorSlide />
              </RotaPrivada>
            }
          />
          <Route
            path="/aula/:aulaId/quiz/editar"
            element={
              <RotaPrivada>
                <EditorQuiz />
              </RotaPrivada>
            }
          />

          {/* Rota de Redirecionamento */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
