const express = require("express");
const router = express.Router();

const { addCategory, updateCategory, getAllCategories, deleteCategory } = require("../handlers/category-handler");


router.post("", async (req, res) => {
    console.log("creating category");
    let categoryInput = req.body;
    let category = await addCategory(categoryInput);
    res.json(category);
})

router.put("/:id", async (req, res) => {
    console.log("updating category");
    let categoryInput = req.body;
    let id = req.params.id;
    let category = await updateCategory(id, categoryInput);
    res.json(category);
})

router.delete("/:id", async (req, res) => {
    await deleteCategory(req.params.id);
    res.send("Category Deleted")
})

router.get("", async (req, res) => {
    let categories = await getAllCategories();
    res.json(categories);
})

module.exports = router