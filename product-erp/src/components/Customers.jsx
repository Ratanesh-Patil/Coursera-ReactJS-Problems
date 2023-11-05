import React from 'react'
import CustomerServices from '../services/CustomerServices'
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
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


function Customers() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
      getAllCustomers();
  }, [])

  const getAllCustomers = () => {
    CustomerServices.getAllCustomer().then((response) => {
      setCustomers(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const deleteCustomer = (customerid) => {
    CustomerServices.deleteCustomer(customerid).then((response) =>{
      getAllCustomers();

    }).catch(error =>{
        console.log(error);
    })
     
 }



  return (
    <div> <TableContainer component={Paper}>
    <Typography
       gutterBottom
       variant="h5"
       component="div"
       sx={{ padding: "20px" }}
     >
       Customer List
     </Typography>
     <Stack direction="row" spacing={2} className="my-2 mb-2">
     <Typography
         variant="h6"
         component="div"
         sx={{ flexGrow: 1 }}
       ></Typography>
      <Link to="/add-customer"><Button variant="contained" endIcon={<AddCircleIcon />} >
         Add Cutomer
       </Button></Link> 
       </Stack>
       <Box height={10} />
     <Divider />
 <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
   <TableHead>
     <TableRow>
       <TableCell>Customer ID </TableCell>
       <TableCell align="center">Customer Name</TableCell>
       <TableCell align="center">Customer Address</TableCell>
       <TableCell align="center">Customer Email</TableCell>
       <TableCell align="center">Customer Mobile</TableCell>
       <TableCell align="left" style={{ minWidth: "100px" }}>
               Action
             </TableCell>
      
     </TableRow>
   </TableHead>
   <TableBody>
     {customers.map((customers) => (
       <TableRow
         key={customers.cutomerId}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         {/* <TableCell component="th" scope="row">
           
         </TableCell> */}
         <TableCell align="center">{customers.customerId}</TableCell>
         <TableCell align="center">{customers.customerName}</TableCell>
         <TableCell align="center">{customers.customerAddress}</TableCell>
         <TableCell align="center">{customers.customerEmail}</TableCell>
         <TableCell align="center">{customers.customerMobile}</TableCell>
         <TableCell align="left">
                     <Stack spacing={2} direction="row">
                      <Link to={`/edit-customer/${customers.customerId}`} ><EditIcon
                         style={{
                           fontSize: "20px",
                           color: "blue",
                           cursor: "pointer",
                         }}
                         className="cursor-pointer"
                         
                       /></Link> 
                       <DeleteIcon
                         style={{
                           fontSize: "20px",
                           color: "darkred",
                           cursor: "pointer",
                         }}
                         onClick = {() => deleteCustomer(customers.customerId)}
                       />
                     </Stack>
                   </TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer></div>
  )
}

export default Customers