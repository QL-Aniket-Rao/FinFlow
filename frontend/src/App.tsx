import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Typography variant="h1">Hello, World!</Typography>
      <Button variant="contained">Click me</Button>
    </Box>
  )
}

export default App