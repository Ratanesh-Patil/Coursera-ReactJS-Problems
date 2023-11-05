import React from 'react'
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';

import Invoices from './Invoices';


function PaymentInvoice() {
  return (
    <Box sx={{ display: 'flex' }}>
    <Dashboard />
    <Box>
      <Invoices />
    </Box>
    
    </Box>
  )
}

export default PaymentInvoice