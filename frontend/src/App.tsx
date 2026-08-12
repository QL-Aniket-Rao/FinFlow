import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  // Example function to fetch data from the backend
  const fetchBackendData = async () => {
    try {
      const response = await fetch('http://localhost:8080/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Failed to fetch data from backend:", error);
      return "Backend service unreachable or failed to respond.";
    }
  };

  const [backendMessage, setBackendMessage] = React.useState("Loading... Please start the backend service.");

  React.useEffect(() => {
    const loadData = async () => {
        const message = await fetchBackendData();
        setBackendMessage(message);
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FinFlow Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to FinFlow
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          This is the basic, styled landing page for the financial platform.
        </Typography>
        
        <Button variant="contained" color="primary" onClick={fetchBackendData} sx={{ mb: 3 }}>
            Test Backend Connection
        </Button>

        <Typography variant="h6" color="primary">
          Backend Status:
        </Typography>
        <Typography variant="body1" sx={{ border: '1px solid #ccc', p: 2, backgroundColor: '#f9f9f9' }}>
          {backendMessage}
        </Typography>
      </Container>
    </div>
  );
};

export default App;
