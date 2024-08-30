const Category = require("../database/category");


async function addCategory(data) {
    return await Category.create(data);
}

async function updateCategory(id, data) {
    return await Category.findOneAndUpdate({ _id: id }, data);
}

async function deleteCategory(id) {
    await Category.deleteOne({ _id: id });
}

async function getAllCategories() {
    return await Category.find({});
}

module.exports = { addCategory, updateCategory, deleteCategory , getAllCategories}

