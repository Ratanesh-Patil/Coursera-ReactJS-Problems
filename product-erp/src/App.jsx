
import './App.css';
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import PaymentInvoice from './components/PaymentInvoice';
import InvoiceForm from './components/InvoiceForm';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import InvoiceToPrint from './components/InvoiceToPrint';

function App() {
  return (
    <div>
    
    <Router>
    <Dashboard/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        <Route path = "/list" element = {<ProductList/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/add-product" element = {<ProductForm/>}></Route>
        <Route path = "/edit-product/:id" element = {<ProductForm/>}></Route>
        <Route path = "/payment-invoice" element = {<PaymentInvoice/>}></Route>
        <Route path = "/invoice-form" element = {<InvoiceForm/>}></Route>
        <Route path = "/customer-list" element = {<CustomerList/>}></Route>
        <Route path = "/add-customer" element = {<CustomerForm/>}></Route>
        <Route path = "/edit-customer/:id" element = {<CustomerForm/>}></Route>
        <Route path = "/invoice-print" element = {<InvoiceToPrint/>}></Route>
      </Routes>
    
    </Router>

    </div>
  );
}

export default App;
