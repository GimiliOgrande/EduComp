import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import {
  Lightbulb,
  SmartToy,
  WarningAmber,
  HelpOutlined,
  ChatBubbleOutlined
} from '@mui/icons-material';

interface BalaoTextoProps {
  texto?: string;
  variant?: 'dica' | 'mascote' | 'atencao' | 'pergunta' | 'fala';
  tamanho?: 'small' | 'medium' | 'large';
  animar?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const BalaoTexto: React.FC<BalaoTextoProps> = ({
  texto,
  variant,
  tamanho = 'medium',
  animar = true,
  align = 'left'
}) => {
  if (!texto || !texto.trim()) return null;

  // Detectar variante automática caso comece com emoji
  let tipo = variant;
  let textoLimpo = texto;

  if (!tipo) {
    if (texto.startsWith('💡') || texto.toLowerCase().includes('dica')) {
      tipo = 'dica';
    } else if (texto.startsWith('🤖') || texto.toLowerCase().includes('robô') || texto.toLowerCase().includes('mascote')) {
      tipo = 'mascote';
    } else if (texto.startsWith('⚠️') || texto.toLowerCase().includes('atenção') || texto.toLowerCase().includes('cuidado') || texto.toLowerCase().includes('mito')) {
      tipo = 'atencao';
    } else if (texto.startsWith('❓') || texto.toLowerCase().includes('pergunta')) {
      tipo = 'pergunta';
    } else {
      tipo = 'fala';
    }
  }

  // Estilos de acordo com o tipo
  let corBorda = 'rgba(6, 182, 212, 0.4)';
  let corGlow = 'rgba(6, 182, 212, 0.15)';
  let bgGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(6, 182, 212, 0.12) 100%)';
  let IconComponent = Lightbulb;
  let corIcone = '#06b6d4';
  let labelTag = 'Dica Pedagógica';

  switch (tipo) {
    case 'mascote':
      corBorda = 'rgba(139, 92, 246, 0.5)';
      corGlow = 'rgba(139, 92, 246, 0.2)';
      bgGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(139, 92, 246, 0.16) 100%)';
      IconComponent = SmartToy;
      corIcone = '#a78bfa';
      labelTag = 'Mascote Edu';
      break;
    case 'atencao':
      corBorda = 'rgba(239, 68, 68, 0.5)';
      corGlow = 'rgba(239, 68, 68, 0.2)';
      bgGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(239, 68, 68, 0.15) 100%)';
      IconComponent = WarningAmber;
      corIcone = '#f87171';
      labelTag = 'Fique Atento!';
      break;
    case 'pergunta':
      corBorda = 'rgba(234, 179, 8, 0.5)';
      corGlow = 'rgba(234, 179, 8, 0.2)';
      bgGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(234, 179, 8, 0.15) 100%)';
      IconComponent = HelpOutlined;
      corIcone = '#facc15';
      labelTag = 'Pergunta para Pensar';
      break;
    case 'fala':
      corBorda = 'rgba(59, 130, 246, 0.5)';
      corGlow = 'rgba(59, 130, 246, 0.2)';
      bgGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(59, 130, 246, 0.15) 100%)';
      IconComponent = ChatBubbleOutlined;
      corIcone = '#60a5fa';
      labelTag = 'Destaque';
      break;
  }

  const paddingVal = tamanho === 'small' ? 1.5 : tamanho === 'large' ? 3 : 2;
  const fontSizeVal = tamanho === 'small' ? '0.9rem' : tamanho === 'large' ? '1.25rem' : '1.05rem';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        my: 2,
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        animation: animar ? 'balaoFloat 4s ease-in-out infinite' : 'none',
        '@keyframes balaoFloat': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      }}
    >
      {/* Avatar do Balão */}
      <Avatar
        sx={{
          bgcolor: 'rgba(15, 23, 42, 0.8)',
          border: `2px solid ${corIcone}`,
          boxShadow: `0 0 15px ${corGlow}`,
          width: tamanho === 'small' ? 36 : 46,
          height: tamanho === 'small' ? 36 : 46
        }}
      >
        <IconComponent sx={{ color: corIcone, fontSize: tamanho === 'small' ? 20 : 26 }} />
      </Avatar>

      {/* Corpo do Balão com Ponta Estilizada */}
      <Box
        sx={{
          position: 'relative',
          p: paddingVal,
          px: paddingVal * 1.4,
          borderRadius: '16px 16px 16px 4px',
          background: bgGradient,
          border: `1.5px solid ${corBorda}`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 16px ${corGlow}`,
          backdropFilter: 'blur(12px)',
          maxWidth: tamanho === 'large' ? '750px' : '620px',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -8,
            top: 14,
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `8px solid ${corBorda}`
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography
            variant="caption"
            sx={{
              color: corIcone,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.72rem'
            }}
          >
            {labelTag}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: fontSizeVal,
            color: '#f8fafc',
            lineHeight: 1.5,
            fontWeight: 500,
            whiteSpace: 'pre-line'
          }}
        >
          {textoLimpo}
        </Typography>
      </Box>
    </Box>
  );
};

export default BalaoTexto;
