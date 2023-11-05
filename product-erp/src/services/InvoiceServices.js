import axios from 'axios'

const INVOICE_BASE_REST_API_URL = 'http://localhost:8080/api/invoices';

class InvoiceServices{

    getAllInvoices(){
        return axios.get(INVOICE_BASE_REST_API_URL)
    }

    createInvoice(invoice){
        return axios.post(INVOICE_BASE_REST_API_URL, invoice)
    }
    // getProductByid(productid){
    //     return axios.get(PRODUCT_BASE_REST_API_URL+"/edit/"+productid)
    // }
    // getProductByName(productName){
    //     return axios.get(PRODUCT_BASE_REST_API_URL+"/"+productName)
    // }
    // updateProduct(productid, product){
    //     return axios.put(PRODUCT_BASE_REST_API_URL + '/' +productid, product);
    // }
    // deleteProduct(productid){
    //     return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + productid);
    // }
    

}

export default new InvoiceServices();