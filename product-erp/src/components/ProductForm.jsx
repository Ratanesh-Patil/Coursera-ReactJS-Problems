import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import ProductServices from '../services/ProductServices';



function ProductForm() {
  const [product, setProduct] = useState({
    productName:"",
    productCategory:"",
    hsnOrsac:"",
    openingStock:"",
    costPrice:"",
    isFixed:"",
    sellingPrice:"",
    unitOfMeasure:"",
    safetyStock:"",

  })
  const {id}=useParams();
  let navigate = useNavigate();

  const onHandleChange =(event)=>{
    setProduct(() => ({
      ...product,
      [event.target.name]: event.target.value
    }))
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if(id){
      ProductServices.updateProduct(id, product).then((response) => {
        navigate("/list")
        }).catch(error => {
            console.log(error)
        })

    }else{
      ProductServices.createProduct(product).then(response=>{
        console.log(response.data)
        navigate("/list")
      }).catch(error => {
            console.log(error)
        })
    }
}

useEffect(()=>{
  ProductServices.getProductByid(id).then(response=>{
    setProduct(response.data)
  }).catch(err=>{
      console.log(err)
  })
},[])

   

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
        
          label="Product Name"
          type="text"
          name='productName'
          onChange={onHandleChange}
          value={product.productName}

        />
        <TextField
        
          select
          label="Select Category"
          defaultValue="Select Category"
          name='productCategory'
          onChange={onHandleChange}
          value={product.productCategory}
        >
          <MenuItem  value="Bike">Bike</MenuItem>
          <MenuItem  value="Car">Car</MenuItem>
          <MenuItem  value="Truck">Truck</MenuItem>
        </TextField>
       
        <TextField
         
          label="HSN/SAC"
          type="text"
          name='hsnOrsac'
          onChange={onHandleChange}
          value={product.hsnOrsac}
        />
          <TextField
          label="Opening Stock"
          type="Number"
          name='openingStock'
          onChange={onHandleChange}
          value={product.openingStock}
        />
          <TextField
          label="Cost Price"
          type="Number"
          name='costPrice'
          onChange={onHandleChange}
          value={product.costPrice}
        />
        
        
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="isfixed"
          htmlFor="isFixed"
        // value={product.isFixed}
        // onChange={handleChange}
        >
          <FormLabel id="demo-controlled-radio-buttons-group"  htmlFor="isFixed" name="isfixed"  >Is Fixed Asset</FormLabel>
          <FormControlLabel name='isFixed' value="Yes"  onChange={onHandleChange} control={<Radio />} label="Yes" />
          <FormControlLabel name='isFixed' value="No"  onChange={onHandleChange} control={<Radio />} label="No" />
        </RadioGroup>
        <TextField

          label="Selling Price"
          type="Number"
          name='sellingPrice'
          onChange={onHandleChange}
          value={product.sellingPrice}
        />
          <TextField
        
          select
          label="Select Unit of Measure"
          name='unitOfMeasure'
          onChange={onHandleChange}
          value={product.unitOfMeasure}
        >
          <MenuItem value="Peices" >Peices</MenuItem>
          <MenuItem value="Kg">Kg</MenuItem>
          <MenuItem value="Liters">Liters</MenuItem>
        </TextField>
        <TextField
         
          label="Safety Stock"
          type="Number"
          name='safetyStock'
          onChange={onHandleChange}
          value={product.safetyStock}
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

export default ProductForm