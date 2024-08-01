const categoryModel = require('../models/categoryModel')

const getCategories = async () => {
    try {
        const categories = await categoryModel.find();
        return {error:false,data:categories};
    } catch (err) {
        return {error:true,message: err.message};
    }
}

const getCategoryById = async (category_id) => {
    let category;
    try {
        category = await categoryModel.findById(category_id);
        if (category == null) {
            return {error:true, message: 'Cannot find category' }
        }
    } catch (err) {
        return {error:true,message: err.message };
    }

    return {error:false,data:category};;
}

const createCategory = async (categoryD) => {

    if(categoryD.category === ""){
        return {error:true, message: 'Please enter category' }
    }
    
    const category = new categoryModel({
        category: categoryD.category,
    });
    
    try {
        const newCategory = await category.save();
        return {error:false,data: newCategory };
    } catch (err) {
        return {error:true,message: err.message };
    }
}

const updateCategory = async (category_id, categoryD) => {
    let category;
    try {
        category = await categoryModel.findById(category_id);
        if (category == null) {
            return {error:true, message: 'Cannot find category' }
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    category.category = categoryD.category

    category.save()

    return {error:false,data: category };
}

const deleteCategory = async (category_id) => {
    let category;
    try {
        category = await categoryModel.findById(category_id);
        if (category == null) {
            return {error:true, message: 'Cannot find category' }
        }

        try {
            await category.deleteOne({ _id: category_id });
            return {error:false, deleted:true, message: 'Category deleted' }
        } catch (err) {
            return {error:true,message: err.message };
        }

    } catch (err) {
        return {error:true,message: err.message };
    }
}



module.exports.getCategories = getCategories
module.exports.getCategoryById = getCategoryById
module.exports.createCategory = createCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory