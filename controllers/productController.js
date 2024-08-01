const ProductService = require('../services/product.service')

const getProducts = async (req, res) => {
    let products, status;
    products = await ProductService.getProducts()
    if(!products.error){
        status = 200;
    }else{
        status = 500;
    }
    res.status(status).json(products);
}

const getProductById = async (req, res) => {
    let product,status;
    product = await ProductService.getProductById(req.params.id)
    if(!product.error){
        status = 200;
    }else{
        status = 500;
    }
    res.status(status).json(product);
}

const createProduct = async (req, res) => {
    let status;
    product = await ProductService.createProduct(req.body)
    if(!product.error){
        status = 201;
    }else{
        status = 400;
    }
    res.status(status).json(product);
}

const updateProduct = async (req, res) => {
    let status;
    product = await ProductService.updateProduct(req.params.id, req.body)
    if(!product.error){
        status = 200;
    }else{
        status = 400;
    }
    res.status(status).json(product);
}

const deleteProduct = async (req, res) => {
    let status;
    product = await ProductService.deleteProduct(req.params.id)
    if(!product.error){
        status = 200;
    }else{
        status = 400;
    }
    res.status(status).json(product);
}



module.exports.getProducts = getProducts
module.exports.getProductById = getProductById
module.exports.createProduct = createProduct
module.exports.updateProduct = updateProduct
module.exports.deleteProduct = deleteProduct