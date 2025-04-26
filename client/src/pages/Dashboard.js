import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Cabeçalho */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>
              Meu Dashboard
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/simulado/novo"
              >
                Novo Simulado
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/questoes"
              >
                Gerenciar Questões
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Estatísticas */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Estatísticas
            </Typography>
            <Typography variant="body1">
              Simulados Realizados: 0
            </Typography>
            <Typography variant="body1">
              Média de Acertos: 0%
            </Typography>
            <Typography variant="body1">
              Melhor Desempenho: 0%
            </Typography>
          </Paper>
        </Grid>

        {/* Próximos Simulados */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Próximos Simulados
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nenhum simulado agendado
            </Typography>
          </Paper>
        </Grid>

        {/* Histórico Recente */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Histórico Recente
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nenhum simulado realizado
            </Typography>
          </Paper>
        </Grid>

        {/* Lista de Simulados Disponíveis */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Simulados Disponíveis
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nenhum simulado disponível no momento
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 