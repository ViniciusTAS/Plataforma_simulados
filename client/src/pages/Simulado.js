import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  Button, 
  Box,
  Alert,
  Divider,
  Card,
  CardContent,
  CardActions,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItemIcon,
  Toolbar,
  AppBar,
  IconButton,
  Stack,
  LinearProgress,
  FormGroup,
  Checkbox
} from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon, 
  Menu as MenuIcon,
  School as SchoolIcon,
  Timer as TimerIcon,
  CheckCircle as CheckCircleIcon,
  PlayArrow as PlayArrowIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import simulados from '../data/simulados.json';

const simuladosCloudPractitioner = [
  { id: 1, nome: 'Simulado 1', habilitado: true },
  { id: 2, nome: 'Simulado 2', habilitado: true },
  { id: 3, nome: 'Simulado 3', habilitado: false },
  { id: 4, nome: 'Simulado 4', habilitado: false },
  { id: 5, nome: 'Simulado 5', habilitado: false },
];

const EscolhaSimulado = ({ onEscolherSimulado }) => (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Escolha o Simulado AWS Cloud Practitioner
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {simuladosCloudPractitioner.map(simulado => (
          <Button
            key={simulado.id}
            variant="contained"
            color={simulado.habilitado ? 'primary' : 'inherit'}
            disabled={!simulado.habilitado}
            onClick={() => simulado.habilitado && onEscolherSimulado(simulado.id)}
            sx={{
              opacity: simulado.habilitado ? 1 : 0.5,
              cursor: simulado.habilitado ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              py: 2
            }}
          >
            {simulado.nome}
            {!simulado.habilitado && (
              <Typography variant="caption" sx={{ ml: 2 }} color="text.secondary">
                (Em breve)
              </Typography>
            )}
          </Button>
        ))}
      </Box>
    </Paper>
  </Container>
);

const TelaInicial = ({ onIniciarSimulado }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Escolha o Modo do Simulado
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
          Selecione o modo que melhor se adapta ao seu estilo de estudo
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <SchoolIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Modo Estudo
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Ideal para aprendizado e prática
                </Typography>
                <Stack spacing={2} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Feedback imediato após cada resposta</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Explicações detalhadas das alternativas</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Aprendizado guiado e progressivo</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AccessTimeIcon color="primary" />
                    <Typography>Tempo disponível: 90 minutos</Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => onIniciarSimulado('estudo')}
                  startIcon={<PlayArrowIcon />}
                  sx={{ 
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  Iniciar Modo Estudo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <TimerIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Modo Exame
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Simulação de ambiente real de prova
                </Typography>
                <Stack spacing={2} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Sem feedback durante o simulado</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Resultado apenas ao final</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon color="success" />
                    <Typography>Experiência realista de prova</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AccessTimeIcon color="secondary" />
                    <Typography>Tempo disponível: 65 minutos (tempo real da prova)</Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  color="secondary"
                  onClick={() => onIniciarSimulado('exame')}
                  startIcon={<PlayArrowIcon />}
                  sx={{ 
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  Iniciar Modo Exame
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

const MenuQuestoes = ({ 
  questoes, 
  questaoAtual, 
  onQuestaoClick, 
  respostas, 
  questoesRespondidas, 
  questoesPuladas,
  modo,
  menuAberto,
  setMenuAberto
}) => {
  // Função para determinar o status da questão
  const getStatus = (questao) => {
    if (questoesPuladas.has(questao.id)) return 'pulada';
    if (questoesRespondidas.has(questao.id)) {
      if (modo === 'estudo') {
        if (respostas[questao.id] === questao.respostaCorreta?.toString()) return 'correta';
        return 'incorreta';
      } else {
        return 'respondida';
      }
    }
    return 'nao-respondida';
  };

  // Ícones e cores de status
  const statusIcon = {
    'correta': <span style={{ color: '#2e7d32', fontWeight: 'bold', fontSize: 18 }}>✔️</span>,
    'incorreta': <span style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 18 }}>❌</span>,
    'pulada': <span style={{ color: '#ed6c02', fontWeight: 'bold', fontSize: 18 }}>⏭️</span>,
    'respondida': <span style={{ color: '#1976d2', fontWeight: 'bold', fontSize: 18 }}>📝</span>,
    'nao-respondida': <span style={{ color: '#bdbdbd', fontWeight: 'bold', fontSize: 18 }}>⚪</span>
  };
  const statusColor = {
    'correta': '#2e7d32',
    'incorreta': '#d32f2f',
    'pulada': '#ed6c02',
    'respondida': '#1976d2',
    'nao-respondida': '#bdbdbd'
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={menuAberto}
      onClose={() => setMenuAberto(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 260,
          marginTop: '64px',
          height: 'calc(100vh - 64px)',
          boxShadow: 3,
          borderRight: '1.5px solid #e0e0e0',
          background: '#fafbfc',
        },
      }}
    >
      <Box sx={{ p: 2, pb: 0, borderBottom: '1px solid #e0e0e0', mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: 1 }}>
          Questões
        </Typography>
      </Box>
      <List sx={{ p: 0 }}>
        {questoes.map((questao, index) => {
          const status = getStatus(questao);
          const isAtual = index === questaoAtual;
          return (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  onQuestaoClick(index);
                  setMenuAberto(false);
                }}
                selected={isAtual}
                sx={{
                  backgroundColor: isAtual ? '#e3f2fd' : 'transparent',
                  borderLeft: isAtual ? '4px solid #1976d2' : '4px solid transparent',
                  transition: 'background 0.2s, border 0.2s',
                  '&:hover': {
                    backgroundColor: isAtual ? '#e3f2fd' : '#f0f4f8',
                  },
                  py: 1.2,
                  px: 2
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {statusIcon[status]}
                </ListItemIcon>
                <ListItemText 
                  primary={
                    <Box>
                      <Typography sx={{
                        fontWeight: isAtual ? 'bold' : 500,
                        color: isAtual ? 'primary.main' : statusColor[status],
                        fontSize: 16
                      }}>
                        {`Questão ${index + 1}`}
                      </Typography>
                      <Typography sx={{ fontSize: 13, color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 170 }}>
                        {questao.pergunta.length > 40 ? questao.pergunta.slice(0, 40) + '...' : questao.pergunta}
                      </Typography>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

const Simulado = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prova = searchParams.get('prova');
  const simuladoKey = searchParams.get('simulado');

  // Estados do timer
  const [tempoRestante, setTempoRestante] = useState(null);
  const [tempoInicial, setTempoInicial] = useState(null);
  const [timerAtivo, setTimerAtivo] = useState(false);
  const [modo, setModo] = useState(null);
  const [mostrarAvisoTempo, setMostrarAvisoTempo] = useState(false);
  const [mensagemAviso, setMensagemAviso] = useState('');

  // Verifica se os parâmetros necessários estão presentes
  useEffect(() => {
    if (!prova || !simuladoKey) {
      navigate('/simulados');
    }
  }, [prova, simuladoKey, navigate]);

  // Exemplo de dados estáticos - em um sistema real, isso viria de uma API
  const questoes = simulados[simuladoKey];
  const [respostas, setRespostas] = useState({});
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [questoesRespondidas, setQuestoesRespondidas] = useState(new Set());
  const [questoesPuladas, setQuestoesPuladas] = useState(new Set());
  const [menuAberto, setMenuAberto] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [dialogReiniciarAberto, setDialogReiniciarAberto] = useState(false);
  const [dialogFinalizarAberto, setDialogFinalizarAberto] = useState(false);
  const [questoesExpandidas, setQuestoesExpandidas] = useState({
    corretas: false,
    incorretas: false,
    naoRespondidas: false
  });
  const [questaoDetalhe, setQuestaoDetalhe] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [historicoResultados, setHistoricoResultados] = useState(() => {
    const salvo = localStorage.getItem('historicoResultados');
    return salvo ? JSON.parse(salvo) : [];
  });
  const [simuladoEscolhido, setSimuladoEscolhido] = useState(null);

  const handleIniciarSimulado = (modoSelecionado) => {
    setModo(modoSelecionado);
    setRespostas({});
    setQuestaoAtual(0);
    setMostrarFeedback(false);
    setQuestoesRespondidas(new Set());
    setQuestoesPuladas(new Set());
  };

  const handleResposta = (questaoId, opcao) => {
    setRespostas(prev => ({
      ...prev,
      [questaoId]: opcao
    }));
    
    if (!questoesRespondidas.has(questaoId)) {
      setQuestoesRespondidas(prev => new Set([...prev, questaoId]));
      setQuestoesPuladas(prev => new Set([...prev].filter(id => id !== questaoId)));
    }
    
    if (modo === 'estudo') {
      setMostrarFeedback(true);
    }
  };

  const proximaQuestao = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setMostrarFeedback(false);
      if (!questoesRespondidas.has(questoes[questaoAtual].id)) {
        setQuestoesPuladas(new Set([...questoesPuladas, questoes[questaoAtual].id]));
      }
    }
  };

  const questaoAnterior = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(questaoAtual - 1);
      setMostrarFeedback(false);
      if (!questoesRespondidas.has(questoes[questaoAtual].id)) {
        setQuestoesPuladas(new Set([...questoesPuladas, questoes[questaoAtual].id]));
      }
    }
  };

  const pularQuestao = () => {
    if (!questoesRespondidas.has(questoes[questaoAtual].id)) {
      setQuestoesPuladas(new Set([...questoesPuladas, questoes[questaoAtual].id]));
    }
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setMostrarFeedback(false);
    }
  };

  const questao = questoes[questaoAtual];
  const respostaAtual = respostas[questao.id];
  const acertou = questao.pergunta.includes("(Escolha dois.)") 
    ? Array.isArray(respostaAtual) && 
      respostaAtual.length === questao.respostaCorreta.length && 
      respostaAtual.every(r => questao.respostaCorreta.includes(parseInt(r)))
    : respostaAtual === questao.respostaCorreta.toString();
  const questaoJaRespondida = questoesRespondidas.has(questao.id);

  const calcularResultado = () => {
    const totalQuestoes = questoes.length;
    const respondidas = questoesRespondidas.size;
    const corretas = questoes.filter(q => 
      questoesRespondidas.has(q.id) && 
      respostas[q.id] === q.respostaCorreta.toString()
    ).length;
    const incorretas = respondidas - corretas;
    const puladas = questoesPuladas.size;
    const naoRespondidas = totalQuestoes - respondidas - puladas;
    const percentualAcertos = (corretas / totalQuestoes) * 100;
    const aprovado = percentualAcertos >= 70;

    // Organizar questões por status
    const questoesCorretas = questoes.filter(q => 
      questoesRespondidas.has(q.id) && 
      respostas[q.id] === q.respostaCorreta.toString()
    );

    const questoesIncorretas = questoes.filter(q => 
      questoesRespondidas.has(q.id) && 
      respostas[q.id] !== q.respostaCorreta.toString()
    );

    const questoesNaoRespondidas = questoes.filter(q => 
      !questoesRespondidas.has(q.id) && 
      !questoesPuladas.has(q.id)
    );

    return {
      totalQuestoes,
      respondidas,
      corretas,
      incorretas,
      puladas,
      naoRespondidas,
      percentualAcertos,
      aprovado,
      questoesCorretas,
      questoesIncorretas,
      questoesNaoRespondidas
    };
  };

  const handleFinalizar = () => {
    setResultado(calcularResultado());
    setModo(null);
  };

  const handleReiniciar = () => {
    setRespostas({});
    setQuestaoAtual(0);
    setMostrarFeedback(false);
    setQuestoesRespondidas(new Set());
    setQuestoesPuladas(new Set());
  };

  const handleReiniciarConfirmado = () => {
    const resultadoAtual = calcularResultado();
    setResultado(resultadoAtual);
    setDialogReiniciarAberto(false);
    salvarNoHistorico({
      percentualAcertos: resultadoAtual.percentualAcertos,
      data: new Date().toLocaleString(),
      aprovado: resultadoAtual.aprovado
    });
  };

  const handleFinalizarConfirmado = () => {
    const resultadoAtual = calcularResultado();
    setResultado(resultadoAtual);
    setDialogFinalizarAberto(false);
    salvarNoHistorico({
      percentualAcertos: resultadoAtual.percentualAcertos,
      data: new Date().toLocaleString(),
      aprovado: resultadoAtual.aprovado
    });
  };

  const toggleQuestoes = (tipo) => {
    setQuestoesExpandidas(prev => {
      // Fecha todas as seções
      const novoEstado = {
        corretas: false,
        incorretas: false,
        naoRespondidas: false
      };
      
      // Se a seção clicada já estava aberta, apenas fecha
      // Se estava fechada, abre apenas ela
      if (!prev[tipo]) {
        novoEstado[tipo] = true;
      }
      
      return novoEstado;
    });
  };

  const abrirDetalhesQuestao = (questao) => {
    setQuestaoDetalhe(questao);
    setModalAberto(true);
  };

  // Função para salvar resultado no histórico
  const salvarNoHistorico = (resultado) => {
    let novoHistorico = [...historicoResultados, resultado];
    if (novoHistorico.length > 5) {
      // Zera o histórico e começa do zero
      novoHistorico = [resultado];
    }
    setHistoricoResultados(novoHistorico);
    localStorage.setItem('historicoResultados', JSON.stringify(novoHistorico));
  };

  // Efeito para detectar navegação
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (modo) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    const handleNavigation = (e) => {
      if (modo) {
        const target = e.target.closest('a');
        if (target) {
          const href = target.getAttribute('href');
          if (href && (
            href.includes('/home') || 
            href.includes('/simulados') || 
            href.includes('/questoes') ||
            href === '/' ||
            href === '/simulados' ||
            href === '/questoes'
          )) {
            e.preventDefault();
            handleFinalizar();
          }
        }
      }
    };

    // Adiciona o listener no document para capturar todos os cliques
    document.addEventListener('click', handleNavigation, true);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('click', handleNavigation, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [modo]);

  // Configura o timer baseado no modo
  useEffect(() => {
    if (modo) {
      const tempoTotal = modo === 'exame' ? 65 * 60 : 90 * 60; // 65 minutos para exame, 90 para estudo
      setTempoInicial(tempoTotal);
      setTempoRestante(tempoTotal);
      setTimerAtivo(true);
    }
  }, [modo]);

  // Atualiza o timer a cada segundo e verifica avisos
  useEffect(() => {
    let interval;
    if (timerAtivo && tempoRestante > 0) {
      interval = setInterval(() => {
        setTempoRestante(prev => {
          const novoTempo = prev - 1;
          
          // Verifica avisos de tempo
          if (novoTempo === 5 * 60) {
            setMensagemAviso('Faltam 5 minutos para o término da prova!');
            setMostrarAvisoTempo(true);
            setTimeout(() => setMostrarAvisoTempo(false), 5000);
          } else if (novoTempo === 2 * 60) {
            setMensagemAviso('Faltam 2 minutos para o término da prova!');
            setMostrarAvisoTempo(true);
            setTimeout(() => setMostrarAvisoTempo(false), 5000);
          } else if (novoTempo === 60) {
            setMensagemAviso('Falta 1 minuto para o término da prova!');
            setMostrarAvisoTempo(true);
            setTimeout(() => setMostrarAvisoTempo(false), 5000);
          } else if (novoTempo === 30) {
            setMensagemAviso('A prova será finalizada automaticamente em 30 segundos!');
            setMostrarAvisoTempo(true);
            setTimeout(() => setMostrarAvisoTempo(false), 5000);
          }
          
          if (novoTempo <= 0) {
            setTimerAtivo(false);
            setMensagemAviso('Tempo esgotado! A prova será finalizada automaticamente.');
            setMostrarAvisoTempo(true);
            setTimeout(() => {
              setMostrarAvisoTempo(false);
              handleFinalizar();
            }, 3000);
            return 0;
          }
          return novoTempo;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerAtivo, tempoRestante]);

  // Formata o tempo para exibição
  const formatarTempo = (segundos) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    return `${horas > 0 ? `${horas}:` : ''}${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  // Calcula a porcentagem do tempo restante
  const porcentagemTempo = tempoRestante && tempoInicial ? (tempoRestante / tempoInicial) * 100 : 100;

  if (!simuladoEscolhido) {
    return <EscolhaSimulado onEscolherSimulado={setSimuladoEscolhido} />;
  }

  if (!modo) {
    return <TelaInicial onIniciarSimulado={handleIniciarSimulado} />;
  }

  if (resultado) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Resultado do Simulado
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <Alert 
              severity={resultado.aprovado ? "success" : "error"} 
              sx={{ mb: 3 }}
            >
              <Typography variant="h6">
                {resultado.aprovado ? "Parabéns! Você foi aprovado!" : "Infelizmente você foi reprovado."}
              </Typography>
              <Typography>
                Percentual de Acertos: {resultado.percentualAcertos.toFixed(1)}%
                {resultado.aprovado ? " (Mínimo necessário: 70%)" : " (Mínimo necessário: 70%)"}
              </Typography>
            </Alert>

            <Typography variant="h6" gutterBottom>
              Estatísticas:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Total de Questões: {resultado.totalQuestoes}</Typography>
                <Typography>Questões Respondidas: {resultado.respondidas}</Typography>
                <Typography>Questões Corretas: {resultado.corretas}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Questões Incorretas: {resultado.incorretas}</Typography>
                <Typography>Questões Puladas: {resultado.puladas}</Typography>
                <Typography>Questões Não Respondidas: {resultado.naoRespondidas}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              mb: 3
            }}>
              <Button
                variant="contained"
                color="success"
                onClick={() => toggleQuestoes('corretas')}
                sx={{ 
                  minWidth: '200px',
                  whiteSpace: 'nowrap'
                }}
              >
                Corretas ({resultado.questoesCorretas.length})
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => toggleQuestoes('incorretas')}
                sx={{ 
                  minWidth: '200px',
                  whiteSpace: 'nowrap'
                }}
              >
                Incorretas ({resultado.questoesIncorretas.length})
              </Button>

              <Button
                variant="contained"
                color="warning"
                onClick={() => toggleQuestoes('naoRespondidas')}
                sx={{ 
                  minWidth: '200px',
                  whiteSpace: 'nowrap'
                }}
              >
                Não Respondidas ({resultado.questoesNaoRespondidas.length})
              </Button>
            </Box>

            {questoesExpandidas.corretas && (
              <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <List>
                  {resultado.questoesCorretas.map((questao, index) => (
                    <ListItem 
                      key={questao.id}
                      button
                      onClick={() => abrirDetalhesQuestao(questao)}
                    >
                      <ListItemText 
                        primary={`Questão ${questoes.findIndex(q => q.id === questao.id) + 1}`}
                        secondary={questao.pergunta}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}

            {questoesExpandidas.incorretas && (
              <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <List>
                  {resultado.questoesIncorretas.map((questao, index) => (
                    <ListItem 
                      key={questao.id}
                      button
                      onClick={() => abrirDetalhesQuestao(questao)}
                    >
                      <ListItemText 
                        primary={`Questão ${questoes.findIndex(q => q.id === questao.id) + 1}`}
                        secondary={questao.pergunta}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}

            {questoesExpandidas.naoRespondidas && (
              <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <List>
                  {resultado.questoesNaoRespondidas.map((questao, index) => (
                    <ListItem 
                      key={questao.id}
                      button
                      onClick={() => abrirDetalhesQuestao(questao)}
                    >
                      <ListItemText 
                        primary={`Questão ${questoes.findIndex(q => q.id === questao.id) + 1}`}
                        secondary={questao.pergunta}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              onClick={() => {
                setRespostas({});
                setQuestaoAtual(0);
                setMostrarFeedback(false);
                setQuestoesRespondidas(new Set());
                setQuestoesPuladas(new Set());
                setResultado(null);
                setQuestoesExpandidas({
                  corretas: false,
                  incorretas: false,
                  naoRespondidas: false
                });
              }}
            >
              Iniciar Novo Simulado
            </Button>
            <Button 
              variant="outlined" 
              onClick={() => setModo(null)}
            >
              Voltar à Seleção
            </Button>
          </Box>
        </Paper>

        <Dialog
          open={modalAberto}
          onClose={() => setModalAberto(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            Detalhes da Questão
          </DialogTitle>
          <DialogContent>
            {questaoDetalhe && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {questaoDetalhe.pergunta}
                </Typography>

                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Opções:
                </Typography>
                {questaoDetalhe.opcoes.map((opcao, index) => {
                  const isCorreta = index.toString() === questaoDetalhe.respostaCorreta.toString();
                  const isSelecionada = respostas[questaoDetalhe.id] === index.toString();
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 1.5,
                        mb: 1.5,
                        borderRadius: 2,
                        backgroundColor: isCorreta
                          ? 'success.light'
                          : isSelecionada
                            ? 'error.light'
                            : 'background.paper',
                        border: isCorreta
                          ? '2px solid #2e7d32'
                          : isSelecionada
                            ? '2px solid #d32f2f'
                            : '1px solid',
                        borderColor: isCorreta
                          ? 'success.main'
                          : isSelecionada
                            ? 'error.main'
                            : 'divider',
                        boxShadow: isCorreta || isSelecionada ? 2 : 0
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          minWidth: 28,
                          display: 'inline-block',
                          color: isCorreta ? 'success.main' : isSelecionada ? 'error.main' : 'text.secondary',
                        }}
                      >
                        {String.fromCharCode(65 + index)}.
                      </Typography>
                      <Typography sx={{ flex: 1 }}>{opcao}</Typography>
                      {isCorreta && (
                        <Chip label="Correta" color="success" size="small" sx={{ ml: 1 }} />
                      )}
                      {isSelecionada && !isCorreta && (
                        <Chip label="Sua escolha" color="error" size="small" sx={{ ml: 1 }} />
                      )}
                    </Box>
                  );
                })}

                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Explicação:
                </Typography>
                <Typography paragraph>
                  {questaoDetalhe.explicacao}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Explicação das Alternativas:
                  </Typography>
                  {Object.entries(questaoDetalhe.explicacoesOpcoes).map(([opcaoId, explicacao]) => (
                    <Box
                      key={opcaoId}
                      sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 'bold',
                          color: 'primary.main',
                          minWidth: 40
                        }}
                      >
                        {String.fromCharCode(65 + parseInt(opcaoId))}:
                      </Typography>
                      <Typography variant="body1" sx={{ flex: 1 }}>
                        {explicacao}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setModalAberto(false)}>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuAberto(!menuAberto)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Simulado
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
            <AccessTimeIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
              {formatarTempo(tempoRestante)}
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            color="error"
            onClick={handleFinalizar}
            startIcon={<TimerIcon />}
          >
            Finalizar Prova
          </Button>
        </Toolbar>
        <LinearProgress 
          variant="determinate" 
          value={porcentagemTempo} 
          sx={{ 
            height: 4,
            backgroundColor: 'background.paper',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'primary.main',
              transition: 'transform 1s linear'
            }
          }} 
        />
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, mt: 8 }}>
        <MenuQuestoes
          questoes={questoes}
          questaoAtual={questaoAtual}
          onQuestaoClick={setQuestaoAtual}
          respostas={respostas}
          questoesRespondidas={questoesRespondidas}
          questoesPuladas={questoesPuladas}
          modo={modo}
          menuAberto={menuAberto}
          setMenuAberto={setMenuAberto}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: menuAberto ? '240px' : 0,
            transition: 'margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            width: '100%'
          }}
        >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                variant="outlined"
                onClick={() => setMenuAberto(!menuAberto)}
                startIcon={menuAberto ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                sx={{ minWidth: 150 }}
              >
                {menuAberto ? 'Esconder Menu' : 'Mostrar Menu'}
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip 
                  label={`Modo: ${modo === 'estudo' ? 'Estudo' : 'Exame'}`}
                  color={modo === 'estudo' ? 'primary' : 'secondary'}
                  sx={{ fontWeight: 600 }}
                />
                {questaoJaRespondida && modo === 'estudo' && (
                  <Chip 
                    label={acertou ? "Correta" : "Incorreta"} 
                    color={acertou ? "success" : "error"}
                    sx={{ fontWeight: 600 }}
                  />
                )}
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Questão {questaoAtual + 1} de {questoes.length}
              </Typography>
              
              <Typography variant="h6" sx={{ mt: 2, mb: 3, fontWeight: 500 }}>
                {questao.pergunta}
              </Typography>

              <FormControl component="fieldset" sx={{ width: '100%' }}>
                {questao.pergunta.includes("(Escolha dois.)") ? (
                  <FormGroup>
                    {questao.opcoes.map((opcao, index) => {
                      const isSelected = respostaAtual?.includes(index.toString());
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? 'success.light' : !acertou && questaoJaRespondida ? 'error.light' : 'primary.light')
                                  : 'primary.light')
                              : 'background.paper',
                            border: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? '2px solid #10b981' : !acertou && questaoJaRespondida ? '2px solid #ef4444' : '2px solid #2563eb')
                                  : '2px solid #2563eb')
                              : '1px solid',
                            borderColor: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? 'success.main' : !acertou && questaoJaRespondida ? 'error.main' : 'primary.main')
                                  : 'primary.main')
                              : 'divider',
                            boxShadow: isSelected ? 2 : 0,
                            transition: 'all 0.2s',
                            '&:hover': {
                              backgroundColor: isSelected ? undefined : 'action.hover',
                            }
                          }}
                        >
                          <FormControlLabel
                            value={index.toString()}
                            control={<Checkbox 
                              checked={isSelected}
                              onChange={(e) => {
                                const newValue = e.target.checked;
                                const currentRespostas = respostaAtual ? [...respostaAtual] : [];
                                if (newValue) {
                                  if (currentRespostas.length < 2) {
                                    currentRespostas.push(index.toString());
                                  }
                                } else {
                                  const idx = currentRespostas.indexOf(index.toString());
                                  if (idx > -1) {
                                    currentRespostas.splice(idx, 1);
                                  }
                                }
                                handleResposta(questao.id, currentRespostas);
                              }}
                            />}
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{
                                  fontWeight: 'bold',
                                  minWidth: 28,
                                  color: isSelected && questaoJaRespondida && modo === 'estudo'
                                    ? (acertou ? 'success.main' : 'error.main')
                                    : isSelected && modo === 'exame'
                                      ? 'primary.main'
                                      : 'text.secondary',
                                  transition: 'color 0.2s',
                                }}>
                                  {String.fromCharCode(65 + index)}.
                                </Typography>
                                <Typography sx={{
                                  color: isSelected && questaoJaRespondida && !acertou && modo === 'estudo'
                                    ? 'error.main'
                                    : isSelected && modo === 'exame'
                                      ? 'primary.main'
                                      : 'text.primary',
                                  transition: 'color 0.2s',
                                }}>{opcao}</Typography>
                              </Box>
                            }
                            sx={{ flex: 1, m: 0 }}
                          />
                        </Box>
                      );
                    })}
                  </FormGroup>
                ) : (
                  <RadioGroup
                    value={respostaAtual || ''}
                    onChange={(e) => handleResposta(questao.id, e.target.value)}
                  >
                    {questao.opcoes.map((opcao, index) => {
                      const isSelected = respostaAtual === index.toString();
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? 'success.light' : !acertou && questaoJaRespondida ? 'error.light' : 'primary.light')
                                  : 'primary.light')
                              : 'background.paper',
                            border: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? '2px solid #10b981' : !acertou && questaoJaRespondida ? '2px solid #ef4444' : '2px solid #2563eb')
                                  : '2px solid #2563eb')
                              : '1px solid',
                            borderColor: isSelected
                              ? (modo === 'estudo'
                                  ? (acertou && questaoJaRespondida ? 'success.main' : !acertou && questaoJaRespondida ? 'error.main' : 'primary.main')
                                  : 'primary.main')
                              : 'divider',
                            boxShadow: isSelected ? 2 : 0,
                            transition: 'all 0.2s',
                            '&:hover': {
                              backgroundColor: isSelected ? undefined : 'action.hover',
                            }
                          }}
                        >
                          <FormControlLabel
                            value={index.toString()}
                            control={<Radio />}
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{
                                  fontWeight: 'bold',
                                  minWidth: 28,
                                  color: isSelected && questaoJaRespondida && modo === 'estudo'
                                    ? (acertou ? 'success.main' : 'error.main')
                                    : isSelected && modo === 'exame'
                                      ? 'primary.main'
                                      : 'text.secondary',
                                  transition: 'color 0.2s',
                                }}>
                                  {String.fromCharCode(65 + index)}.
                                </Typography>
                                <Typography sx={{
                                  color: isSelected && questaoJaRespondida && !acertou && modo === 'estudo'
                                    ? 'error.main'
                                    : isSelected && modo === 'exame'
                                      ? 'primary.main'
                                      : 'text.primary',
                                  transition: 'color 0.2s',
                                }}>{opcao}</Typography>
                              </Box>
                            }
                            sx={{ flex: 1, m: 0 }}
                          />
                        </Box>
                      );
                    })}
                  </RadioGroup>
                )}
              </FormControl>

              {modo === 'estudo' && (mostrarFeedback || questaoJaRespondida) && respostaAtual && (
                <Box sx={{ mt: 4 }}>
                  <Divider sx={{ my: 2 }} />
                  {acertou ? (
                    <Alert severity="success" sx={{ mb: 2, fontWeight: 600 }}>
                      <b>Resposta correta!</b> {questao.explicacao}
                    </Alert>
                  ) : (
                    <Alert severity="error" sx={{ mb: 2, fontWeight: 600 }}>
                      <b>Resposta incorreta.</b> A resposta correta é: <b>{questao.opcoes[questao.respostaCorreta]}</b>
                      <br />
                      {questao.explicacao}
                    </Alert>
                  )}
                  <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 600 }}>
                    Explicação das alternativas:
                  </Typography>
                  {Object.entries(questao.explicacoesOpcoes).map(([opcao, explicacao]) => (
                    <Box key={opcao} sx={{ 
                      mb: 2, 
                      p: 2, 
                      borderRadius: 1, 
                      backgroundColor: 'background.paper', 
                      border: '1px solid', 
                      borderColor: 'divider', 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 2 
                    }}>
                      <Typography variant="subtitle1" sx={{ 
                        fontWeight: 'bold', 
                        color: 'primary.main', 
                        minWidth: 40 
                      }}>
                        {String.fromCharCode(65 + parseInt(opcao))}:
                      </Typography>
                      <Typography variant="body1" sx={{ flex: 1 }}>
                        {explicacao}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                variant="outlined"
                onClick={questaoAnterior}
                disabled={questaoAtual === 0}
                startIcon={<ChevronLeftIcon />}
                sx={{ minWidth: 120 }}
              >
                Anterior
              </Button>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={pularQuestao}
                  disabled={questaoAtual === questoes.length - 1 || questoesRespondidas.has(questao.id)}
                  sx={{ minWidth: 120 }}
                >
                  Pular
                </Button>
                <Button
                  variant="contained"
                  onClick={proximaQuestao}
                  disabled={questaoAtual === questoes.length - 1 || !respostaAtual}
                  endIcon={<ChevronRightIcon />}
                  sx={{ minWidth: 120 }}
                >
                  Próxima
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Aviso de tempo */}
      {mostrarAvisoTempo && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1300,
            animation: 'slideUp 0.5s ease-out'
          }}
        >
          <Alert 
            severity="warning" 
            sx={{ 
              minWidth: 300,
              boxShadow: 3,
              '& .MuiAlert-icon': {
                fontSize: 28
              }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {mensagemAviso}
            </Typography>
          </Alert>
        </Box>
      )}

      <Dialog
        open={dialogReiniciarAberto}
        onClose={() => setDialogReiniciarAberto(false)}
      >
        <DialogTitle>
          Reiniciar Prova
        </DialogTitle>
        <DialogContent>
          <Typography>
            Ao reiniciar a prova, todo o seu progresso será perdido.
            Deseja realmente reiniciar?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogReiniciarAberto(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleReiniciarConfirmado}
            color="primary"
            variant="contained"
          >
            Reiniciar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={dialogFinalizarAberto}
        onClose={() => setDialogFinalizarAberto(false)}
      >
        <DialogTitle>
          Finalizar Prova
        </DialogTitle>
        <DialogContent>
          <Typography>
            Ao finalizar a prova, seu progresso será salvo e você verá o resultado.
            Deseja realmente finalizar?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogFinalizarAberto(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleFinalizarConfirmado}
            color="error"
            variant="contained"
          >
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Simulado; 