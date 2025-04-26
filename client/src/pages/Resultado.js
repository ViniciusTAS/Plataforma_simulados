import { Container, Box, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useThemeContext } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Resultado = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resultado do Simulado
          </Typography>
          <IconButton 
            onClick={toggleTheme} 
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ 
          bgcolor: theme.palette.background.paper,
          p: 3,
          borderRadius: 2,
          boxShadow: 3
        }}>
          {/* ... existing code ... */}
        </Box>
      </Container>
    </Box>
  );
};

export default Resultado; 