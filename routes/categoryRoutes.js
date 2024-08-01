const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController')

router.post('/create', CategoryController.createCategory)

router.get('/get/:id', CategoryController.getCategoryById)

router.get('/get', CategoryController.getCategories)

router.put('/update/:id', CategoryController.updateCategory)

router.delete('/delete/:id', CategoryController.deleteCategory)

module.exports = router