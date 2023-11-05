import axios from 'axios'

const PRODUCT_BASE_REST_API_URL = 'http://localhost:8080/api/customer';

class CustomerServices{

    getAllCustomer(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }

    createCustomer(customer){
        return axios.post(PRODUCT_BASE_REST_API_URL, customer)
    }
    getCustomerByid(customerid){
        return axios.get(PRODUCT_BASE_REST_API_URL+"/edit/"+customerid)
    }
    // getProductByName(productName){
    //     return axios.get(PRODUCT_BASE_REST_API_URL+"/"+productName)
    // }
    updateCustomer(customerid, customer){
        return axios.put(PRODUCT_BASE_REST_API_URL + '/' +customerid, customer);
    }
    deleteCustomer(customerid){
        return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + customerid);
    }
    

}

export default new CustomerServices();