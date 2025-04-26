import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none',
          color: 'inherit',
          fontWeight: 700
        }}>
          Simulados AWS
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/simulados"
            sx={{ 
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            Simulados
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/questoes"
            sx={{ 
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            Questões
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/login"
            sx={{ 
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            Login
          </Button>
          <IconButton 
            onClick={toggleTheme} 
            color="inherit"
            sx={{
              ml: 2,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 