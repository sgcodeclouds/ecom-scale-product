const productModel = require('../models/productModel')

const getProducts = async () => {
    try {
        const products = await productModel.find().populate('category_id');
        return {error:false,data:products};
    } catch (err) {
        return {error:true,message: err.message};
    }
}

const getProductById = async (product_id) => {
    let product;
    try {
        product = await productModel.findById(product_id).populate('category_id');
        if (product == null) {
            return {error:true, message: 'Cannot find product' }
        }
    } catch (err) {
        return {error:true,message: err.message};
    }

    return {error:false,data:product};
}

const createProduct = async (productD) => {
    const product = new productModel({
        product_title: productD.product_title,
        category_id: productD.category_id,
        product_regular_price: productD.product_regular_price,
        product_base_price: productD.product_base_price,
        product_image: productD.product_image,
    });
    
    try {
        const newProduct = await product.save();
        return {error:false,data:newProduct};
    } catch (err) {
        return {error:true,message: err.message, product:productD};
    }
}

const updateProduct = async (product_id, productD) => {
    let product;
    try {
        product = await productModel.findById(product_id);
        if (product == null) {
            return {error:true, message: 'Cannot find product' }
        }
    } catch (err) {
        return {error:true,message: err.message};
    }

    product.product_title = productD.product_title
    product.category_id = productD.category_id
    product.product_regular_price = productD.product_regular_price
    product.product_base_price = productD.product_base_price
    product.product_image = productD.product_image

    product.save()

    return {error:false,data:product};
}

const deleteProduct = async (product_id) => {
    let product;
    try {
        product = await productModel.findById(product_id);
        if (product == null) {
            return {error:true, message: 'Cannot find product' }
        }

        try {
            await product.deleteOne({ _id: product_id });
            return {error:false, deleted: true, message: 'Product Deleted' }
        } catch (err) {
            return {error:true,message: err.message};
        }

    } catch (err) {
        return {error:true,message: err.message};
    }
}



module.exports.getProducts = getProducts
module.exports.getProductById = getProductById
module.exports.createProduct = createProduct
module.exports.updateProduct = updateProduct
module.exports.deleteProduct = deleteProduct