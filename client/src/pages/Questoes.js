import React, { useState } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Box, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import simulados from '../data/simulados.json';

// Estrutura para múltiplas provas e múltiplos simulados por prova
const estruturaSimulados = {
  'AWS Cloud Practitioner': [
    { key: 'cloud-practitioner', nome: 'Simulado 1' },
    { key: 'cloud-practitioner-2', nome: 'Simulado 2' }
  ]
  // Adicione outras provas aqui futuramente
};

const Questoes = () => {
  const provas = Object.keys(estruturaSimulados);
  const [provaSelecionada, setProvaSelecionada] = useState(provas[0]);
  const simuladosProva = estruturaSimulados[provaSelecionada];
  const [simuladoSelecionado, setSimuladoSelecionado] = useState(simuladosProva[0].key);

  const questoes = simulados[simuladoSelecionado] || [];

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Banco de Questões
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Veja todas as questões organizadas por prova e simulado. Use esta lista para revisar e estudar!
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel id="prova-label">Prova</InputLabel>
            <Select
              labelId="prova-label"
              value={provaSelecionada}
              label="Prova"
              onChange={e => {
                setProvaSelecionada(e.target.value);
                setSimuladoSelecionado(estruturaSimulados[e.target.value][0].key);
              }}
            >
              {provas.map(prova => (
                <MenuItem key={prova} value={prova}>{prova}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="simulado-label">Simulado</InputLabel>
            <Select
              labelId="simulado-label"
              value={simuladoSelecionado}
              label="Simulado"
              onChange={e => setSimuladoSelecionado(e.target.value)}
            >
              {simuladosProva.map(simulado => (
                <MenuItem key={simulado.key} value={simulado.key}>{simulado.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
          {provaSelecionada} - {simuladosProva.find(s => s.key === simuladoSelecionado)?.nome}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Total de questões: <b>{questoes.length}</b>
        </Typography>
        <List>
          {questoes.map((q, qidx) => (
            <ListItem key={q.id} alignItems="flex-start" divider>
              <ListItemText
                primary={<Box sx={{ fontWeight: 'bold', color: 'primary.main' }}>{`Q${qidx + 1}: ${q.pergunta}`}</Box>}
                secondary={
                  <Box sx={{ mt: 1 }}>
                    {q.opcoes.map((op, i) => (
                      <Typography key={i} variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                        {String.fromCharCode(65 + i)}. {op}
                      </Typography>
                    ))}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Questoes; 