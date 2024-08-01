const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController')

router.post('/create', ProductController.createProduct)

router.get('/get/:id', ProductController.getProductById)

router.get('/get', ProductController.getProducts)

router.put('/update/:id', ProductController.updateProduct)

router.delete('/delete/:id', ProductController.deleteProduct)

module.exports = router