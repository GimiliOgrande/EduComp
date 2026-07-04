import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Tabs,
  Tab,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Email, Lock, Person, Visibility, VisibilityOff, School } from '@mui/icons-material';

const Login: React.FC = () => {
  const { login, registrar } = useAuth();
  const navigate = useNavigate();

  const [abaActive, setAbaActive] = useState(0); // 0 = Login, 1 = Cadastro
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [showSenha, setShowSenha] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setSenha('');
    setErro(null);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setAbaActive(newValue);
    limparCampos();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setSucesso(null);
    setCarregando(true);

    try {
      if (abaActive === 0) {
        // Login Flow
        await login(email, senha);
        navigate('/');
      } else {
        // Registration Flow
        await registrar(nome, email, senha);
        setSucesso('Cadastro realizado com sucesso! Faça login para continuar.');
        setAbaActive(0); // Mudar para aba de Login
        limparCampos();
      }
    } catch (err: any) {
      const msgErro = err.response?.data?.mensagem || 'Erro ao processar solicitação. Tente novamente.';
      setErro(msgErro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
        className="fade-in"
      >
        {/* Logo / Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
          <School color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h3" component="h1" className="text-gradient">
            EduComp
          </Typography>
        </Box>

        <Paper className="glass-panel slide-up" sx={{ width: '100%', p: 4, borderRadius: 3 }}>
          <Tabs
            value={abaActive}
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 4 }}
          >
            <Tab label="Entrar" />
            <Tab label="Cadastrar-se" />
          </Tabs>

          {erro && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: '8px' }}>
              {erro}
            </Alert>
          )}

          {sucesso && (
            <Alert severity="success" sx={{ mb: 3, borderRadius: '8px' }}>
              {sucesso}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {abaActive === 1 && (
                <TextField
                  label="Nome Completo"
                  variant="outlined"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  fullWidth
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="action" />
                        </InputAdornment>
                      ),
                    }
                  }}
                />
              )}

              <TextField
                label="E-mail"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }
                }}
              />

              <TextField
                label="Senha"
                variant="outlined"
                type={showSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                fullWidth
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowSenha(!showSenha)} edge="end">
                          {showSenha ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={carregando}
                sx={{
                  mt: 1,
                  py: 1.5,
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(6, 182, 212, 0.25)',
                }}
              >
                {carregando ? 'Processando...' : abaActive === 0 ? 'Acessar Sistema' : 'Criar Conta'}
              </Button>
            </Box>
          </form>

          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
            {abaActive === 0
              ? 'Área exclusiva para professores cadastrados.'
              : 'Ao se cadastrar, você concorda com nossos termos.'}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
