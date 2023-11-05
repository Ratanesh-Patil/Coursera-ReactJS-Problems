import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DownloadIcon from '@mui/icons-material/Download';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import InvoiceServices from '../services/InvoiceServices';
import CustomerServices from '../services/CustomerServices';

function Invoices() {

      

    const [invoices, setInvoices] = useState([])
    const [customer, setCustomer] = useState({})

    const id = invoices.custId
    useEffect(() => {
      getAllInvoices();
      getAllCustomer();
  }, [])

  // useEffect(()=>{
    
  // },[])
    
  const getAllCustomer = () => {
    CustomerServices.getCustomerByid(id).then(response=>{
      console.log(response.data)
    }).catch(err=>{
        console.log(err)
    })
  }

    const getAllInvoices = () => {
    InvoiceServices.getAllInvoices().then((response) => {
      setInvoices(response.data)
          // console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handlePrint=()=>{
    window.print()
  }


  return (
   
    <div>
    <TableContainer component={Paper}>
         <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Payment Invoices
          </Typography>
          <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
           <Link to="/invoice-form"><Button variant="contained" endIcon={<AddCircleIcon />} >
              Add Invoice
            </Button></Link> 
            </Stack>
            <Box height={10} />
          <Divider />
      <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Invoice Id </TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Total Amount</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invocies) => (
            <TableRow
              key={invocies.invoiceId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{invocies.invoiceId}</TableCell>
              <TableCell align="center">{}</TableCell>
              <TableCell align="center">{invocies.createdOn}</TableCell>
              <TableCell align="center">{invocies.total}</TableCell>
              <TableCell align="center">{invocies.status}</TableCell>
              <TableCell align="left">
                          <Stack spacing={2} direction="row">
                           <Link to={`/edit-invoice/${invocies.customerId}`} ><EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              
                            /></Link>
                            <Link to={'/invoice-print'} ><DownloadIcon
                                  style={{
                                  fontSize: "20px",
                                  color: "darkred",
                                  cursor: "pointer",
                                  }}
                                  // onClick = {() => handlePrint()}
                              /></Link>
                            
                            {/* <InvoiceToPrint ref={el => (this.componentRef = el)} /> */}
                           
                          </Stack>
                        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}

export default Invoices