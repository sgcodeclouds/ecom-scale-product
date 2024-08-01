const ProductRepository = require('../repositories/product.repository')
const CategoryService = require('../services/category.service')


const getProducts = async () => {
    return await ProductRepository.getProducts();
}

const getProductById = async (product_id) => {
    return await ProductRepository.getProductById(product_id);
}

const createProduct = async (productD) => {
    // console.log(productD)
    let category;
    // console.log(productD.product_title)
    // check if values coming from or not
    if(productD.product_title === ""){
        return {error:true, message: 'Please enter product title' }
    }

    // console.log(productD)
    
    // check if category id is valid.
    category = await CategoryService.getCategoryById(productD.category_id)
    // console.log(category)
    if(category.error){
        return category;
    }

    return await ProductRepository.createProduct(productD);
}

const updateProduct = async (product_id, productD) => {
    return await ProductRepository.updateProduct(product_id, productD);
}

const deleteProduct = async (product_id) => {
    return await ProductRepository.deleteProduct(product_id);
}



module.exports.getProducts = getProducts
module.exports.getProductById = getProductById
module.exports.createProduct = createProduct
module.exports.updateProduct = updateProduct
module.exports.deleteProduct = deleteProduct