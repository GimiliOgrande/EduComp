import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { mockCurso } from '../services/mockData';
import type { CursoData } from '../services/mockData';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  Divider,
  Stack
} from '@mui/material';
import {
  Logout,
  School,
  PlayArrow,
  AutoStories,
  AccessTime,
  Handyman,
  TrackChanges,
  BookmarkBorder
} from '@mui/icons-material';

const Inicial: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [curso, setCurso] = useState<CursoData>(mockCurso);
  const [activeSerieIdx, setActiveSerieIdx] = useState(0);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await api.get('/api/cursos');
        if (response.data && response.data.length > 0) {
          setCurso(response.data[0]);
        }
      } catch (error) {
        console.log('Utilizando dados simulados para o curso de Educação Digital.');
        setCurso(mockCurso);
      }
    };
    fetchCurso();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveSerieIdx(newValue);
  };

  const activeSerie = curso.series && curso.series.length > activeSerieIdx
    ? curso.series[activeSerieIdx]
    : null;

  return (
    <Box sx={{ minHeight: '100vh', pb: 6 }} className="fade-in">
      {/* Top Navbar */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, mb: 4 }} className="glass-panel">
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <School color="primary" sx={{ fontSize: 34 }} />
              <Typography variant="h5" component="div" className="text-gradient" sx={{ fontWeight: 'bold', letterSpacing: 0.5 }}>
                EduComp
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" color="text.primary">
                Olá, <strong>Prof. {user?.nome}</strong>
              </Typography>
              <Tooltip title="Sair do Sistema">
                <IconButton onClick={logout} color="error" size="small">
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Container */}
      <Container maxWidth="lg">
        {/* Header Curso */}
        <Box className="slide-up" sx={{ mb: 5 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: '800', letterSpacing: -0.5 }}>
            Curso: {curso.nome}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6 }}>
            {curso.descricao}
          </Typography>
        </Box>

        {/* Seletor de Série / Anos */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }} className="slide-up">
          <Tabs
            value={activeSerieIdx}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 'bold',
                px: 3,
                pb: 2
              }
            }}
          >
            {curso.series.map((serie) => (
              <Tab label={serie.nome} key={serie.id} />
            ))}
          </Tabs>
        </Box>

        {/* Listagem de Módulos da Série Ativa */}
        {activeSerie && (
          <Grid container spacing={4} className="slide-up">
            {activeSerie.modulos.map((modulo, modIdx) => (
              <Grid item xs={12} key={modulo.id}>
                <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                  {/* Cabeçalho do Módulo */}
                  <Box
                    sx={{
                      px: 3,
                      py: 3,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.04) 100%)',
                    }}
                  >
                    <Typography variant="h5" component="h3" color="primary.light" sx={{ fontWeight: 'bold' }}>
                      Módulo {modIdx + 1}: {modulo.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.95rem' }}>
                      {modulo.descricao}
                    </Typography>
                  </Box>

                  {/* Lista de Aulas do Módulo */}
                  <CardContent sx={{ p: 3 }}>
                    {modulo.aulas.length === 0 ? (
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', py: 2 }}>
                        Nenhuma aula estruturada para este módulo ainda.
                      </Typography>
                    ) : (
                      <Grid container spacing={3}>
                        {modulo.aulas.map((aula) => (
                          <Grid item xs={12} md={6} key={aula.id}>
                            <Box
                              sx={{
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                backgroundColor: 'background.default',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-3px)',
                                  borderColor: 'primary.main',
                                  boxShadow: '0 8px 30px rgba(6, 182, 212, 0.12)',
                                },
                              }}
                            >
                              <Box>
                                {/* Linha de Título e Ordem */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                  <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold', pr: 2, lineHeight: 1.3 }}>
                                    Aula {aula.ordem}: {aula.titulo}
                                  </Typography>
                                  <Chip
                                    label={`ID: ${aula.id}`}
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
                                  />
                                </Box>

                                {/* Resumo da Aula */}
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.5 }}>
                                  {aula.descricao}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                {/* Informações Pedagógicas Extras (Objetivo, Duração, Recursos) */}
                                <Stack spacing={1.5} sx={{ mb: 3 }}>
                                  {aula.objetivo && (
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                      <TrackChanges color="primary" sx={{ fontSize: 18, mt: 0.2 }} />
                                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                        <strong>Objetivo:</strong> {aula.objetivo}
                                      </Typography>
                                    </Box>
                                  )}
                                  {aula.duracaoSugerida && (
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                      <AccessTime color="primary" sx={{ fontSize: 18 }} />
                                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                        <strong>Duração:</strong> {aula.duracaoSugerida}
                                      </Typography>
                                    </Box>
                                  )}
                                  {aula.recursosNecessarios && (
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                      <Handyman color="primary" sx={{ fontSize: 18, mt: 0.2 }} />
                                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.85rem' }}>
                                        <strong>Recursos:</strong> {aula.recursosNecessarios}
                                      </Typography>
                                    </Box>
                                  )}
                                </Stack>

                                {/* Habilidades e Competências da BNCC */}
                                {(aula.competencias && aula.competencias.length > 0) || (aula.habilidades && aula.habilidades.length > 0) ? (
                                  <Box sx={{ mb: 3 }}>
                                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                                      {aula.competencias?.map((comp, idx) => (
                                        <Chip
                                          icon={<BookmarkBorder sx={{ fontSize: 14 }} />}
                                          label={comp}
                                          size="small"
                                          color="info"
                                          variant="outlined"
                                          key={idx}
                                          sx={{ fontSize: '0.75rem' }}
                                        />
                                      ))}
                                      {aula.habilidades?.map((hab, idx) => (
                                        <Chip
                                          label={hab}
                                          size="small"
                                          color="success"
                                          variant="outlined"
                                          key={idx}
                                          sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}
                                        />
                                      ))}
                                    </Stack>
                                  </Box>
                                ) : null}
                              </Box>

                              {/* Ações da Aula */}
                              <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  fullWidth
                                  startIcon={<PlayArrow />}
                                  onClick={() => navigate(`/aula/${aula.id}`)}
                                  sx={{ borderRadius: 2, py: 1, fontWeight: 'bold' }}
                                >
                                  Apresentação
                                </Button>
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  fullWidth
                                  startIcon={<AutoStories />}
                                  onClick={() => navigate(`/aula/${aula.id}/professor`)}
                                  sx={{ borderRadius: 2, py: 1, fontWeight: 'bold' }}
                                >
                                  Modo Professor
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Inicial;
