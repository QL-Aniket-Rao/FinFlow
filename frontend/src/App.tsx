import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Frontend Portal
          </Typography>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ flexGrow: 1, mt: 4 }}>
        <Typography variant="h3" component="h1" align="center">
          Welcome to the Microservice Architecture!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          This is the basic, styled landing page built with React and Material UI.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Check Backend API
        </Button>
      </Container>
    </Box>
  );
};

export default App;
