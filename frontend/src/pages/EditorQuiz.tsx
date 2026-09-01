import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getAulaById, saveQuizMock } from '../services/mockData';
import type { AulaData, QuizData, PerguntaData } from '../services/mockData';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Radio,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Divider,
  Card,
  CardContent,
  Chip,
  CircularProgress
} from '@mui/material';
import {
  Save,
  ArrowBack,
  PlayArrow,
  AutoStories,
  Add,
  DeleteOutlined,
  CheckCircle,
  Cancel,
  Quiz,
  HelpOutlined
} from '@mui/icons-material';

export const EditorQuiz: React.FC = () => {
  const { aulaId } = useParams<{ aulaId: string }>();
  const navigate = useNavigate();

  const [aula, setAula] = useState<AulaData | null>(null);
  const [quizTitulo, setQuizTitulo] = useState('');
  const [perguntas, setPerguntas] = useState<PerguntaData[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  // Live Preview interactive test state
  const [perguntaPreviewIdx, setPerguntaPreviewIdx] = useState(0);
  const [altSelecionadaPreview, setAltSelecionadaPreview] = useState<number | null>(null);

  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    const fetchAula = async () => {
      setCarregando(true);
      try {
        const idNum = Number(aulaId);
        let dadosAula: AulaData | undefined;

        try {
          const res = await api.get(`/api/aulas/${idNum}`);
          if (res.data) dadosAula = res.data;
        } catch {
          dadosAula = getAulaById(idNum);
        }

        if (dadosAula) {
          setAula(dadosAula);
          if (dadosAula.quiz) {
            setQuizTitulo(dadosAula.quiz.titulo);
            setPerguntas(dadosAula.quiz.perguntas || []);
          } else {
            setQuizTitulo(`Quiz Interativo: ${dadosAula.titulo}`);
            setPerguntas([
              {
                id: 1,
                enunciado: `Qual é o conceito principal abordado na aula de ${dadosAula.titulo}?`,
                ordem: 1,
                alternativas: [
                  { id: 11, texto: 'Conceito principal da aula.', correta: true, ordem: 1 },
                  { id: 12, texto: 'Alternativa incorreta de exemplo.', correta: false, ordem: 2 }
                ]
              }
            ]);
          }
        }
      } catch (err) {
        console.error('Erro ao carregar quiz:', err);
      } finally {
        setCarregando(false);
      }
    };

    fetchAula();
  }, [aulaId]);

  // Manipulação de Perguntas
  const handleAdicionarPergunta = () => {
    const novaPerguntaId = Date.now();
    const novaPergunta: PerguntaData = {
      id: novaPerguntaId,
      enunciado: 'Digite aqui a nova pergunta...',
      ordem: perguntas.length + 1,
      alternativas: [
        { id: novaPerguntaId * 10 + 1, texto: 'Alternativa correta', correta: true, ordem: 1 },
        { id: novaPerguntaId * 10 + 2, texto: 'Alternativa incorreta 1', correta: false, ordem: 2 },
        { id: novaPerguntaId * 10 + 3, texto: 'Alternativa incorreta 2', correta: false, ordem: 3 }
      ]
    };
    setPerguntas([...perguntas, novaPergunta]);
  };

  const handleExcluirPergunta = (idx: number) => {
    const novas = perguntas.filter((_, i) => i !== idx);
    novas.forEach((p, i) => { p.ordem = i + 1; });
    setPerguntas(novas);
    if (perguntaPreviewIdx >= novas.length) {
      setPerguntaPreviewIdx(Math.max(0, novas.length - 1));
    }
  };

  const handleEnunciadoChange = (idx: number, texto: string) => {
    const novas = [...perguntas];
    novas[idx].enunciado = texto;
    setPerguntas(novas);
  };

  // Manipulação de Alternativas
  const handleAlternativaTextoChange = (pIdx: number, aIdx: number, texto: string) => {
    const novas = [...perguntas];
    novas[pIdx].alternativas[aIdx].texto = texto;
    setPerguntas(novas);
  };

  const handleMarcarCorreta = (pIdx: number, aIdx: number) => {
    const novas = [...perguntas];
    novas[pIdx].alternativas.forEach((alt, i) => {
      alt.correta = i === aIdx;
    });
    setPerguntas(novas);
    setAltSelecionadaPreview(null);
  };

  const handleAdicionarAlternativa = (pIdx: number) => {
    const novas = [...perguntas];
    const altId = Date.now();
    novas[pIdx].alternativas.push({
      id: altId,
      texto: `Nova alternativa ${novas[pIdx].alternativas.length + 1}`,
      correta: false,
      ordem: novas[pIdx].alternativas.length + 1
    });
    setPerguntas(novas);
  };

  const handleRemoverAlternativa = (pIdx: number, aIdx: number) => {
    const novas = [...perguntas];
    if (novas[pIdx].alternativas.length <= 2) {
      setSnackbar({ open: true, message: 'Uma pergunta deve ter pelo menos 2 alternativas.', severity: 'error' });
      return;
    }
    const eraCorreta = novas[pIdx].alternativas[aIdx].correta;
    novas[pIdx].alternativas = novas[pIdx].alternativas.filter((_, i) => i !== aIdx);
    if (eraCorreta && novas[pIdx].alternativas.length > 0) {
      novas[pIdx].alternativas[0].correta = true;
    }
    novas[pIdx].alternativas.forEach((alt, i) => { alt.ordem = i + 1; });
    setPerguntas(novas);
  };

  const handleSalvarQuiz = async () => {
    if (!quizTitulo.trim()) {
      setSnackbar({ open: true, message: 'O título do quiz não pode ficar vazio.', severity: 'error' });
      return;
    }

    if (perguntas.length === 0) {
      setSnackbar({ open: true, message: 'Adicione pelo menos 1 pergunta ao quiz.', severity: 'error' });
      return;
    }

    setSalvando(true);
    const quizPayload: QuizData = {
      id: aula?.quiz?.id || Date.now(),
      titulo: quizTitulo.trim(),
      perguntas: perguntas
    };

    try {
      try {
        await api.post(`/api/aulas/${aulaId}/quiz`, {
          titulo: quizPayload.titulo,
          perguntas: quizPayload.perguntas.map(p => ({
            id: p.id,
            enunciado: p.enunciado,
            ordem: p.ordem,
            alternativas: p.alternativas.map(a => ({
              id: a.id,
              texto: a.texto,
              correta: a.correta,
              ordem: a.ordem
            }))
          }))
        });
      } catch {
        saveQuizMock(Number(aulaId), quizPayload);
      }

      setSnackbar({ open: true, message: 'Quiz salvo com sucesso!', severity: 'success' });
    } catch (err) {
      console.error('Erro ao salvar quiz:', err);
      setSnackbar({ open: true, message: 'Erro ao salvar o quiz.', severity: 'error' });
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  const perguntaAtualPreview = perguntas[perguntaPreviewIdx];

  return (
    <Box sx={{ minHeight: '100vh', pb: 8, backgroundColor: '#0b0f19' }} className="fade-in">
      {/* Top Navbar */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, mb: 3 }} className="glass-panel">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                startIcon={<ArrowBack />}
                onClick={() => navigate(`/aula/${aulaId}/professor`)}
              >
                Voltar
              </Button>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.light', lineHeight: 1.2 }}>
                  Editor de Quiz — {aula?.titulo || 'EduComp'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {perguntas.length} pergunta(s) cadastrada(s)
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<PlayArrow />}
                onClick={() => navigate(`/aula/${aulaId}`)}
              >
                Projetar Aula
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<AutoStories />}
                onClick={() => navigate(`/aula/${aulaId}/professor`)}
              >
                Modo Professor
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={salvando ? <CircularProgress size={16} color="inherit" /> : <Save />}
                onClick={handleSalvarQuiz}
                disabled={salvando}
                sx={{ px: 3, fontWeight: 'bold' }}
              >
                {salvando ? 'Salvando...' : 'Salvar Quiz'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Grid: Editor à Esquerda + Live Preview à Direita */}
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          
          {/* Coluna Esquerda: Edição do Quiz e Perguntas */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              
              {/* Card Título do Quiz */}
              <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Quiz color="secondary" />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Configurações Gerais do Quiz
                  </Typography>
                </Box>
                <TextField
                  label="Título do Quiz *"
                  value={quizTitulo}
                  onChange={(e) => setQuizTitulo(e.target.value)}
                  fullWidth
                  placeholder="Ex: Quiz de Fixação: Hardware vs Software"
                  slotProps={{ input: { sx: { fontSize: '1.1rem', fontWeight: 'bold' } } }}
                />
              </Paper>

              {/* Lista de Perguntas */}
              {perguntas.map((p, pIdx) => (
                <Card
                  key={p.id || pIdx}
                  sx={{
                    borderRadius: 3,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(21, 27, 44, 0.6)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Cabeçalho da Pergunta */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <HelpOutlined color="primary" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                          Pergunta {pIdx + 1}
                        </Typography>
                      </Box>
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => handleExcluirPergunta(pIdx)}
                        disabled={perguntas.length <= 1}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </Box>

                    {/* Enunciado */}
                    <TextField
                      label="Enunciado da Pergunta *"
                      value={p.enunciado}
                      onChange={(e) => handleEnunciadoChange(pIdx, e.target.value)}
                      multiline
                      rows={2}
                      fullWidth
                      sx={{ mb: 2.5 }}
                    />

                    <Divider sx={{ my: 1.5 }} />

                    {/* Alternativas */}
                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary', display: 'block', mb: 1 }}>
                      ALTERNATIVAS (Marque a opção correta no círculo):
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {p.alternativas.map((alt, aIdx) => (
                        <Box
                          key={alt.id || aIdx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: alt.correta ? 'rgba(46, 125, 50, 0.15)' : 'rgba(15, 23, 42, 0.5)',
                            border: '1px solid',
                            borderColor: alt.correta ? '#2e7d32' : 'rgba(255, 255, 255, 0.08)'
                          }}
                        >
                          <Tooltip title={alt.correta ? 'Esta é a resposta correta' : 'Marcar como resposta correta'}>
                            <Radio
                              checked={alt.correta}
                              onChange={() => handleMarcarCorreta(pIdx, aIdx)}
                              color="success"
                            />
                          </Tooltip>

                          <TextField
                            value={alt.texto}
                            onChange={(e) => handleAlternativaTextoChange(pIdx, aIdx, e.target.value)}
                            size="small"
                            fullWidth
                            placeholder={`Texto da alternativa ${aIdx + 1}`}
                          />

                          <IconButton
                            size="small"
                            color="inherit"
                            onClick={() => handleRemoverAlternativa(pIdx, aIdx)}
                            disabled={p.alternativas.length <= 2}
                          >
                            <DeleteOutlined fontSize="small" />
                          </IconButton>
                        </Box>
                      ))}

                      {p.alternativas.length < 6 && (
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<Add />}
                          onClick={() => handleAdicionarAlternativa(pIdx)}
                          sx={{ alignSelf: 'flex-start', mt: 0.5 }}
                        >
                          Adicionar Alternativa
                        </Button>
                      )}
                    </Box>

                  </CardContent>
                </Card>
              ))}

              {/* Botão Nova Pergunta */}
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Add />}
                onClick={handleAdicionarPergunta}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  borderStyle: 'dashed',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                + Adicionar Nova Pergunta
              </Button>

            </Box>
          </Grid>

          {/* Coluna Direita: Live Preview Interativo */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Paper
              className="glass-panel"
              sx={{
                p: 3,
                borderRadius: 3,
                position: 'sticky',
                top: 20,
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>🎮</span> Teste Interativo do Quiz
                </Typography>
                <Chip label={`Pergunta ${perguntaPreviewIdx + 1} de ${perguntas.length}`} color="secondary" size="small" />
              </Box>

              {perguntaAtualPreview ? (
                <Box sx={{ p: 3, borderRadius: 3, backgroundColor: '#020617', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Typography variant="subtitle2" color="secondary.light" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {quizTitulo || 'Quiz'}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, lineHeight: 1.4 }}>
                    {perguntaAtualPreview.enunciado || 'Enunciado da pergunta...'}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {perguntaAtualPreview.alternativas.map((alt) => {
                      const respondida = altSelecionadaPreview !== null;
                      const selecionada = altSelecionadaPreview === alt.id;

                      let bgCol = 'rgba(21, 27, 44, 0.6)';
                      let borderCol = 'rgba(255, 255, 255, 0.08)';
                      let icon = null;

                      if (respondida) {
                        if (alt.correta) {
                          bgCol = 'rgba(46, 125, 50, 0.2)';
                          borderCol = '#2e7d32';
                          icon = <CheckCircle color="success" />;
                        } else if (selecionada && !alt.correta) {
                          bgCol = 'rgba(211, 47, 47, 0.2)';
                          borderCol = '#d32f2f';
                          icon = <Cancel color="error" />;
                        }
                      }

                      return (
                        <Box
                          key={alt.id}
                          onClick={() => setAltSelecionadaPreview(alt.id)}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: '1.5px solid',
                            borderColor: borderCol,
                            backgroundColor: bgCol,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: 'secondary.main',
                              backgroundColor: 'rgba(21, 27, 44, 0.9)'
                            }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {alt.texto || 'Alternativa...'}
                          </Typography>
                          {icon}
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Navegação do Preview */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <Button
                      size="small"
                      disabled={perguntaPreviewIdx === 0}
                      onClick={() => {
                        setPerguntaPreviewIdx(perguntaPreviewIdx - 1);
                        setAltSelecionadaPreview(null);
                      }}
                    >
                      Anterior
                    </Button>
                    <Button
                      size="small"
                      variant="text"
                      onClick={() => setAltSelecionadaPreview(null)}
                    >
                      Resetar
                    </Button>
                    <Button
                      size="small"
                      disabled={perguntaPreviewIdx === perguntas.length - 1}
                      onClick={() => {
                        setPerguntaPreviewIdx(perguntaPreviewIdx + 1);
                        setAltSelecionadaPreview(null);
                      }}
                    >
                      Próxima
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Nenhuma pergunta adicionada ainda.
                </Typography>
              )}
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%', borderRadius: 2 }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditorQuiz;
