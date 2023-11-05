import React,{ useRef } from 'react'
import '../css/invoiceToPrint.css'
import { Button } from '@mui/material'
import ReactToPrint from "react-to-print";
import Box from "@mui/material/Box";
import Dashboard from './Dashboard'

function InvoiceToPrint() {
  const componentRef = useRef()
  return (
    <Box sx={{ display: 'flex' }}>
    <Dashboard />
    <Box 
    sx={{
      width: 1000
    }}
    >
    <div className="body" ref={componentRef}>
    <div className="invoice">
        <div className="invoice-header">
            <div className="logo">Your Company</div>
            <div className="invoice-number">
                Invoice Id: {}12345<br></br>
                Date: {}2023-09-24
            </div>
        </div>
        <div className="invoice-details">
            <p>Bill To:</p>
            <p>Customer Name: {}John Doe</p>
            <p>Address: {}123 Main St</p>
            <p>Phone: {}7350400223</p>
            <p>Email: {}john@example.com</p>
        </div>
        <table className="invoice-table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{}Product 1</td>
                    <td>{}2</td>
                    <td>{}$50.00</td>
                    <td>{}$100.00</td>
                </tr>
            </tbody>
        </table>
        <div className="invoice-total">
            <p>Total Amount: {}$190.00</p>
        </div>
        <div className="invoice-footer">
            <p>Thank you for your business!</p>
        </div>
        <ReactToPrint
       trigger={() =>  <Button>print</Button>}
      content={() => componentRef.current}
     /> 
    </div>
   
    </div>
   
    </Box>
    </Box>
   
  )
}

export default InvoiceToPrint