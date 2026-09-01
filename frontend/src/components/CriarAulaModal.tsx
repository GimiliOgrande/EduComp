import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress
} from '@mui/material';
import { AddCircleOutlined, School } from '@mui/icons-material';
import api from '../services/api';
import { createAulaMock } from '../services/mockData';

interface CriarAulaModalProps {
  open: boolean;
  onClose: () => void;
  moduloId: number;
  moduloNome: string;
  onAulaCriada: (novaAula: any) => void;
}

export const CriarAulaModal: React.FC<CriarAulaModalProps> = ({
  open,
  onClose,
  moduloId,
  moduloNome,
  onAulaCriada
}) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [duracaoSugerida, setDuracaoSugerida] = useState('50 minutos');
  const [recursosNecessarios, setRecursosNecessarios] = useState('Projetor ou TV, quadro escolar');
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) {
      setErro('Por favor, informe o título da aula.');
      return;
    }

    setSalvando(true);
    setErro(null);

    const payload = {
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      objetivo: objetivo.trim(),
      duracaoSugerida: duracaoSugerida.trim(),
      recursosNecessarios: recursosNecessarios.trim(),
      ordem: 1
    };

    try {
      const response = await api.post(`/api/modulos/${moduloId}/aulas`, payload);
      const aula = response.data;
      onAulaCriada(aula);
      handleFechar();
    } catch (err) {
      console.warn('Backend indisponível, criando aula em modo local/mock:', err);
      const novaAulaMock = createAulaMock(moduloId, payload);
      onAulaCriada(novaAulaMock);
      handleFechar();
    } finally {
      setSalvando(false);
    }
  };

  const handleFechar = () => {
    setTitulo('');
    setDescricao('');
    setObjetivo('');
    setDuracaoSugerida('50 minutos');
    setRecursosNecessarios('Projetor ou TV, quadro escolar');
    setErro(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleFechar}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            backgroundColor: '#151b2c',
            backgroundImage: 'none',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }
      }}
    >
      <form onSubmit={handleSalvar}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 1 }}>
          <School color="primary" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Criar Nova Aula
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Módulo: {moduloNome}
            </Typography>
          </Box>
        </DialogTitle>

        <DialogContent dividers sx={{ borderColor: 'divider', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {erro && <Alert severity="error">{erro}</Alert>}

          <TextField
            label="Título da Aula *"
            placeholder="Ex: Introdução à Programação com Python"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            fullWidth
            required
            autoFocus
          />

          <TextField
            label="Descrição / Resumo da Aula"
            placeholder="Breve resumo sobre o que os estudantes irão aprender nesta aula..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            label="Objetivo Geral de Aprendizagem"
            placeholder="Ex: Compreender as estruturas básicas de variáveis e condicionais..."
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Duração Sugerida"
              value={duracaoSugerida}
              onChange={(e) => setDuracaoSugerida(e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              label="Recursos Necessários"
              value={recursosNecessarios}
              onChange={(e) => setRecursosNecessarios(e.target.value)}
              sx={{ flex: 1 }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={handleFechar} color="inherit" disabled={salvando}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={salvando ? <CircularProgress size={18} /> : <AddCircleOutlined />}
            disabled={salvando}
          >
            {salvando ? 'Criando...' : 'Criar Aula e Iniciar Slides'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CriarAulaModal;
