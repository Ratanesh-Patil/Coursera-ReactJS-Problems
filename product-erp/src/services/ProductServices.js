import axios from 'axios'

const PRODUCT_BASE_REST_API_URL = 'http://localhost:8080/api/products';

class ProductServices{

    getAllProducts(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }

    createProduct(product){
        return axios.post(PRODUCT_BASE_REST_API_URL, product)
    }
    getProductByid(productid){
        return axios.get(PRODUCT_BASE_REST_API_URL+"/edit/"+productid)
    }
    getProductByName(productName){
        return axios.get(PRODUCT_BASE_REST_API_URL+"/"+productName)
    }
    updateProduct(productid, product){
        return axios.put(PRODUCT_BASE_REST_API_URL + '/' +productid, product);
    }
    deleteProduct(productid){
        return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + productid);
    }
    

}

export default new ProductServices();