import * as React from 'react';
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
import ProductServices from '../services/ProductServices';

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      getAllProducts();
  }, [])

    const getAllProducts = () => {
    ProductServices.getAllProducts().then((response) => {
      setProducts(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }

  const deleteProduct = (productid) => {
    ProductServices.deleteProduct(productid).then((response) =>{
      getAllProducts();

    }).catch(error =>{
        console.log(error);
    })
     
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
            Products List
          </Typography>
          <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
           <Link to="/add-product"><Button variant="contained" endIcon={<AddCircleIcon />} >
              Add
            </Button></Link> 
            </Stack>
            <Box height={10} />
          <Divider />
      <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">HSN/SAC</TableCell>
            <TableCell align="center">Opening Stock</TableCell>
            <TableCell align="center">Cost Price</TableCell>
            <TableCell align="center">Is Fixed Asset</TableCell>
            <TableCell align="center">Selling Price</TableCell>
            <TableCell align="center">Unit Of Measure</TableCell>
            <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((products) => (
            <TableRow
              key={products.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                
              </TableCell> */}
              <TableCell align="center">{products.productName}</TableCell>
              <TableCell align="center">{products.productCategory}</TableCell>
              <TableCell align="center">{products.hsnOrsac}</TableCell>
              <TableCell align="center">{products.openingStock}</TableCell>
              <TableCell align="center">{products.costPrice}</TableCell>
              <TableCell align="center">{products.isFixed}</TableCell>
              <TableCell align="center">{products.sellingPrice}</TableCell>
              <TableCell align="center">{products.unitOfMeasure}</TableCell>
              <TableCell align="left">
                          <Stack spacing={2} direction="row">
                           <Link to={`/edit-product/${products.productId}`} ><EditIcon
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
                              onClick = {() => deleteProduct(products.productId)}
                            />
                          </Stack>
                        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}