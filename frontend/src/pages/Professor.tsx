import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getAulaById } from '../services/mockData';
import type { AulaData } from '../services/mockData';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Chip,
  IconButton,
  LinearProgress
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  Home,
  HourglassEmpty,
  Psychology,
  HelpOutlined,
  Info,
  BugReport,
  School,
  LibraryBooks,
  PlayCircleOutlined
} from '@mui/icons-material';

const Professor: React.FC = () => {
  const { aulaId } = useParams<{ aulaId: string }>();
  const navigate = useNavigate();
  const [aula, setAula] = useState<AulaData | undefined>(undefined);
  const [slideAtual, setSlideAtual] = useState(0);

  // Timer states
  const [segundosRestantes, setSegundosRestantes] = useState(0);
  const [timerAtivo, setTimerAtivo] = useState(false);

  useEffect(() => {
    const fetchAula = async () => {
      try {
        const idNum = Number(aulaId);
        const response = await api.get(`/api/aulas/${idNum}`);
        if (response.data) {
          setAula(response.data);
        }
      } catch (error) {
        const idNum = Number(aulaId);
        setAula(getAulaById(idNum));
      }
    };
    fetchAula();
  }, [aulaId]);

  // Inicializar cronômetro quando o slide muda
  useEffect(() => {
    if (aula && aula.slides && aula.slides[slideAtual]) {
      const tempoMinutos = aula.slides[slideAtual].tempoEstimado || 5;
      setSegundosRestantes(tempoMinutos * 60);
      setTimerAtivo(true);
    }
  }, [aula, slideAtual]);

  // Efeito do Cronômetro
  useEffect(() => {
    let intervalo: any = null;
    if (timerAtivo && segundosRestantes > 0) {
      intervalo = setInterval(() => {
        setSegundosRestantes((prev) => prev - 1);
      }, 1000);
    } else if (segundosRestantes === 0) {
      setTimerAtivo(false);
    }
    return () => clearInterval(intervalo);
  }, [timerAtivo, segundosRestantes]);

  if (!aula) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h5">Carregando painel do professor...</Typography>
      </Box>
    );
  }

  const slides = aula.slides || [];
  const totalSlides = slides.length;
  const slide = slides[slideAtual];

  const formatarTempo = (totalSegundos: number) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

  const avancarSlide = () => {
    if (slideAtual < totalSlides - 1) {
      setSlideAtual(slideAtual + 1);
    }
  };

  const voltarSlide = () => {
    if (slideAtual > 0) {
      setSlideAtual(slideAtual - 1);
    }
  };

  const progresso = (segundosRestantes / ((slide?.tempoEstimado || 5) * 60)) * 100;

  return (
    <Box sx={{ minHeight: '100vh', pb: 6 }} className="fade-in">
      {/* Top Navbar */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, mb: 4 }} className="glass-panel">
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <IconButton onClick={() => navigate('/')} color="primary" size="small">
                <Home />
              </IconButton>
              <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}>
                Modo Professor — {aula.titulo}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {aula.competencias?.map((comp, idx) => (
                <Chip key={idx} label={comp} color="primary" variant="outlined" size="small" />
              ))}
              {aula.habilidades?.map((hab, idx) => (
                <Chip key={idx} label={hab} color="secondary" variant="outlined" size="small" />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Coluna Esquerda: Miniatura do Slide e Controles */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              
              {/* Box Temporizador */}
              <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
                  <HourglassEmpty color="primary" />
                  <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    Tempo Sugerido para este Slide
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  color={segundosRestantes < 60 ? 'error.main' : 'primary.light'}
                  sx={{ fontFamily: 'monospace', my: 1.5, fontWeight: 'bold' }}
                >
                  {formatarTempo(segundosRestantes)}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progresso}
                  color={segundosRestantes < 60 ? 'error' : 'primary'}
                  sx={{ height: 6, borderRadius: 3, mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => setTimerAtivo(!timerAtivo)}
                    color="primary"
                  >
                    {timerAtivo ? 'Pausar' : 'Iniciar'}
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => setSegundosRestantes((slide?.tempoEstimado || 5) * 60)}
                    color="inherit"
                  >
                    Reiniciar
                  </Button>
                </Box>
              </Paper>

              {/* Miniatura Visão Geral do Slide */}
              <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" color="secondary.light" sx={{ fontWeight: 'bold' }}>
                    VISÃO DO ALUNO (SLIDE {slideAtual + 1}/{totalSlides})
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<PlayCircleOutlined />}
                    onClick={() => navigate(`/aula/${aula.id}`)}
                  >
                    Projetar
                  </Button>
                </Box>
                
                {slide ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                    <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
                      {slide.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                      {slide.conteudo}
                    </Typography>
                    {slide.imagemUrl && (
                      <Box
                        component="img"
                        src={slide.imagemUrl}
                        alt="Miniatura"
                        sx={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 2, mt: 'auto' }}
                      />
                    )}
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    Fim da apresentação. Próximo passo: Quiz.
                  </Typography>
                )}

                <Divider sx={{ my: 2.5 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
                    onClick={voltarSlide}
                    disabled={slideAtual === 0}
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={avancarSlide}
                    disabled={slideAtual === totalSlides - 1}
                  >
                    Próximo
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Coluna Direita: Assistente Pedagógico */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h4" component="h3" color="secondary.light" sx={{ fontWeight: 'bold' }}>
                🧠 Assistente Pedagógico
              </Typography>

              {slide ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} className="fade-in">
                  
                  {/* Objetivo da Etapa */}
                  {slide.objetivo && (
                    <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, borderLeft: '4px solid #06b6d4' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <School color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Objetivo Curricular</Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {slide.objetivo}
                      </Typography>
                    </Paper>
                  )}

                  {/* Sugestão de Explicação */}
                  {slide.sugestaoExplicacao && (
                    <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, borderLeft: '4px solid #8b5cf6' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Psychology color="secondary" />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sugestão de Roteiro de Aula</Typography>
                      </Box>
                      <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                        {slide.sugestaoExplicacao}
                      </Typography>
                    </Paper>
                  )}

                  {/* Perguntas Sugeridas */}
                  {slide.perguntasSugeridas && (
                    <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, borderLeft: '4px solid #eab308' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <HelpOutlined color="warning" />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Perguntas para a Turma (Interação)</Typography>
                      </Box>
                      <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                        {slide.perguntasSugeridas}
                      </Typography>
                    </Paper>
                  )}

                  <Grid container spacing={3}>
                    {/* Curiosidades */}
                    {slide.curiosidades && (
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Info color="info" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Curiosidade</Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {slide.curiosidades}
                          </Typography>
                        </Paper>
                      </Grid>
                    )}

                    {/* Erros Conceituais Comuns */}
                    {slide.errosComuns && (
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <BugReport color="error" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Mitos / Erros Comuns</Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {slide.errosComuns}
                          </Typography>
                        </Paper>
                      </Grid>
                    )}
                  </Grid>

                  {/* Materiais de Apoio */}
                  {slide.materiaisComplementares && (
                    <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <LibraryBooks color="action" />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Material de Apoio do Professor</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        {slide.materiaisComplementares}
                      </Typography>
                    </Paper>
                  )}

                </Box>
              ) : (
                <Paper className="glass-panel" sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    Você chegou ao final dos slides. Projete a tela para iniciar o Quiz Interativo com a turma.
                  </Typography>
                </Paper>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Professor;
