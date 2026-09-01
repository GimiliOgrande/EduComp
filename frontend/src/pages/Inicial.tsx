import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getStoredCurso, getAulaById } from '../services/mockData';
import type { CursoData, AulaData } from '../services/mockData';
import CriarAulaModal from '../components/CriarAulaModal';
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
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Logout,
  School,
  PlayArrow,
  AutoStories,
  AccessTime,
  Handyman,
  TrackChanges,
  BookmarkBorder,
  Add,
  Edit,
  Quiz as QuizIcon,
  Slideshow,
  ExpandMore
} from '@mui/icons-material';

const Inicial: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [curso, setCurso] = useState<CursoData>(getStoredCurso());
  const [activeSerieIdx, setActiveSerieIdx] = useState(0);

  // Modal State para Criar Aula
  const [modalAula, setModalAula] = useState<{ open: boolean; moduloId: number; moduloNome: string }>({
    open: false,
    moduloId: 0,
    moduloNome: ''
  });

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await api.get('/api/cursos');
        if (response.data && response.data.length > 0) {
          setCurso(response.data[0]);
        }
      } catch (error) {
        console.log('Utilizando dados sincronizados locais para o curso.');
        setCurso(getStoredCurso());
      }
    };
    fetchCurso();
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveSerieIdx(newValue);
  };

  const handleAbrirModalCriarAula = (moduloId: number, moduloNome: string) => {
    setModalAula({
      open: true,
      moduloId,
      moduloNome
    });
  };

  const handleAulaCriada = (novaAula: AulaData) => {
    const cursoAtualizado = { ...curso };
    for (const serie of cursoAtualizado.series) {
      const modulo = serie.modulos.find((m) => m.id === modalAula.moduloId);
      if (modulo) {
        const existe = modulo.aulas.some((a) => a.id === novaAula.id);
        if (!existe) {
          modulo.aulas.push(novaAula);
        }
        break;
      }
    }
    setCurso(cursoAtualizado);
    // Redirecionar para o editor do primeiro slide da aula criada
    const primeiroSlideId = novaAula.slides?.[0]?.id;
    if (primeiroSlideId) {
      navigate(`/aula/${novaAula.id}/slide/${primeiroSlideId}/editar`);
    } else {
      navigate(`/aula/${novaAula.id}/slide/novo`);
    }
  };

  const activeSerie = curso.series && curso.series.length > activeSerieIdx
    ? curso.series[activeSerieIdx]
    : null;

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }} className="fade-in">
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
        <Box className="slide-up" sx={{ mb: 4 }}>
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
              <Grid size={12} key={modulo.id}>
                <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                  {/* Cabeçalho do Módulo */}
                  <Box
                    sx={{
                      px: 3,
                      py: 2.5,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.04) 100%)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2
                    }}
                  >
                    <Box>
                      <Typography variant="h5" component="h3" color="primary.light" sx={{ fontWeight: 'bold' }}>
                        Módulo {modIdx + 1}: {modulo.nome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.95rem' }}>
                        {modulo.descricao}
                      </Typography>
                    </Box>

                    {/* Botão de Adicionar Nova Aula no Módulo */}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<Add />}
                      onClick={() => handleAbrirModalCriarAula(modulo.id, modulo.nome)}
                      sx={{ fontWeight: 'bold', borderRadius: 2 }}
                    >
                      Nova Aula
                    </Button>
                  </Box>

                  {/* Lista de Aulas do Módulo */}
                  <CardContent sx={{ p: 3 }}>
                    {modulo.aulas.length === 0 ? (
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                          Nenhuma aula cadastrada para este módulo ainda.
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<Add />}
                          onClick={() => handleAbrirModalCriarAula(modulo.id, modulo.nome)}
                        >
                          Criar a Primeira Aula
                        </Button>
                      </Box>
                    ) : (
                      <Grid container spacing={3}>
                        {modulo.aulas.map((aula) => {
                          // Obter slides completos da aula para visualização e edição individual
                          const aulaCompleta = getAulaById(aula.id) || aula;
                          const slidesAula = aulaCompleta.slides || [];

                          return (
                            <Grid size={{ xs: 12, md: 6 }} key={aula.id}>
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
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
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
                                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                                    {aula.descricao}
                                  </Typography>

                                  <Divider sx={{ my: 1.5 }} />

                                  {/* Informações Pedagógicas Extras */}
                                  <Stack spacing={1} sx={{ mb: 2 }}>
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
                                    <Box sx={{ mb: 2 }}>
                                      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', gap: 0.6 }}>
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

                                  {/* SEÇÃO: Slides da Aula com Botão Individual de Edição de Cada Slide */}
                                  <Accordion
                                    sx={{
                                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                                      borderRadius: '8px !important',
                                      mb: 2.5,
                                      border: '1px solid rgba(255, 255, 255, 0.08)',
                                      '&::before': { display: 'none' }
                                    }}
                                  >
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Slideshow color="primary" sx={{ fontSize: 20 }} />
                                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                          Slides da Aula ({slidesAula.length})
                                        </Typography>
                                      </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ pt: 0 }}>
                                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        {slidesAula.map((slide, sIdx) => (
                                          <Box
                                            key={slide.id || sIdx}
                                            sx={{
                                              p: 1.2,
                                              px: 1.5,
                                              borderRadius: 2,
                                              backgroundColor: 'rgba(21, 27, 44, 0.8)',
                                              border: '1px solid rgba(255, 255, 255, 0.05)',
                                              display: 'flex',
                                              justifyContent: 'space-between',
                                              alignItems: 'center',
                                              gap: 1
                                            }}
                                          >
                                            <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                                                {sIdx + 1}. {slide.titulo}
                                              </Typography>
                                              {slide.balaoTexto && (
                                                <Typography variant="caption" color="primary.light" sx={{ fontStyle: 'italic' }}>
                                                  💬 Contém Balão de Destaque
                                                </Typography>
                                              )}
                                            </Box>
                                            <Tooltip title={`Editar Slide ${sIdx + 1}`}>
                                              <Button
                                                size="small"
                                                variant="outlined"
                                                color="primary"
                                                startIcon={<Edit sx={{ fontSize: 14 }} />}
                                                onClick={() => navigate(`/aula/${aula.id}/slide/${slide.id}/editar`)}
                                                sx={{ py: 0.3, px: 1, fontSize: '0.75rem', minWidth: 'auto' }}
                                              >
                                                Editar
                                              </Button>
                                            </Tooltip>
                                          </Box>
                                        ))}

                                        {/* Botão Adicionar Slide */}
                                        <Button
                                          size="small"
                                          variant="text"
                                          color="primary"
                                          startIcon={<Add />}
                                          onClick={() => navigate(`/aula/${aula.id}/slide/novo`)}
                                          sx={{ mt: 0.5, alignSelf: 'flex-start', fontSize: '0.8rem' }}
                                        >
                                          + Adicionar Slide a esta Aula
                                        </Button>
                                      </Box>
                                    </AccordionDetails>
                                  </Accordion>
                                </Box>

                                {/* Barra de Ações da Aula */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 'auto' }}>
                                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      fullWidth
                                      startIcon={<PlayArrow />}
                                      onClick={() => navigate(`/aula/${aula.id}`)}
                                      sx={{ borderRadius: 2, py: 0.8, fontWeight: 'bold' }}
                                    >
                                      Apresentação
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      color="secondary"
                                      fullWidth
                                      startIcon={<AutoStories />}
                                      onClick={() => navigate(`/aula/${aula.id}/professor`)}
                                      sx={{ borderRadius: 2, py: 0.8, fontWeight: 'bold' }}
                                    >
                                      Modo Professor
                                    </Button>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                      variant="outlined"
                                      color="inherit"
                                      size="small"
                                      fullWidth
                                      startIcon={<QuizIcon />}
                                      onClick={() => navigate(`/aula/${aula.id}/quiz/editar`)}
                                      sx={{ borderRadius: 2, fontSize: '0.8rem' }}
                                    >
                                      Editar Quiz
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      size="small"
                                      fullWidth
                                      startIcon={<Edit />}
                                      onClick={() => {
                                        const primeiroSlide = slidesAula[0];
                                        if (primeiroSlide) {
                                          navigate(`/aula/${aula.id}/slide/${primeiroSlide.id}/editar`);
                                        } else {
                                          navigate(`/aula/${aula.id}/slide/novo`);
                                        }
                                      }}
                                      sx={{ borderRadius: 2, fontSize: '0.8rem' }}
                                    >
                                      Editar Slides
                                    </Button>
                                  </Box>
                                </Box>

                              </Box>
                            </Grid>
                          );
                        })}
                      </Grid>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Modal para Criar Nova Aula */}
      <CriarAulaModal
        open={modalAula.open}
        onClose={() => setModalAula({ open: false, moduloId: 0, moduloNome: '' })}
        moduloId={modalAula.moduloId}
        moduloNome={modalAula.moduloNome}
        onAulaCriada={handleAulaCriada}
      />
    </Box>
  );
};

export default Inicial;
