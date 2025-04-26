import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  School as SchoolIcon,
  Timer as TimerIcon,
  EmojiEvents as EmojiEventsIcon,
  PlayArrow as PlayArrowIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import simulados from '../data/simulados.json';

// Estrutura para múltiplas provas e múltiplos simulados por prova
const estruturaSimulados = {
  'AWS Cloud Practitioner': [
    { 
      key: 'cloud-practitioner', 
      nome: 'Simulado 1',
      descricao: '65 questões sobre conceitos fundamentais da AWS',
      duracao: '60 minutos',
      nivel: 'Iniciante'
    },
    { 
      key: 'cloud-practitioner-2', 
      nome: 'Simulado 2',
      descricao: '65 questões sobre conceitos avançados da AWS',
      duracao: '60 minutos',
      nivel: 'Intermediário'
    }
  ]
};

const Simulados = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Simulados Disponíveis
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Escolha um simulado para iniciar sua prática. Apenas simulados ativos estão habilitados.
        </Typography>
      </Box>

      {Object.entries(estruturaSimulados).map(([prova, simuladosProva]) => (
        <Box key={prova} sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            {prova}
          </Typography>
          <Grid container spacing={4}>
            {simuladosProva.map(simulado => {
              const ativo = Boolean(simulados[simulado.key]);
              return (
                <Grid item xs={12} md={6} key={simulado.key}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      opacity: ativo ? 1 : 0.7,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: ativo ? 'translateY(-4px)' : 'none',
                        boxShadow: ativo ? 6 : 2,
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <SchoolIcon color="primary" sx={{ fontSize: 32 }} />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {simulado.nome}
                        </Typography>
                      </Stack>
                      
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {simulado.descricao}
                      </Typography>

                      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Chip 
                          icon={<TimerIcon />} 
                          label={simulado.duracao}
                          color="primary"
                          variant="outlined"
                        />
                        <Chip 
                          icon={<EmojiEventsIcon />} 
                          label={simulado.nivel}
                          color="secondary"
                          variant="outlined"
                        />
                      </Stack>

                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          {ativo 
                            ? `Total de questões: ${simulados[simulado.key].length}`
                            : 'Em breve'
                          }
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{ p: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!ativo}
                        onClick={() => ativo && navigate(`/simulado?prova=${encodeURIComponent(prova)}&simulado=${simulado.key}`)}
                        startIcon={ativo ? <PlayArrowIcon /> : <ScheduleIcon />}
                        sx={{ 
                          py: 1.5,
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        {ativo ? 'INICIAR SIMULADO' : 'EM BREVE'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Simulados; 