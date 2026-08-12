import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';

const App: React.FC = () => {
  const handleGreet = () => {
    alert('Attempting to call backend API...');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FinFlow Application
          </Typography>
          <Button color="inherit" onClick={handleGreet}>
            Test API
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Welcome to FinFlow
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          A modern financial platform built with React and Spring Boot.
        </Typography>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
