import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useThemeContext } from '../context/ThemeContext';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode } = useThemeContext();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ 
        bgcolor: theme.palette.background.paper,
        p: 3,
        borderRadius: 2,
        boxShadow: 3
      }}>
        <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Simulados para Certificações AWS
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Teste seus conhecimentos, pratique para provas reais e acompanhe seu desempenho. Escolha um simulado, selecione o modo (Estudo ou Exame) e comece agora!
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Simulados Oficiais
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Questões baseadas em provas reais e atualizadas para você treinar de verdade.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Modo Estudo e Exame
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Pratique com feedback imediato ou simule o ambiente real de prova, sem dicas durante o teste.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Histórico Local
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Seu desempenho é salvo no navegador. Acompanhe sua evolução a cada simulado realizado.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ mr: 2, fontWeight: 'bold', px: 4 }}
              onClick={() => navigate('/simulados')}
            >
              INICIAR SIMULADO
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              sx={{ fontWeight: 'bold', px: 4 }}
              onClick={() => navigate('/questoes')}
            >
              VER BANCO DE QUESTÕES
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home; 