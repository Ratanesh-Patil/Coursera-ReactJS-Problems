import React from 'react'
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';

function Home() {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
        <Dashboard />
        <h1>Home</h1>
        </Box>
        
    </div>
  )
}

export default Home