const express = require("express");
const router = express.Router();
const Category = require("../database/category");


router.post("", async (req, res) => {
    console.log("requesting");
    let categoryInput = req.body;
    let category = await Category.create({
        name: categoryInput.name
    });
    res.json(category);
})

module.exports = router;