import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Box sx={{ p: 5, border: '1px solid #ccc', borderRadius: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Project Scaffolding!
        </Typography>
        <Typography variant="h5" color="text.secondary">
          This is the React Frontend powered by Material UI.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Ready to connect to the backend API.
        </Typography>
      </Box>
    </Container>
  );
};

export default App;