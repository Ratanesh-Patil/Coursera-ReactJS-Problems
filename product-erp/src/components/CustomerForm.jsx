import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';

import CustomerServices from '../services/CustomerServices';

function CustomerForm() {
  const [customer, setcustomer] = useState({
    customerName:"",
    customerAddress:"",
    customerEmail:"",
    customerMobile:"",
  })
  const {id}=useParams();
  let navigate = useNavigate();

  const onHandleChange =(event)=>{
    setcustomer(() => ({
      ...customer,
      [event.target.name]: event.target.value
    }))
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if(id){
      CustomerServices.updateCustomer(id, customer).then((response) => {
        navigate("/customer-list")
        }).catch(error => {
            console.log(error)
        })

    }else{
      CustomerServices.createCustomer(customer).then(response=>{
        console.log(response.data)
        navigate("/customer-list")
      }).catch(error => {
            console.log(error)
        })
    }
}

useEffect(()=>{
  CustomerServices.getCustomerByid(id).then(response=>{
    setcustomer(response.data)
  }).catch(err=>{
      console.log(err)
  })
},[])

  return (
    <div><FormControl>
    <Box sx={{ display: 'flex' }}>
    <Dashboard />
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        
        label="Customer Name"
        type="text"
        name='customerName'
        onChange={onHandleChange}
        value={customer.customerName}

      />
       <TextField
        
        label="Customer Address"
        type="text"
        name='customerAddress'
        onChange={onHandleChange}
        value={customer.customerAddress}

      />
       <TextField
         
         label="Email"
         type="email"
         name='customerEmail'
         onChange={onHandleChange}
         value={customer.customerEmail}
       />
        <TextField
         
         label="Mobile"
         type="text"
         name='customerMobile'
         onChange={onHandleChange}
         value={customer.customerMobile}
       />
      
      
      <Stack width={20}>
    <Button onClick = {(e) => onHandleSubmit(e)} variant="outlined">Submit</Button>
    </Stack>
    </Box>
    </Box>
    </FormControl></div>
  )
}

export default CustomerForm