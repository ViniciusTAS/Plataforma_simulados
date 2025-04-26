import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './context/ThemeContext';
import { createCustomTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Simulados from './pages/Simulados';
import Simulado from './pages/Simulado';
import Questoes from './pages/Questoes';
import Resultado from './pages/Resultado';

const App = () => {
  const { mode } = useThemeContext();
  const theme = createCustomTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulados" element={<Simulados />} />
          <Route path="/simulado/:id" element={<Simulado />} />
          <Route path="/questoes" element={<Questoes />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

export default App; 