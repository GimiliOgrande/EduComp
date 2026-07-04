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
  IconButton,
  Grid,
  Paper,
  LinearProgress,
  Tooltip
} from '@mui/material';
import { ArrowBack, ArrowForward, Home, Fullscreen, CheckCircle, Cancel } from '@mui/icons-material';

const Apresentacao: React.FC = () => {
  const { aulaId } = useParams<{ aulaId: string }>();
  const navigate = useNavigate();
  const [aula, setAula] = useState<AulaData | undefined>(undefined);
  const [slideAtual, setSlideAtual] = useState(0);
  
  // Quiz states
  const [quizIniciado, setQuizIniciado] = useState(false);
  const [perguntaAtualIdx, setPerguntaAtualIdx] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState<number | null>(null);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [acertos, setAcertos] = useState(0);

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

  // Teclado navegação
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (quizIniciado) return;
      if (e.key === 'ArrowRight') {
        avancarSlide();
      } else if (e.key === 'ArrowLeft') {
        voltarSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [aula, slideAtual, quizIniciado]);

  if (!aula) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h5">Carregando aula...</Typography>
      </Box>
    );
  }

  const slides = aula.slides || [];
  const totalSlides = slides.length;
  const totalEtapas = totalSlides + (aula.quiz ? 1 : 0);

  const avancarSlide = () => {
    if (slideAtual < totalSlides - 1) {
      setSlideAtual(slideAtual + 1);
    } else if (slideAtual === totalSlides - 1 && aula.quiz) {
      setQuizIniciado(true);
      setSlideAtual(totalSlides);
    }
  };

  const voltarSlide = () => {
    if (quizIniciado) {
      setQuizIniciado(false);
      setSlideAtual(totalSlides - 1);
      setPerguntaAtualIdx(0);
      setAlternativaSelecionada(null);
      setQuizFinalizado(false);
      setAcertos(0);
    } else if (slideAtual > 0) {
      setSlideAtual(slideAtual - 1);
    }
  };

  const handleAlternativaClick = (altId: number, correta: boolean) => {
    if (alternativaSelecionada !== null) return;
    setAlternativaSelecionada(altId);
    if (correta) setAcertos(acertos + 1);
  };

  const handleProximaPergunta = () => {
    if (!aula.quiz) return;
    setAlternativaSelecionada(null);
    if (perguntaAtualIdx < aula.quiz.perguntas.length - 1) {
      setPerguntaAtualIdx(perguntaAtualIdx + 1);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtualIdx(0);
    setAlternativaSelecionada(null);
    setQuizFinalizado(false);
    setAcertos(0);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const progresso = ((slideAtual + (quizFinalizado ? 1 : 0)) / totalEtapas) * 100;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#020617',
        color: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Floating Controls */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 10
        }}
      >
        <Tooltip title="Voltar ao Painel Inicial">
          <IconButton
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(8px)',
              '&:hover': { backgroundColor: 'rgba(15, 23, 42, 0.9)' }
            }}
          >
            <Home color="primary" />
          </IconButton>
        </Tooltip>

        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
          EduComp Apresentação — {aula.titulo}
        </Typography>

        <Tooltip title="Tela Cheia">
          <IconButton
            onClick={handleToggleFullscreen}
            sx={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(8px)',
              '&:hover': { backgroundColor: 'rgba(15, 23, 42, 0.9)' }
            }}
          >
            <Fullscreen color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Main Slide/Quiz Area */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', px: 4, py: 10 }}>
        <Container maxWidth="lg">
          {!quizIniciado ? (
            // SLIDE RENDER
            slides.length > 0 && (
              <Grid container spacing={5} sx={{ alignItems: 'center' }} className="fade-in">
                <Grid size={slides[slideAtual].imagemUrl ? 7 : 12}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography
                      variant="h2"
                      component="h2"
                      color="primary.light"
                      sx={{ fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.2, fontWeight: 'bold' }}
                    >
                      {slides[slideAtual].titulo}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1.2rem', md: '1.6rem' },
                        color: 'text.primary',
                        lineHeight: 1.7,
                        textAlign: 'left'
                      }}
                    >
                      {slides[slideAtual].conteudo}
                    </Typography>
                  </Box>
                </Grid>

                {slides[slideAtual].imagemUrl && (
                  <Grid size={5}>
                    <Box
                      component="img"
                      src={slides[slideAtual].imagemUrl}
                      alt={slides[slideAtual].titulo}
                      sx={{
                        width: '100%',
                        maxHeight: '450px',
                        borderRadius: 4,
                        objectFit: 'cover',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            )
          ) : (
            // QUIZ RENDER
            aula.quiz && (
              <Box className="fade-in">
                {!quizFinalizado ? (
                  <Paper className="glass-panel" sx={{ p: 5, borderRadius: 4 }}>
                    <Typography variant="h5" color="secondary.light" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {aula.quiz.titulo} — Pergunta {perguntaAtualIdx + 1} de {aula.quiz.perguntas.length}
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', lineHeight: 1.4 }}>
                      {aula.quiz.perguntas[perguntaAtualIdx].enunciado}
                    </Typography>

                    <Grid container spacing={2}>
                      {aula.quiz.perguntas[perguntaAtualIdx].alternativas.map((alt) => {
                        const selecionada = alternativaSelecionada === alt.id;
                        const respondida = alternativaSelecionada !== null;

                        let cardBg = 'rgba(21, 27, 44, 0.4)';
                        let borderCol = 'rgba(255, 255, 255, 0.05)';
                        let icon = null;

                        if (respondida) {
                          if (alt.correta) {
                            cardBg = 'rgba(46, 125, 50, 0.15)';
                            borderCol = '#2e7d32';
                            icon = <CheckCircle color="success" sx={{ ml: 'auto' }} />;
                          } else if (selecionada && !alt.correta) {
                            cardBg = 'rgba(211, 47, 47, 0.15)';
                            borderCol = '#d32f2f';
                            icon = <Cancel color="error" sx={{ ml: 'auto' }} />;
                          }
                        }

                        return (
                          <Grid size={12} key={alt.id}>
                            <Box
                              onClick={() => handleAlternativaClick(alt.id, alt.correta)}
                              sx={{
                                p: 2.5,
                                borderRadius: 3,
                                border: '2px solid',
                                borderColor: borderCol,
                                backgroundColor: cardBg,
                                cursor: respondida ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  borderColor: respondida ? borderCol : 'primary.main',
                                  backgroundColor: respondida ? cardBg : 'rgba(21, 27, 44, 0.8)',
                                }
                              }}
                            >
                              <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                                {alt.texto}
                              </Typography>
                              {icon}
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>

                    {alternativaSelecionada !== null && (
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleProximaPergunta}
                          endIcon={<ArrowForward />}
                          size="large"
                        >
                          {perguntaAtualIdx < aula.quiz.perguntas.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                        </Button>
                      </Box>
                    )}
                  </Paper>
                ) : (
                  // QUIZ RESULT
                  <Paper className="glass-panel" sx={{ p: 5, borderRadius: 4, textAlign: 'center' }}>
                    <Typography variant="h3" color="primary.light" sx={{ fontWeight: 'bold' }} gutterBottom>
                      Quiz Finalizado!
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
                      A turma acertou <strong>{acertos}</strong> de <strong>{aula.quiz.perguntas.length}</strong> perguntas.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                      <Button variant="outlined" color="primary" onClick={reiniciarQuiz} size="large">
                        Refazer Quiz
                      </Button>
                      <Button variant="contained" color="primary" onClick={() => navigate('/')} size="large">
                        Concluir Aula
                      </Button>
                    </Box>
                  </Paper>
                )}
              </Box>
            )
          )}
        </Container>
      </Box>

      {/* Footer Navigation Bar */}
      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', py: 2.5 }} className="glass-panel">
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={voltarSlide}
              disabled={slideAtual === 0 && !quizIniciado}
              startIcon={<ArrowBack />}
            >
              Anterior
            </Button>

            <Box sx={{ flex: 1, mx: 4, display: { xs: 'none', sm: 'block' } }}>
              <LinearProgress variant="determinate" value={progresso} sx={{ height: 6, borderRadius: 3 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {quizIniciado ? 'Seção: Quiz Interativo' : `Slide ${slideAtual + 1} de ${totalSlides}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Math.round(progresso)}% Concluído
                </Typography>
              </Box>
            </Box>

            {!quizIniciado && (
              <Button
                variant="contained"
                color="primary"
                onClick={avancarSlide}
                endIcon={<ArrowForward />}
              >
                {slideAtual === totalSlides - 1 ? (aula.quiz ? 'Iniciar Quiz' : 'Finalizar') : 'Próximo'}
              </Button>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Apresentacao;
