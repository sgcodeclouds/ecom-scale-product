const CategoryRepository = require('../repositories/category.repository')


const getCategories = async () => {
    return await CategoryRepository.getCategories();
}

const getCategoryById = async (category_id) => {
    return await CategoryRepository.getCategoryById(category_id);
}

const createCategory = async (category) => {

    return await CategoryRepository.createCategory(category);
}

const updateCategory = async (category_id, category) => {
    return await CategoryRepository.updateCategory(category_id, category);
}

const deleteCategory = async (category_id) => {
    return await CategoryRepository.deleteCategory(category_id);
}



module.exports.getCategories = getCategories
module.exports.getCategoryById = getCategoryById
module.exports.createCategory = createCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory