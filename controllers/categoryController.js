const CategoryService = require('../services/category.service')

const getCategories = async (req, res) => {
    let categories, status;
    categories = await CategoryService.getCategories()
    if(!categories.error){
        status = 200;
    }else{
        status = 500;
    }
    res.status(status).json(categories);
}

const getCategoryById = async (req, res) => {
    let category,status;
    category = await CategoryService.getCategoryById(req.params.id)
    if(!category.error){
        status = 200;
    }else{
        status = 500;
    }
    res.status(status).json(category);
}

const createCategory = async (req, res) => {
    let status;
    category = await CategoryService.createCategory(req.body)
    if(!category.error){
        status = 201;
    }else{
        status = 400;
    }
    res.status(status).json(category);
}

const updateCategory = async (req, res) => {
    let status;
    category = await CategoryService.updateCategory(req.params.id, req.body)
    if(!category.error){
        status = 200;
    }else{
        status = 400;
    }
    res.status(status).json(category);
}

const deleteCategory = async (req, res) => {
    let status;
    category = await CategoryService.updateCategory(req.params.id)
    if(!category.error){
        status = 200;
    }else{
        status = 400;
    }
    res.status(status).json(category);
}



module.exports.getCategories = getCategories
module.exports.getCategoryById = getCategoryById
module.exports.createCategory = createCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory