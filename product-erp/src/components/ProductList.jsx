import React from 'react'
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import Products from './Products'


function ProductList() {
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
    <Dashboard />
    <Box>
    <Products />
    </Box>
    
    </Box>
    </div>
  )
}

export default ProductList