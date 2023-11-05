import React from 'react'
import Customers from './Customers'
import Dashboard from './Dashboard'
import { Box } from '@mui/material'

function CustomerList() {
  return (
    <div> 
      <Box sx={{ display: 'flex' }}>
    <Dashboard />
    <Box>
   <Customers />
    </Box>
    
    </Box>
    </div>
  )
}

export default CustomerList