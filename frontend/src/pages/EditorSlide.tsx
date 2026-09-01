import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getAulaById, saveSlideMock, deleteSlideMock } from '../services/mockData';
import type { AulaData, SlideData } from '../services/mockData';
import BalaoTexto from '../components/BalaoTexto';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Slider,
  Chip,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from '@mui/material';
import {
  Save,
  ArrowBack,
  PlayArrow,
  AutoStories,
  Add,
  DeleteOutlined,
  Image,
  ChatBubbleOutlined,
  Lightbulb,
  Psychology,
  Tv,
  PhoneAndroid,
  HourglassEmpty
} from '@mui/icons-material';

// Galeria de imagens temáticas rápidas para facilitar o professor
const SUGESTOES_IMAGENS = [
  { nome: 'Hardware / Chip', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Placa-Mãe', url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Processamento', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Inteligência Artificial', url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Internet & Redes', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Segurança / Cadeado', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' },
  { nome: 'Programação / Código', url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80' }
];

const TIPOS_BALAO = [
  { tipo: 'dica', label: '💡 Dica Pedagógica', prefix: '💡 Dica: ' },
  { tipo: 'mascote', label: '🤖 Mascote Edu', prefix: '🤖 Robô Edu: ' },
  { tipo: 'atencao', label: '⚠️ Atenção / Mito', prefix: '⚠️ Fique Atento: ' },
  { tipo: 'pergunta', label: '❓ Pergunta Rápida', prefix: '❓ Pergunta: ' },
  { tipo: 'fala', label: '💬 Destaque / Fala', prefix: '💬 Nota: ' }
];

export const EditorSlide: React.FC = () => {
  const { aulaId, slideId } = useParams<{ aulaId: string; slideId: string }>();
  const navigate = useNavigate();

  const [aula, setAula] = useState<AulaData | null>(null);
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [slideAtualIdx, setSlideAtualIdx] = useState(0);
  const [carregando, setCarregando] = useState(true);

  // Form State
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [temBalao, setTemBalao] = useState(false);
  const [tipoBalao, setTipoBalao] = useState('dica');
  const [textoBalao, setTextoBalao] = useState('');

  // Campos do Assistente Pedagógico
  const [objetivo, setObjetivo] = useState('');
  const [tempoEstimado, setTempoEstimado] = useState(5);
  const [sugestaoExplicacao, setSugestaoExplicacao] = useState('');
  const [perguntasSugeridas, setPerguntasSugeridas] = useState('');
  const [curiosidades, setCuriosidades] = useState('');
  const [errosComuns, setErrosComuns] = useState('');
  const [materiaisComplementares, setMateriaisComplementares] = useState('');

  // UI Tabs & Preview States
  const [tabEditor, setTabEditor] = useState(0);
  const [previewMode, setPreviewMode] = useState<'apresentacao' | 'professor'>('apresentacao');
  const [salvando, setSalvando] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'info' }>({
    open: false,
    message: '',
    severity: 'success'
  });
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  // Carregar dados da aula e slides
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
          const slidesList = dadosAula.slides || [];
          setSlides(slidesList);

          // Encontrar índice do slide
          if (slideId && slideId !== 'novo') {
            const idSlideNum = Number(slideId);
            const idx = slidesList.findIndex((s) => s.id === idSlideNum);
            if (idx !== -1) {
              setSlideAtualIdx(idx);
              carregarSlideNoForm(slidesList[idx]);
            } else if (slidesList.length > 0) {
              setSlideAtualIdx(0);
              carregarSlideNoForm(slidesList[0]);
            }
          } else if (slideId === 'novo') {
            // Criar novo slide limpo
            limparFormNovoSlide(slidesList.length + 1);
          } else if (slidesList.length > 0) {
            setSlideAtualIdx(0);
            carregarSlideNoForm(slidesList[0]);
          }
        }
      } catch (e) {
        console.error('Erro ao carregar dados:', e);
      } finally {
        setCarregando(false);
      }
    };

    fetchAula();
  }, [aulaId, slideId]);

  const carregarSlideNoForm = (slide: SlideData) => {
    setTitulo(slide.titulo || '');
    setConteudo(slide.conteudo || '');
    setImagemUrl(slide.imagemUrl || '');

    if (slide.balaoTexto && slide.balaoTexto.trim()) {
      setTemBalao(true);
      setTextoBalao(slide.balaoTexto);
      // Auto-detectar tipo de balão
      if (slide.balaoTexto.startsWith('🤖') || slide.balaoTexto.includes('Robô')) setTipoBalao('mascote');
      else if (slide.balaoTexto.startsWith('⚠️') || slide.balaoTexto.includes('Atento')) setTipoBalao('atencao');
      else if (slide.balaoTexto.startsWith('❓') || slide.balaoTexto.includes('Pergunta')) setTipoBalao('pergunta');
      else if (slide.balaoTexto.startsWith('💬')) setTipoBalao('fala');
      else setTipoBalao('dica');
    } else {
      setTemBalao(false);
      setTextoBalao('');
    }

    setObjetivo(slide.objetivo || '');
    setTempoEstimado(slide.tempoEstimado || 5);
    setSugestaoExplicacao(slide.sugestaoExplicacao || '');
    setPerguntasSugeridas(slide.perguntasSugeridas || '');
    setCuriosidades(slide.curiosidades || '');
    setErrosComuns(slide.errosComuns || '');
    setMateriaisComplementares(slide.materiaisComplementares || '');
  };

  const limparFormNovoSlide = (ordem: number) => {
    setTitulo(`Novo Slide ${ordem}`);
    setConteudo('Descreva os pontos e explicações principais deste slide aqui...');
    setImagemUrl('');
    setTemBalao(true);
    setTipoBalao('dica');
    setTextoBalao('💡 Dica: Compartilhe uma pergunta ou analogia interessante com a turma!');
    setObjetivo('Compreender os tópicos desta etapa da aula.');
    setTempoEstimado(5);
    setSugestaoExplicacao('Explique este conceito utilizando exemplos do cotidiano.');
    setPerguntasSugeridas('Vocês já tiveram alguma experiência parecida no dia a dia?');
    setCuriosidades('');
    setErrosComuns('');
    setMateriaisComplementares('');
  };

  const handleTrocarSlide = (index: number) => {
    setSlideAtualIdx(index);
    const slide = slides[index];
    if (slide) {
      carregarSlideNoForm(slide);
      navigate(`/aula/${aulaId}/slide/${slide.id}/editar`, { replace: true });
    }
  };

  const handleNovoSlide = () => {
    const novaOrdem = slides.length + 1;
    limparFormNovoSlide(novaOrdem);
    navigate(`/aula/${aulaId}/slide/novo`, { replace: true });
  };

  const handleSalvar = async () => {
    if (!titulo.trim()) {
      setSnackbar({ open: true, message: 'O título do slide não pode ficar vazio.', severity: 'error' });
      return;
    }

    setSalvando(true);
    const slideAtual = slides[slideAtualIdx];
    const isNovo = !slideAtual || slideId === 'novo';

    const slideDataPayload = {
      titulo: titulo.trim(),
      conteudo: conteudo.trim(),
      imagemUrl: imagemUrl.trim() || undefined,
      balaoTexto: temBalao && textoBalao.trim() ? textoBalao.trim() : undefined,
      ordem: isNovo ? slides.length + 1 : slideAtual.ordem,
      objetivo: objetivo.trim() || undefined,
      tempoEstimado: tempoEstimado,
      sugestaoExplicacao: sugestaoExplicacao.trim() || undefined,
      perguntasSugeridas: perguntasSugeridas.trim() || undefined,
      curiosidades: curiosidades.trim() || undefined,
      errosComuns: errosComuns.trim() || undefined,
      materiaisComplementares: materiaisComplementares.trim() || undefined
    };

    try {
      let slideSalvo: SlideData;

      if (!isNovo && slideAtual?.id) {
        // Atualizar via API
        try {
          const res = await api.put(`/api/slides/${slideAtual.id}`, slideDataPayload);
          slideSalvo = res.data;
        } catch {
          slideSalvo = saveSlideMock(Number(aulaId), { ...slideDataPayload, id: slideAtual.id });
        }
      } else {
        // Criar novo via API
        try {
          const res = await api.post(`/api/aulas/${aulaId}/slides`, slideDataPayload);
          slideSalvo = res.data;
        } catch {
          slideSalvo = saveSlideMock(Number(aulaId), slideDataPayload);
        }
      }

      // Atualizar lista local de slides
      const novosSlides = [...slides];
      if (isNovo) {
        novosSlides.push(slideSalvo);
        setSlides(novosSlides);
        setSlideAtualIdx(novosSlides.length - 1);
        navigate(`/aula/${aulaId}/slide/${slideSalvo.id}/editar`, { replace: true });
      } else {
        novosSlides[slideAtualIdx] = slideSalvo;
        setSlides(novosSlides);
      }

      setSnackbar({ open: true, message: 'Slide salvo com sucesso!', severity: 'success' });
    } catch (err) {
      console.error('Erro ao salvar slide:', err);
      setSnackbar({ open: true, message: 'Erro ao salvar o slide.', severity: 'error' });
    } finally {
      setSalvando(false);
    }
  };

  const handleExcluirSlide = async () => {
    const slideAtual = slides[slideAtualIdx];
    if (!slideAtual) return;

    try {
      try {
        await api.delete(`/api/slides/${slideAtual.id}`);
      } catch {
        deleteSlideMock(Number(aulaId), slideAtual.id);
      }

      const novosSlides = slides.filter((_, idx) => idx !== slideAtualIdx);
      setSlides(novosSlides);
      setConfirmDeleteOpen(false);

      if (novosSlides.length > 0) {
        const proxIdx = Math.max(0, slideAtualIdx - 1);
        setSlideAtualIdx(proxIdx);
        carregarSlideNoForm(novosSlides[proxIdx]);
        navigate(`/aula/${aulaId}/slide/${novosSlides[proxIdx].id}/editar`, { replace: true });
      } else {
        handleNovoSlide();
      }

      setSnackbar({ open: true, message: 'Slide excluído com sucesso!', severity: 'info' });
    } catch (e) {
      console.error('Erro ao excluir slide:', e);
      setSnackbar({ open: true, message: 'Erro ao excluir o slide.', severity: 'error' });
    }
  };

  const handleAplicarPrefixoBalao = (prefix: string, tipo: string) => {
    setTipoBalao(tipo);
    if (!temBalao) setTemBalao(true);
    if (!textoBalao.trim() || textoBalao.startsWith('💡') || textoBalao.startsWith('🤖') || textoBalao.startsWith('⚠️') || textoBalao.startsWith('❓') || textoBalao.startsWith('💬')) {
      setTextoBalao(prefix);
    }
  };

  if (carregando) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', pb: 8, backgroundColor: '#0b0f19' }} className="fade-in">
      {/* Top Navbar */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, mb: 3 }} className="glass-panel">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            
            {/* Esquerda: Botão Voltar e Título da Aula */}
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
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.light', lineHeight: 1.2 }}>
                  Editor de Slides — {aula?.titulo || 'EduComp'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Editando Slide {slideAtualIdx + 1} de {Math.max(1, slides.length)}
                </Typography>
              </Box>
            </Box>

            {/* Direita: Ações Rápidas */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Tooltip title="Adicionar um novo slide a esta aula">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<Add />}
                  onClick={handleNovoSlide}
                  sx={{
                    fontWeight: 'bold',
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(6, 182, 212, 0.2)',
                      borderColor: 'primary.light'
                    }
                  }}
                >
                  + Novo Slide
                </Button>
              </Tooltip>

              <Tooltip title="Visualizar Slide Projetado para Alunos">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  startIcon={<PlayArrow />}
                  onClick={() => navigate(`/aula/${aulaId}`)}
                >
                  Projetar
                </Button>
              </Tooltip>

              <Tooltip title="Abrir Modo Professor com Roteiro">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  startIcon={<AutoStories />}
                  onClick={() => navigate(`/aula/${aulaId}/professor`)}
                >
                  Modo Professor
                </Button>
              </Tooltip>

              <Button
                variant="contained"
                color="primary"
                startIcon={salvando ? <CircularProgress size={16} color="inherit" /> : <Save />}
                onClick={handleSalvar}
                disabled={salvando}
                sx={{ px: 3, fontWeight: 'bold' }}
              >
                {salvando ? 'Salvando...' : 'Salvar Slide'}
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* Carrossel / Miniaturas dos Slides da Aula */}
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <Paper
          className="glass-panel"
          sx={{
            p: 1.5,
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            overflowX: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary', px: 1, whiteSpace: 'nowrap' }}>
            SLIDES:
          </Typography>

          {slides.map((s, idx) => {
            const isAtivo = idx === slideAtualIdx && slideId !== 'novo';
            return (
              <Box
                key={s.id || idx}
                onClick={() => handleTrocarSlide(idx)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: isAtivo ? 'primary.main' : 'rgba(255, 255, 255, 0.08)',
                  backgroundColor: isAtivo ? 'rgba(6, 182, 212, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  minWidth: '130px',
                  maxWidth: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.3,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Typography variant="caption" sx={{ color: isAtivo ? 'primary.light' : 'text.secondary', fontWeight: 'bold' }}>
                  #{idx + 1} {s.tempoEstimado ? `(${s.tempoEstimado}min)` : ''}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: isAtivo ? '#ffffff' : 'text.primary'
                  }}
                >
                  {s.titulo || 'Sem título'}
                </Typography>
              </Box>
            );
          })}

          <Button
            variant={slideId === 'novo' ? 'contained' : 'outlined'}
            color="primary"
            startIcon={<Add />}
            onClick={handleNovoSlide}
            sx={{
              minWidth: '150px',
              height: '52px',
              borderRadius: 2,
              borderStyle: slideId === 'novo' ? 'solid' : 'dashed',
              borderWidth: 2,
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              boxShadow: slideId === 'novo' ? '0 0 15px rgba(6, 182, 212, 0.4)' : 'none'
            }}
          >
            + Novo Slide
          </Button>

          {slides.length > 1 && (
            <Tooltip title="Excluir este slide">
              <IconButton
                color="error"
                onClick={() => setConfirmDeleteOpen(true)}
                sx={{ ml: 'auto', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
              >
                <DeleteOutlined />
              </IconButton>
            </Tooltip>
          )}
        </Paper>
      </Container>

      {/* Main Grid: Form à Esquerda + Live Preview à Direita */}
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          
          {/* Coluna Esquerda: Formulário de Edição */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper className="glass-panel" sx={{ p: 3, borderRadius: 3, minHeight: '680px' }}>
              
              {/* Abas do Formulário */}
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs
                  value={tabEditor}
                  onChange={(_, val) => setTabEditor(val)}
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab icon={<ChatBubbleOutlined />} iconPosition="start" label="Conteúdo & Visual" />
                  <Tab icon={<Psychology />} iconPosition="start" label="Assistente Pedagógico" />
                </Tabs>
              </Box>

              {/* ABA 1: Conteúdo Visual do Slide */}
              {tabEditor === 0 && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  
                  {/* Título do Slide */}
                  <TextField
                    label="Título do Slide *"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ex: Como a Informação Viaja na Web"
                    fullWidth
                    variant="outlined"
                    slotProps={{ input: { sx: { fontSize: '1.2rem', fontWeight: 'bold' } } }}
                  />

                  {/* Conteúdo do Slide */}
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        Conteúdo Principal do Slide *
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Suporta quebras de linha e markdown (*negrito*, - listas)
                      </Typography>
                    </Box>
                    <TextField
                      value={conteudo}
                      onChange={(e) => setConteudo(e.target.value)}
                      placeholder="Explique os pontos-chave que devem aparecer na TV/Projetor..."
                      multiline
                      rows={5}
                      fullWidth
                    />
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  {/* SEÇÃO: Balão de Texto (Callout / Dica / Fala do Mascote) */}
                  <Box sx={{ p: 2.5, borderRadius: 3, backgroundColor: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Lightbulb color="primary" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          Balão de Texto / Destaque Visual
                        </Typography>
                      </Box>
                      <FormControlLabel
                        control={<Switch checked={temBalao} onChange={(e) => setTemBalao(e.target.checked)} color="primary" />}
                        label={temBalao ? 'Ativado' : 'Desativado'}
                      />
                    </Box>

                    {temBalao && (
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        {/* Seletor de Estilo Rápido */}
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {TIPOS_BALAO.map((t) => (
                            <Chip
                              key={t.tipo}
                              label={t.label}
                              clickable
                              color={tipoBalao === t.tipo ? 'primary' : 'default'}
                              variant={tipoBalao === t.tipo ? 'filled' : 'outlined'}
                              onClick={() => handleAplicarPrefixoBalao(t.prefix, t.tipo)}
                              size="small"
                            />
                          ))}
                        </Box>

                        <TextField
                          label="Texto do Balão"
                          placeholder="Digite uma dica ou observação marcante para a turma..."
                          value={textoBalao}
                          onChange={(e) => setTextoBalao(e.target.value)}
                          multiline
                          rows={2}
                          fullWidth
                        />
                      </Box>
                    )}
                  </Box>

                  {/* SEÇÃO: Imagem do Slide */}
                  <Box sx={{ p: 2.5, borderRadius: 3, backgroundColor: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <Image color="secondary" />
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Imagem do Slide (Opcional)
                      </Typography>
                    </Box>

                    <TextField
                      label="URL da Imagem (Link Web)"
                      placeholder="https://exemplo.com/imagem.jpg"
                      value={imagemUrl}
                      onChange={(e) => setImagemUrl(e.target.value)}
                      fullWidth
                      size="small"
                      sx={{ mb: 2 }}
                    />

                    {/* Sugestões Rápidas de Imagens */}
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>
                      Ou escolha uma imagem temática da computação:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {SUGESTOES_IMAGENS.map((sug, idx) => (
                        <Chip
                          key={idx}
                          label={sug.nome}
                          clickable
                          variant={imagemUrl === sug.url ? 'filled' : 'outlined'}
                          color="secondary"
                          size="small"
                          onClick={() => setImagemUrl(sug.url)}
                        />
                      ))}
                      {imagemUrl && (
                        <Chip
                          label="Remover Imagem"
                          clickable
                          color="error"
                          variant="outlined"
                          size="small"
                          onDelete={() => setImagemUrl('')}
                          onClick={() => setImagemUrl('')}
                        />
                      )}
                    </Box>
                  </Box>

                </Box>
              )}

              {/* ABA 2: Assistente Pedagógico (Exclusivo do Professor) */}
              {tabEditor === 1 && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  
                  {/* Tempo Estimado para o Slide */}
                  <Box sx={{ p: 2, borderRadius: 2, backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <HourglassEmpty color="primary" />
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                          Tempo Estimado de Discussão
                        </Typography>
                      </Box>
                      <Chip label={`${tempoEstimado} minutos`} color="primary" size="small" />
                    </Box>
                    <Slider
                      value={tempoEstimado}
                      onChange={(_, val) => setTempoEstimado(val as number)}
                      min={1}
                      max={30}
                      step={1}
                      marks={[
                        { value: 5, label: '5m' },
                        { value: 10, label: '10m' },
                        { value: 15, label: '15m' },
                        { value: 20, label: '20m' }
                      ]}
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  {/* Objetivo Curricular */}
                  <TextField
                    label="🎯 Objetivo da Etapa / Curricular"
                    placeholder="O que o estudante deve aprender especificamente neste slide?"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    fullWidth
                  />

                  {/* Sugestão de Roteiro / Explicação */}
                  <TextField
                    label="🧠 Sugestão de Roteiro de Aula (O que falar)"
                    placeholder="Dicas de como o professor pode abordar este tema de forma engajadora..."
                    value={sugestaoExplicacao}
                    onChange={(e) => setSugestaoExplicacao(e.target.value)}
                    multiline
                    rows={3}
                    fullWidth
                  />

                  {/* Perguntas Sugeridas para a Turma */}
                  <TextField
                    label="❓ Perguntas para a Turma (Interação)"
                    placeholder="Perguntas provocativas para incentivar a participação dos alunos..."
                    value={perguntasSugeridas}
                    onChange={(e) => setPerguntasSugeridas(e.target.value)}
                    multiline
                    rows={2}
                    fullWidth
                  />

                  <Grid container spacing={2}>
                    {/* Curiosidades */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="ℹ️ Curiosidades da Computação"
                        placeholder="Fatos históricos ou curiosos..."
                        value={curiosidades}
                        onChange={(e) => setCuriosidades(e.target.value)}
                        multiline
                        rows={2}
                        fullWidth
                      />
                    </Grid>

                    {/* Mitos / Erros Comuns */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="⚠️ Mitos e Erros Conceituais Comuns"
                        placeholder="Equívocos frequentes que os alunos cometem..."
                        value={errosComuns}
                        onChange={(e) => setErrosComuns(e.target.value)}
                        multiline
                        rows={2}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  {/* Materiais Complementares */}
                  <TextField
                    label="📚 Materiais de Apoio / Referências"
                    placeholder="Links de artigos, vídeos ou leituras adicionais..."
                    value={materiaisComplementares}
                    onChange={(e) => setMateriaisComplementares(e.target.value)}
                    fullWidth
                  />

                </Box>
              )}

              <Divider sx={{ my: 3 }} />

              {/* Barra de Ações Inferior do Formulário */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Add />}
                  onClick={handleNovoSlide}
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 2,
                    borderStyle: 'dashed',
                    py: 1,
                    px: 2
                  }}
                >
                  + Adicionar Novo Slide
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={salvando ? <CircularProgress size={16} color="inherit" /> : <Save />}
                  onClick={handleSalvar}
                  disabled={salvando}
                  sx={{ px: 3, py: 1, fontWeight: 'bold', borderRadius: 2 }}
                >
                  {salvando ? 'Salvando...' : 'Salvar Slide'}
                </Button>
              </Box>

            </Paper>
          </Grid>

          {/* Coluna Direita: Live Preview em Tempo Real */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              className="glass-panel"
              sx={{
                p: 3,
                borderRadius: 3,
                minHeight: '680px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}
            >
              {/* Header do Preview com Alternador */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>👁️</span> Pré-visualização em Tempo Real
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    variant={previewMode === 'apresentacao' ? 'contained' : 'outlined'}
                    color="primary"
                    startIcon={<Tv />}
                    onClick={() => setPreviewMode('apresentacao')}
                  >
                    Visão Projetor
                  </Button>
                  <Button
                    size="small"
                    variant={previewMode === 'professor' ? 'contained' : 'outlined'}
                    color="secondary"
                    startIcon={<PhoneAndroid />}
                    onClick={() => setPreviewMode('professor')}
                  >
                    Visão Professor
                  </Button>
                </Box>
              </Box>

              {/* RENDERIZAÇÃO DO PREVIEW */}
              {previewMode === 'apresentacao' ? (
                // SIMULAÇÃO DO PROJETOR / TELA CHEIA
                <Box
                  sx={{
                    flex: 1,
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: '#020617',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '520px',
                    position: 'relative'
                  }}
                >
                  <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                    <Grid size={imagemUrl ? 7 : 12}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'primary.light',
                          fontWeight: 'bold',
                          mb: 2,
                          lineHeight: 1.2,
                          fontSize: { xs: '1.8rem', md: '2.4rem' }
                        }}
                      >
                        {titulo || 'Título do Slide'}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#f8fafc',
                          lineHeight: 1.6,
                          fontSize: '1.15rem',
                          whiteSpace: 'pre-line',
                          mb: 3
                        }}
                      >
                        {conteudo || 'O conteúdo do slide aparecerá aqui...'}
                      </Typography>

                      {/* Balão de Texto Renderizado */}
                      {temBalao && textoBalao && (
                        <BalaoTexto texto={textoBalao} tamanho="medium" animar={false} />
                      )}
                    </Grid>

                    {imagemUrl && (
                      <Grid size={5}>
                        <Box
                          component="img"
                          src={imagemUrl}
                          alt="Pré-visualização"
                          onError={(e: any) => {
                            e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                          }}
                          sx={{
                            width: '100%',
                            maxHeight: '340px',
                            borderRadius: 3,
                            objectFit: 'cover',
                            boxShadow: '0 16px 32px rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        />
                      </Grid>
                    )}
                  </Grid>

                  <Box sx={{ position: 'absolute', bottom: 12, right: 16 }}>
                    <Typography variant="caption" color="text.secondary">
                      EduComp • Slide {slideAtualIdx + 1}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                // SIMULAÇÃO DO MODO PROFESSOR
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5, overflowY: 'auto' }}>
                  
                  {/* Cronômetro e Miniatura */}
                  <Paper className="glass-panel" sx={{ p: 2.5, borderRadius: 3, borderLeft: '4px solid #06b6d4' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        ⏱️ Tempo de Aula Sugerido: {tempoEstimado} minutos
                      </Typography>
                      <Chip label={`Slide ${slideAtualIdx + 1}/${slides.length}`} color="primary" size="small" />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: 'text.primary' }}>
                      {titulo || 'Título do Slide'}
                    </Typography>
                  </Paper>

                  {/* Objetivo */}
                  {objetivo && (
                    <Paper className="glass-panel" sx={{ p: 2.5, borderRadius: 3, borderLeft: '4px solid #06b6d4' }}>
                      <Typography variant="subtitle2" color="primary.light" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        🎯 OBJETIVO CURRICULAR
                      </Typography>
                      <Typography variant="body2">{objetivo}</Typography>
                    </Paper>
                  )}

                  {/* Roteiro */}
                  {sugestaoExplicacao && (
                    <Paper className="glass-panel" sx={{ p: 2.5, borderRadius: 3, borderLeft: '4px solid #8b5cf6' }}>
                      <Typography variant="subtitle2" color="secondary.light" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        🧠 SUGESTÃO DE ROTEIRO / O QUE EXPLICAR
                      </Typography>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{sugestaoExplicacao}</Typography>
                    </Paper>
                  )}

                  {/* Perguntas */}
                  {perguntasSugeridas && (
                    <Paper className="glass-panel" sx={{ p: 2.5, borderRadius: 3, borderLeft: '4px solid #eab308' }}>
                      <Typography variant="subtitle2" color="warning.light" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        ❓ PERGUNTAS PARA A TURMA
                      </Typography>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{perguntasSugeridas}</Typography>
                    </Paper>
                  )}

                  {/* Balão do Slide */}
                  {temBalao && textoBalao && (
                    <Paper className="glass-panel" sx={{ p: 2, borderRadius: 3 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                        BALÃO PROJETADO NA TV:
                      </Typography>
                      <BalaoTexto texto={textoBalao} tamanho="small" animar={false} />
                    </Paper>
                  )}
                </Box>
              )}

            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* Diálogo de Confirmação de Exclusão */}
      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        slotProps={{ paper: { sx: { bgcolor: '#151b2c', borderRadius: 3 } } }}
      >
        <DialogTitle sx={{ fontWeight: 'bold', color: 'error.main' }}>
          Excluir Slide #{slideAtualIdx + 1}?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Tem certeza que deseja excluir o slide <strong>"{titulo}"</strong>? Esta ação não pode ser desfeita.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setConfirmDeleteOpen(false)} color="inherit">
            Cancelar
          </Button>
          <Button onClick={handleExcluirSlide} color="error" variant="contained">
            Excluir Slide
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Feedback */}
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

export default EditorSlide;
