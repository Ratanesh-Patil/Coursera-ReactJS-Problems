import React from 'react'
import { useState,useEffect } from 'react';
// import { useNavigate ,useParams} from 'react-router-dom';
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import ProductServices from '../services/ProductServices';
import CustomerServices from '../services/CustomerServices';
import InvoiceServices from '../services/InvoiceServices'


function InvoiceForm() {
   
      const [prod, setProd] = useState([])
      const [cust, setCust] = useState([])
      //
      const [prodId,setProdId] = useState("")
      const [selectprod, setselectprod] = useState([])
      //
      const [custId,setCustId] = useState("")
      const [selectcust, setselectcust] = useState([])
      // 
      const [createdOn, setCreatedOn] = useState("")
      const [status, setStatus] = useState("")
      const [productQuantity, setProductQuantity] = useState("")
      const [price, setPrice] = useState("")
      const [total, setTotal] = useState("")
    
     
      const invoice ={custId,prodId,createdOn,status,productQuantity,price,total}

      useEffect(() => {
       getAllProducts()
       getAllCustomers()
      }, [])
      useEffect(()=>{
        ProductServices.getProductByid(prodId).then(response=>{
          setselectprod(response.data)
        }).catch(err=>{
            console.log(err)
        })
      },[prodId])
      useEffect(()=>{
        CustomerServices.getCustomerByid(custId).then(response=>{
          setselectcust(response.data)
        }).catch(err=>{
            console.log(err)
        })
      },[custId])
      
      const getAllCustomers = () => { 
         CustomerServices.getAllCustomer().then((response) => {
        setCust(response.data)
            // console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
      }
      const getAllProducts = () => { 
         ProductServices.getAllProducts().then((response) => {
        setProd(response.data)
            // console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
      }

    //   const onHandlecustomer= (event) => {
    //     const getcustomerId = event.target.value
    //     // console.log(getcustomerId)
    //     setCustomerId(getcustomerId)
    //   }
    // const onHandleproduct = (event) => {
    //   const getProductId = event.target.value
    //   // console.log(getProductId)
    //   setProductId(getProductId)
     
    // }
    
  const onHandleSubmit = (e) => {
    e.preventDefault()
      console.log(invoice)
      InvoiceServices.createInvoice(invoice).then(response=>{
        console.log(response.data)
        // navigate("")
      }).catch(error => {
            console.log(error)
        })
  }
  return (
    <div>
     
       <FormControl>
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
        select
        label="Customer Name"
        name='customerName'
        onChange={(e)=>setCustId(e.target.value)}
        // onChange={(e)=>onHandleChange(e)}
        // value={product.unitOfMeasure}
      >
        {cust.map((cust) => (
            <MenuItem key={cust.customerId} value={cust.customerId}>{cust.customerName}</MenuItem>
          ))}
       </TextField>
        
        <TextField
        
        label="Customer Address"
        type="text"
        name='customerAddress'
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        value={selectcust.customerAddress}

      />
        <TextField
         
         label="Email"
         type="email"
         name='customerEmail'
         InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
         value={selectcust.customerEmail}
       />
          <TextField
          label="Date"
          type="date"
          name="createdOn"
          InputLabelProps={{
            shrink: true,
          }}
          onChange = {(e) => setCreatedOn(e.target.value)}
          value={createdOn}
        />
        <TextField
        
        select
        label="Status"
        defaultValue="Select Category"
        name="status"
        onChange = {(e) => setStatus(e.target.value)}
        // value={product.productCategory}
      >
        <MenuItem  value="Pending">Pending</MenuItem>
        <MenuItem  value="Sent">Sent</MenuItem>
      </TextField>
      <Divider />
      <TextField
        select
        label="Product Name"
        name='productName'
        onChange={(e)=>setProdId(e.target.value)}
       
      >
         {prod.map((prod) => (
            <MenuItem key={prod.productId}  value={prod.productId}>{prod.productName}</MenuItem>
          ))}
       </TextField>
       <TextField
        
        label="Unit Of Measure"
        type="text"
        name='unitOfMeasure'
        InputProps={{
          readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          // onChange={onHandleChange}
          value={selectprod.unitOfMeasure}
/>
        <TextField

          label="Price"
          type="text"
          name='price'
          // InputProps={{
          //   readOnly: true,
          //   }}
          InputLabelProps={{
              shrink: true,
            }}
          value={selectprod.sellingPrice}
          onChange = {(e) =>{ 
            const pi=e.target.value 
            setPrice(pi)
            
          }}
        />
         <TextField

          label="Quantity"
          type="Number"
          name='productQuantity'
          onChange = {(e) =>setProductQuantity(e.target.value)}
          value={productQuantity}
          
        />
         
        <TextField
         
          label="Total"
          type="text"
          name='total'
          onChange = {(e) => setTotal(e.target.value)}
          value={parseInt(price)*parseInt(productQuantity)}
        />
      
      <Stack width={20}>
    <Button onClick = {(e) => onHandleSubmit(e)} variant="outlined">Submit</Button>
    </Stack>
    </Box>
    </Box>
    </FormControl>
    </div>
  )
}

export default InvoiceForm